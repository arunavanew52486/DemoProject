package com.psl.model;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Range;

@Entity
public class User {
    @Id
    @NotBlank(message = "Email is mandatory")
    @Size(max=150)
    @Email
    private String email;
    @NotBlank(message = "Password is mandatory")
    @Pattern(regexp = "[a-zA-Z0-9!@#$%^&*:.~]{0,50}$")
    private String password;
    @Embedded
    private @Valid Name name;
    @NotBlank(message = "Mobile Number is mandatory")
    @Pattern(regexp = "[0-9]{10}$")
    private String mobileNumber;
    @Range(min =0,max = 150)
    private Integer age;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Embedded
    private @Valid Address address;

    public User() {
    }

    public User(String email, String password, Name name, String mobileNumber, Integer age, Gender gender, Address address) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
