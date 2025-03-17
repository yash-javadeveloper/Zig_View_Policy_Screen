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

	@Column(name = "policyType")
    private String policyType;

    @Column(name = "policyName")
    private String policyName;
    
    @Column(name = "policyTo")
    private String policyTo;

    public String getPolicyTo() {
		return policyTo;
	}

	public void setPolicyTo(String policyTo) {
		this.policyTo = policyTo;
	}

	public String getPolicyType() {
		return policyType;
	}

	public void setPolicyType(String policyType) {
		this.policyType = policyType;
	}

	
	
    public Policy()
	{
		
	}

    public Policy(long id, String policyType, String policyName, String policyTo) {
		// TODO Auto-generated constructor stub
    	this.id=id;
    	this.policyType=policyType;
    	this.policyName=policyName;
    	this.policyTo=policyTo;
    	
    }

	public String getPolicyName() {
		return policyName;
	}

	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
}