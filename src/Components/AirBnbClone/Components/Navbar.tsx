import "../Styles/Navbar.css";

const Navbar = (): JSX.Element => {
  return (
    <nav className="airbnb-logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" />
      <span></span>
    </nav>
  );
};

export default Navbar;
// import React from 'react';

// interface TitleProps {
//   text: string;
// }

// const Navbar: React.FC<TitleProps> = ({ text }) => {
//   return (
//     <h1>{text}</h1>
//   );
// };

// export default Navbar;
