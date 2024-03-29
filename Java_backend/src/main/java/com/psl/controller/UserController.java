package com.psl.controller;

import com.psl.model.User;
import com.psl.model.UserLoginDetails;
import com.psl.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User addUser(@RequestBody @Valid User user){
        return userService.addUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@RequestBody @Valid UserLoginDetails user){
        try {
            User userToFind=userService.findUser(user);
            if(userToFind.getEmail().equals(user.getEmail()) && userToFind.getPassword().equals(user.getPassword())) {
                return ResponseEntity.status(HttpStatus.OK)
                        .body("{\"email\": \"" + userToFind.getEmail() + "\", \"status\": \"" + HttpStatus.OK + "\"}");
            }
            else if(userToFind.getEmail().equals(user.getEmail()) && ! userToFind.getPassword().equals(user.getPassword())){
                    return new ResponseEntity<>("Wrong Credentials",HttpStatus.UNAUTHORIZED);
            }
        }
        catch(Exception e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getalluser")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @GetMapping("/getuser/{email}")
    public User getUserById(@PathVariable @Valid String email){return userService.getUserById(email);}
}
