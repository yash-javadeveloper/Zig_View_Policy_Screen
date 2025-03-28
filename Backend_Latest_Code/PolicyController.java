package com.example.demo;
import lombok.AllArgsConstructor;
import com.example.demo.PolicyDto;
import com.example.demo.ResourceNotFoundException;
import com.example.demo.Policy;
import com.example.demo.PolicyRepository;
import com.example.demo.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/policies")
public class PolicyController {

  @Autowired
    private PolicyService policyService;

    @GetMapping
    public ResponseEntity<List<PolicyDto>> getAllPolicy(){
        List<PolicyDto> policy = policyService.getAllPolicy();
        return ResponseEntity.ok(policy);
    }

    
    @PostMapping
    public ResponseEntity<PolicyDto> createPolicy(@RequestBody PolicyDto policyDto) {
        PolicyDto policyDto1 = policyService.createPolicy(policyDto);
        return new ResponseEntity<>(policyDto, HttpStatus.CREATED);
    }

    
    @GetMapping("{id}")
    public ResponseEntity<PolicyDto> getPolicyById(@PathVariable("id") Long policyId){
        PolicyDto policy = policyService.getPolicyById(policyId);
        return ResponseEntity.ok(policy);
    }

   
    @PutMapping("{id}")
    public ResponseEntity<PolicyDto> updatePolicy(@PathVariable("id") Long policyId,
                                                   @RequestBody PolicyDto policyDetails) {
        PolicyDto updatePolicy = policyService.updatePolicy(policyId, policyDetails);
        return ResponseEntity.ok(updatePolicy);
    }

    
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long policyId){
        policyService.deletePolicy(policyId);
        return ResponseEntity.ok("Policy deleted successfully!");
    }
}