import React from "react";

function Signup() {
  return (
    <div className="form-container">
      <div className="heading">
        <h1>Create your PopX account</h1>
      </div>
      <div className="form">
        <div className="textOnInput">
          <label htmlFor="inputText">
            Full Name<span className="required">*</span>
          </label>
          <input type="text" placeholder="Enter Full Name" defaultValue="Marry Doe"  />
        </div>
        <div className="textOnInput">
          <label htmlFor="inputText">
            Phone number<span className="required">*</span>
          </label>
          <input type="text" placeholder="Enter Phone number" defaultValue="Marry Doe" />
        </div>
        <div className="textOnInput">
          <label htmlFor="inputText">
            Email address<span className="required">*</span>
          </label>
          <input type="text" placeholder="Enter Email" defaultValue="Marry Doe" />
        </div>
        <div className="textOnInput">
          <label htmlFor="inputText">
            Password<span className="required">*</span>
          </label>
          <input type="text" placeholder="Enter Password" defaultValue="Marry Doe" />
        </div>
        <div className="textOnInput">
          <label htmlFor="inputText">
            Company Name<span className="required">*</span>
          </label>
          <input type="text" placeholder="Enter Company Name" defaultValue="Marry Doe" />
        </div>
        <div className="radio-button">
        <h5>
          Are you an Agency?<span className="required">*</span>
        </h5>
          <input type="radio" name="agency" value="yes" defaultChecked />&nbsp;
          <label htmlFor="yes">Yes</label>&nbsp;&nbsp;
          <input type="radio" name="agency" value="no" />&nbsp;
          <label htmlFor="no">No</label>
        </div>
        <button id="signup-button">Signup</button>
      </div>
    </div>
  );
}

export default Signup;
