import React from "react";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="main-body">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <span className="logo-agua">∑</span>
    </main>
  );
};

export default Main;
