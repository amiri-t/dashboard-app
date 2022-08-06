import Checkbox from "../../components/checkbox/Checkbox";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settings-container">
        <Navbar />
        <h2 className="title">Settings</h2>
        <div>
          <div className="title">Notification</div>
          <div className="sett1">
            <div className="col">
              <h4>Notifications</h4>
              <span>
                <Checkbox />
              </span>
            </div>
            <div className="col">
              <h4>Email Notifications</h4>
              <span>
                <Checkbox />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="title">Account</div>
          <div className="sett1">
            <div className="col">
              <h4>Keep this device Logged in</h4>
              <span>
                <Checkbox />
              </span>
            </div>
            <div className="col">
              <h4>Keep other devices Logged in</h4>
              <span>
                <Checkbox />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="title">Language</div>
          <div className="sett1">
            <div className="col">
              <h4>English</h4>
              <span>
                <Checkbox />
              </span>
            </div>
            <div className="col">
              <h4>Spanish</h4>
              <span>
                <Checkbox />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="title">Security</div>
          <div className="sett1">
            <div className="col">
              <h4>Private Account</h4>
              <span>
                <Checkbox />
              </span>
            </div>
            <div className="col">
              <h4>2-Step Verification</h4>
              <span>
                <Checkbox />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
