import React from "react";

const Test = (): JSX.Element => {
  const [things, setThings] = React.useState<string[]>(["Thing 1", "Thing 2"]);

  const handleClick = () => {
    const newThing = `Thing ${things.length + 1}`;
    setThings([...things, newThing]);
    console.log(things);
  };

  const thingsElements = things.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  return (
    <div style={{width:"400px", color: "white", margin: "10px auto", padding:'10px', backgroundColor: "#71b85e" }}>
      <h2>Test</h2>
      <button
        onClick={handleClick}
        style={{
          width: "200px",
          color: "white",
          backgroundColor: "#71b85e",
          border: "2px solid white",
          padding: "10px",
          borderRadius: "25px",
          cursor:"pointer",
        }}
      >
        Add Item
      </button>
      {thingsElements}
    </div>
  );
};

export default Test;
