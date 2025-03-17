import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import {getPolicyById} from '../PolicyService';

const PolicyComponent = () => {

    const [policyType, setPolicyType] = useState('')
    const [policyName, setPolicyName] = useState('')
    const [policyTo, setPolicyTo] = useState('')
    

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdatePolicy = (e) => {
        e.preventDefault();

        const policy = {policyType, policyName, policyTo};

        console.log(policy);
     

    useEffect(() => {

        if(id){
            getPolicyById(id).then((response) =>{
                setPolicyType(response.data.policyType);
                setPolicyName(response.data.policyName);
                setPolicyTo(response.data.policyTo);
                
            }).catch(error => {
                console.log(error)
            })
        }

    }, [id])

    return (
        <div>
           <br/>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body" style={{ marginTop: '-20px' }}>
                            <form class="p-4 bg-warning text-dark">
                                 <div className = "form-group mb-2">
                                    <label className = "form-label"> Policy Type :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Policy type"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {policyType}
                                        onChange = {(e) => setPolicyType(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Policy Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Policy name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {policyName}
                                        onChange = {(e) => setPolicyName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Policy To :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Policy to"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {policyTo}
                                        onChange = {(e) => setPolicyTo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdatePolicy(e)} >Submit </button>
                                {/* <Link to="/policies" className="btn btn-danger"> Cancel </Link> */}
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default PolicyComponent
