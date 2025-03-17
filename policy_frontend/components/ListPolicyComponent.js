import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {listPolicy, deleteEmployee} from '../PolicyService'

const ListPolicyComponent = () => {

    const [Policy, setPolicy] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getAllPolicy();
    }, [])


    const getAllPolicy = () => {
        listPolicy().then((response) => {
            setPolicy(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const removeEmployee = (employeeId) => {
       deleteEmployee(employeeId).then((response) =>{
        getAllPolicy();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    function addNewPolicy() {
        navigate('/add-policy')
    }

    const updateEmployee = (id) => {
        navigate(`/edit-policy/${id}`)
    }

    return (
        <div className = "container">
            <br /><br />
            <h2 className = "text-center"> Policy List </h2>
            {/* <Link to = "/add-policy" className = "btn btn-primary mb-2" > Add Policy </Link> */}
            <button className = "btn btn-info mb-2" onClick={addNewPolicy }>Add New Policies</button>
            <table className="table table-bordered table-striped">
                {/* <thead className="table-blue"> */}
                <thead>   
                    <tr>
                        <th> Policy Id </th>
                        <th> Policy Type </th>
                        <th> Policy Name </th>
                        <th> Policy To </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Policy.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.policyType} </td>
                                <td>{employee.policyName}</td>
                                <td>{employee.policyTo}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => updateEmployee(employee.id)} >Update Policy</button>
                                    <button className = "btn btn-danger" onClick = {() => removeEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete Policy</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListPolicyComponent
