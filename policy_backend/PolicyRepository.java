package com.example.demo;
import com.example.demo.Policy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PolicyRepository extends JpaRepository<Policy, Long> {
    // all crud database methods
}