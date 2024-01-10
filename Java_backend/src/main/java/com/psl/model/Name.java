package com.psl.model;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.*;

@Embeddable
public class Name {
    @NotBlank(message = "First name is mandatory")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z ]{2,50}$")
    private String firstName;
    @NotBlank(message = "Last name is mandatory")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z ]{2,50}$")
    private String lastName;

    public Name() {
    }

    public Name(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
