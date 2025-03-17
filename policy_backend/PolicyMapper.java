package com.example.demo;
import com.example.demo.PolicyDto;
import com.example.demo.Policy;

public class PolicyMapper {

    public static PolicyDto mapToPolicyDto(Policy policy){
        return new PolicyDto(
                policy.getId(),
                policy.getPolicyType(),
                policy.getPolicyName(),
                policy.getPolicyTo()
                
        );
    }

    public static Policy mapToPolicy(PolicyDto policyDto){
        return new Policy(
        		policyDto.getId(),
        		policyDto.getPolicyType(),
        		policyDto.getPolicyName(),
        		policyDto.getPolicyTo()
        );
    }
}