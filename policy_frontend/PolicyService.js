import axios from 'axios'

const POLICY_BASE_REST_API_URL = 'http://localhost:8080/api/v1/policies';

export const listPolicy = () => {
    return axios.get(POLICY_BASE_REST_API_URL)
};

export const createPolicy = (policy) => {
    return axios.post(POLICY_BASE_REST_API_URL, policy)
}

export const getPolicyById = (policyId) => {
    return axios.get(POLICY_BASE_REST_API_URL + '/' + policyId);
}

export const updateEmployee = (employeeId, employee) => {
    return axios.put(POLICY_BASE_REST_API_URL + '/' +employeeId, employee);
}

export const deleteEmployee = (employeeId) => {
    return axios.delete(POLICY_BASE_REST_API_URL + '/' + employeeId);
}