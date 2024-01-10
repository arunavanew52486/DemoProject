package com.psl.model;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Embeddable
public class Address {
    @Pattern(regexp = "[a-zA-Z ]{0,25}$")
    private String country;
    @Pattern(regexp = "[a-zA-Z ]{0,25}$")
    private String state;
    @Pattern(regexp = "[0-9]{6}$")
    private String pin;
    @Pattern(regexp = "[a-zA-Z ]{0,25}$")
    private String city;
    @Pattern(regexp = "[a-zA-Z0-9!@#$%^&*:., -]{0,100}$")
    private String area;
    @Pattern(regexp = "[a-zA-Z0-9!@#$%^&*:., ]{0,50}$")
    private String landmark;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Address() {
    }

    public Address(String country, String state, String pin, String city, String area, String landmark) {
        this.country = country;
        this.state = state;
        this.pin = pin;
        this.city = city;
        this.area = area;
        this.landmark = landmark;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }
}
