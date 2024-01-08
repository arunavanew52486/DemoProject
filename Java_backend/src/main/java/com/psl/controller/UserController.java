package com.psl.controller;

import com.psl.model.User;
import com.psl.model.UserLoginDetails;
import com.psl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/login")
    public ResponseEntity<?> userLogin(@RequestBody UserLoginDetails user){
        try {
            if (userService.findUser(user) != null) {
                return new ResponseEntity<>(HttpStatus.OK);
            }
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/getalluser")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @GetMapping("/getuser/{email}")
    public User getUserById(@PathVariable String email){return userService.getUserById(email);}
}
