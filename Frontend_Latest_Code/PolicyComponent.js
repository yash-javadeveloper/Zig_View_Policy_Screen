import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePolicy, createPolicy, getPolicyById } from "../PolicyService";

const PolicyComponent = () => {
  const [policyType, setPolicyType] = useState("");
  const [policyName, setPolicyName] = useState("");
  const [policyTo, setPolicyTo] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  const validateForm = () => {
    const newErrors = {};
    if (!policyType) newErrors.policyType = "Policy Type is required.";
    if (!policyName.trim()) newErrors.policyName = "Policy Name is required.";
    if (!policyTo) newErrors.policyTo = "Policy To is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveOrUpdatePolicy = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const policy = { policyType, policyName, policyTo };
  console.log("Submitting Policy Data:", policy);

  try {
    if (id) {
      
      await updatePolicy(id, policy);
      console.log("Policy updated successfully!");

      
      getPolicyById(id)
        .then((response) => {
          setPolicyType(response.data.policyType);
          setPolicyName(response.data.policyName);
          setPolicyTo(response.data.policyTo);
        })
        .catch((error) => console.log("Error Fetching Updated Policy:", error));
    } else {
      await createPolicy(policy);
      console.log("Policy created successfully!");
    }
    navigate("/");
  } catch (error) {
    console.error("Error while saving policy:", error);
  }
};


  useEffect(() => {
  if (id) {
    getPolicyById(id)
      .then((response) => {
        console.log("Fetched Updated Policy Data:", response.data);  // Log the data
        setPolicyType(response.data.policyType || "");
        setPolicyName(response.data.policyName || "");
        setPolicyTo(response.data.policyTo || "");
      })
      .catch((error) => console.log("Error Fetching Policy:", error));
  }
}, [id]);


  const resetForm = (e) => {
    e.preventDefault();
    setPolicyType("");
    setPolicyName("");
    setPolicyTo("");
    setErrors({});
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{id ? "Update Policy" : "Add Policy"}</h2>

            <div className="card-body">
              <form className="p-4 bg-info text-dark">
                {/* Policy Type */}
                <div className="form-group mb-2">
                  <label className="form-label">Policy Type:</label>
                  <select
                    name="policyType"
                    className={`form-control ${errors.policyType ? "is-invalid" : ""}`}
                    value={policyType}
                    onChange={(e) => setPolicyType(e.target.value)}
                    required
                  >
                    <option value="">
                      Select Policy Type
                    </option>
                    <option value="Motor Insurance">Motor Insurance</option>
                    <option value="Medical Insurance">Medical Insurance</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="General Insurance">General Insurance</option>
                  </select>
                  {errors.policyType && <div className="text-danger">{errors.policyType}</div>}
                </div>

                {/* Policy Name */}
                <div className="form-group mb-2">
                  <label className="form-label">Policy Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Policy name"
                    name="policyName"
                    className={`form-control ${errors.policyName ? "is-invalid" : ""}`}
                    value={policyName}
                    onChange={(e) => setPolicyName(e.target.value)}
                    required
                  />
                  {errors.policyName && <div className="text-danger">{errors.policyName}</div>}
                </div>

                {/* Policy To */}
                <div className="form-group mb-2">
                  <label className="form-label">Policy To:</label>
                  <select
                    name="policyTo"
                    className={`form-control ${errors.policyTo ? "is-invalid" : ""}`}
                    value={policyTo}
                    onChange={(e) => setPolicyTo(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Policy To
                    </option>
                    <option value="Self">Self</option>
                    <option value="Dependent">Dependent</option>
                  </select>
                  {errors.policyTo && <div className="text-danger">{errors.policyTo}</div>}
                </div>

                {/* Buttons */}
                <button className="btn btn-danger me-2" onClick={resetForm}>
                  Reset
                </button>
                <button className="btn btn-success" onClick={saveOrUpdatePolicy}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyComponent;