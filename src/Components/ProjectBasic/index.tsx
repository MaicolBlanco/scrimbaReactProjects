import React from 'react';
import { Navbar } from "./Navbar";
import Main from "./Main";

export const ProjectBasic = (): JSX.Element => {
  const [darkMode, setDarkMode] = React.useState(true)

  const toggleDarkMode = () =>{
    //console.log("Clicked!");
    setDarkMode(!darkMode);
  }
  return (
    <div style={{marginTop: 30}}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
};
