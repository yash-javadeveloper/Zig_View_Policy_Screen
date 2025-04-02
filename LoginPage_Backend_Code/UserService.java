package com.example.demo;

import org.springframework.http.ResponseEntity;
import java.util.Map;

public interface UserService {
    ResponseEntity<?> authenticateUser(Map<String, String> user);
}