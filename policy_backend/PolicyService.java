package com.example.demo;
import com.example.demo.PolicyDto;

import java.util.List;

public interface PolicyService {
    List<PolicyDto> getAllPolicy();
    
    PolicyDto getPolicyById(Long policyId);
}
