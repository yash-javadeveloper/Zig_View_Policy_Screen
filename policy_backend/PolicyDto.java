package com.example.demo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PolicyDto 
{
	private long id;
	private String policyType;
    private String policyName;
    private String policyTo;
    
    public String getPolicyTo() {
		return policyTo;
	}
	public void setPolicyTo(String policyTo) {
		this.policyTo = policyTo;
	}
	public PolicyDto(long id,  String policyName,String policyType, String policyTo) {
		// TODO Auto-generated constructor stub
    	this.id=id;
    	this.policyType=policyType;
    	this.policyName=policyName;
    	this.policyTo=policyTo;
	}
    public String getPolicyType() {
		return policyType;
	}
	public void setPolicyType(String policyType) {
		this.policyType = policyType;
	}
	public long getId() {
		return id;
	}
	
	public String getPolicyName() {
		return policyName;
	}
	public void setPolicyName(String policyName) {
		this.policyName = policyName;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	
	
}