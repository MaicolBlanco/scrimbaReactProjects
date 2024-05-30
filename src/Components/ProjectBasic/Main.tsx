import "./Main.css";

interface MainProps {
  darkMode: boolean;
}

const Main= (props: MainProps) => {
  const { darkMode } = props;
  return (
    <main
      className="main-body"
      style={darkMode ? {} : { backgroundColor: "white" }}
    >
      <h1 style={darkMode ? {} : { color: "black" }}>Fun facts about React</h1>
      <ul>
        <li style={darkMode ? {} : { color: "black" }}>
          Was first released in 2013
        </li>
        <li style={darkMode ? {} : { color: "black" }}>
          Was originally created by Jordan Walke
        </li>
        <li style={darkMode ? {} : { color: "black" }}>
          Has well over 100K stars on GitHub
        </li>
        <li style={darkMode ? {} : { color: "black" }}>
          Is maintained by Facebook
        </li>
        <li style={darkMode ? {} : { color: "black" }}>
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
      <span className="logo-agua" style={darkMode ? {} : { color: "gray" }}>
        ∑
      </span>
    </main>
  );
};

export default Main;
