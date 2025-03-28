package com.example.demo;
import com.example.demo.PolicyDto;

import java.util.List;

public interface PolicyService {
    List<PolicyDto> getAllPolicy();

    PolicyDto createPolicy(PolicyDto policydto);

    PolicyDto getPolicyById(Long policyId);

    PolicyDto updatePolicy(Long policyId, PolicyDto policyDto);

 void deletePolicy(Long PolicyId);

}