package com.example.demo;
import com.example.demo.Policy;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PolicyRepository extends JpaRepository<Policy, Long> {
	
    
}