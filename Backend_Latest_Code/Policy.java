package com.example.demo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Policies")
public class Policy {
 @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public long getId() {
  return id;
 }

 public void setId(long id) {
  this.id = id;
 }

 public String getPolicyType() {
  return PolicyType;
 }

 public void setPolicyType(String policyType) {
  PolicyType = policyType;
 }

 public String getPolicyName() {
  return PolicyName;
 }

 public void setPolicyName(String policyName) {
  PolicyName = policyName;
 }

 public String getPolicyTo() {
  return PolicyTo;
 }

 public void setPolicyTo(String policyTo) {
  PolicyTo = policyTo;
 }

    @Column(name = "policy_type")
    private String PolicyType;

    @Column(name = "policy_name")
    private String PolicyName;

    @Column(name = "policy_to")
    private String PolicyTo;
    
 
    public Policy()
 {
  
 }

    public Policy(long id, String PolicyType, String PolicyName, String PolicyTo) {
  // TODO Auto-generated constructor stub
     this.id=id;this.PolicyType=PolicyType;this.PolicyName=PolicyName;this.PolicyTo=PolicyTo;
 }



 
}