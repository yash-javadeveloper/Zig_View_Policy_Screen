package com.example.demo;
import lombok.AllArgsConstructor;
import com.example.demo.PolicyDto;
import com.example.demo.ResourceNotFoundException;
import com.example.demo.PolicyMapper;
import com.example.demo.Policy;
import com.example.demo.PolicyRepository;
import com.example.demo.PolicyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PolicyServiceImpl implements PolicyService {

 @Autowired
 private PolicyRepository policyRepository;

    @Override
    public List<PolicyDto> getAllPolicy() {
        List<Policy> policies = policyRepository.findAll();
        List<PolicyDto> policyDtos = policies.stream()
                .map(PolicyMapper::mapToPolicyDto)
                .collect(Collectors.toList());
        return policyDtos;
    }

    @Override
    public PolicyDto createPolicy(PolicyDto PolicyDto) {
        Policy policy = PolicyMapper.mapToPolicy(PolicyDto);
        Policy savedPolicy = policyRepository.save(policy);
        return PolicyMapper.mapToPolicyDto(savedPolicy);
    }

    @Override
    public PolicyDto getPolicyById(Long PolicyId) {
        Policy policy = policyRepository.findById(PolicyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Policy not exist with id: " + PolicyId));
        PolicyDto policyDto = PolicyMapper.mapToPolicyDto(policy);
        return policyDto;
    }
    
    

    @Override
    public PolicyDto updatePolicy(Long policyId, PolicyDto policyDto) {

        Policy existingPolicy = policyRepository.findById(policyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Policy not exist with id: " + policyId));

        existingPolicy.setPolicyType(policyDto.getPolicyType());
        existingPolicy.setPolicyName(policyDto.getPolicyName());
        existingPolicy.setPolicyTo(policyDto.getPolicyTo());
        
        policyRepository.save(existingPolicy);
        return PolicyMapper.mapToPolicyDto(existingPolicy);
    }
    

    @Override
    public void deletePolicy(Long PolicyId) {

     Policy existingPolicy = policyRepository.findById(PolicyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Policy not exist with id: " + PolicyId));

        policyRepository.deleteById(PolicyId);
    }

}