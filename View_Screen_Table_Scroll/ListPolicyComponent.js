import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {listPolicy, deletePolicy} from '../PolicyService'

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

    const removePolicy = (policyId) => {
       deletePolicy(policyId).then((response) =>{
        getAllPolicy();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    function addNewPolicy() {
        navigate('/add-policy')
    }

    const updatePolicy = (id) => {
        navigate(`/edit-policy/${id}`)
    }

    return (
        <div className = "container">
            <br/>
            <h2 className = "text-center"> Policy List </h2>
             {/* <Link to = "/add-policy" className = "btn btn-primary mb-2" > Add Policy </Link> */} 
            <button className = "btn btn-info mb-2" onClick={addNewPolicy}>Add  Policy </button> 
            <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc" }}>
            <table className="table table-bordered table-striped" style={{ width: "100%", tableLayout: "fixed" }}>
                <thead style={{ position: "sticky", top: "0", background: "#fff", zIndex: "100" }}>
                    <tr>
                        <th style={{ width: "15%" }}> Policy Id </th>
                        <th style={{ width: "20%" }}> Policy Type </th>
                        <th style={{ width: "25%" }}> Policy Name </th>
                        <th style={{ width: "20%" }}> Policy To </th>
                        <th style={{ width: "35%" }}> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Policy.map(
                            policy =>
                            <tr key = {policy.id}> 
                                <td> {policy.id}</td>
                                <td> {policy.policyType}</td>
                                <td>{policy.policyName}</td>
                                <td>{policy.policyTo}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => updatePolicy(policy.id)} >Update Policy</button>
                                    <button className = "btn btn-danger" onClick = {() => removePolicy(policy.id)}
                                    style = {{marginLeft:"10px"}}> Delete Policy</button>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
     </div>
    )
}

export default ListPolicyComponent