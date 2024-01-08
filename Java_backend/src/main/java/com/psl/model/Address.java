package com.psl.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class Address {
    private String country;
    private String pin;
    private String city;
    private String area;
    private String landmark;

    public Address() {
    }

    public Address(String country, String pin, String city, String area, String landmark) {
        this.country = country;
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
