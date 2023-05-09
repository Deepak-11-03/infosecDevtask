import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-box">
      <h3>Account Settings</h3>
      <div className="profile-details">
        <img className="photo" src="./profile.png" alt="profile of user" />
        <img id="icon" src="./camera.png" alt="camera" />
        <div>
          <h4>Marry Doe</h4>
          <h5>Marry@Gmail.com</h5>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        <br /><span></span>
      </p>
    </div>
  );
}

export default Profile;
