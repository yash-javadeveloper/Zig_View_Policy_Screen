package com.example.demo;

import com.example.demo.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AuthService implements UserService {

    @Override
    public ResponseEntity<?> authenticateUser(Map<String, String> user) {
        String userId = user.get("userId");
        String password = user.get("password");

        if ("zurich".equals(userId) && "zurich@123".equals(password)) {
            return ResponseEntity.ok(Map.of("message", "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials"));
        }
    }
}
