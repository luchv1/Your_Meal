package com.example.youmeal.controller;

import java.util.Random;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.youmeal.model.ErrorResponse;
import com.example.youmeal.model.Users;
import com.example.youmeal.service.UserService;

@RestController
public class UserController {

    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/user/register")
    public ResponseEntity<?> register(@RequestBody Users user) {
        user.setUsername(user.getEmail().trim());
        user.setPassword("ABC123");

        if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Username is required");
        }
        if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Password is required");
        }
        if (user.getPassword().length() < 3) {
            return ResponseEntity.badRequest().body(new ErrorResponse("Password must be at least 3 characters long"));
        }
        //if (service.userExists(user.getUsername())) {
            // return ResponseEntity.badRequest().body("Username already exists");
        //}
        Users registeredUser = this.service.register(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/user/login")
    public ResponseEntity<String> login(@RequestBody Users user) {
        if (user != null) {
            user.setUsername(user.getEmail());
        }
        String token = service.verify(user);
        if (token.equals("Fail")) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }
        return ResponseEntity.ok(token);
    }
    
}
