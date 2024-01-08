package com.psl.model;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    private String email;
    private String password;
    @Embedded
    private Name name;
    private String mobileNumber;
    private Integer age;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Embedded
    private Address address;

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
