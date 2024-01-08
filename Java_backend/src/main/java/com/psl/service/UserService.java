package com.psl.service;

import com.psl.model.User;
import com.psl.model.UserLoginDetails;
import com.psl.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User addUser(User user){
        return repository.save(user);
    }

    public User findUser(UserLoginDetails user) throws NoSuchElementException {
        return repository.findById(user.getEmail()).get();
    }

    public List<User> getAllUser(){
        return (List<User>) repository.findAll();
    }

    public User getUserById(String email){
       return repository.findById(email).get();
    }


}
