import "./Navbar.css";

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  const { toggleDarkMode, darkMode } = props;

  return (
    <nav
      className="container-nav"
      style={darkMode ? {} : { backgroundColor: "white" }}
    >
      <span className="logo-react">†~ ReactFacts</span>
      <p
        className="extra-title"
        style={darkMode ? {} : { color: "black", fontWeight: "bold" }}
      >
        React Course - Project 1
      </p>
      <button
        style={
          darkMode
            ? {
                marginRight: "10px",
                fontWeight: "bold",
                backgroundColor: "#61DAFB",
              }
            : {
                marginRight: "10px",
                color: "black",
                fontWeight: "bold",
                backgroundColor: "yellow",
              }
        }
        onClick={toggleDarkMode}
      >
        {darkMode ? "Dark" : "Light"}
      </button>
    </nav>
  );
};
