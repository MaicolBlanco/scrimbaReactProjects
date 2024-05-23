import React from "react";

const TestOne = (): JSX.Element => {
  const [thingsArray, setThingsArray] = React.useState<string[]>(["Thing 1", "Thing 2"]);

  const addItem = () => {
    const newThing = `Thing ${thingsArray.length + 1}`;
    setThingsArray([...thingsArray, newThing]);
    //console.log(things);
  };

  const thingsElements = thingsArray.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  return (
    <div
      style={{
        width: "400px",
        color: "white",
        margin: "10px auto",
        padding: "10px",
        backgroundColor: "#71b85e",
      }}
    >
      <h2>Test</h2>
      <button
        onClick={addItem}
        style={{
          width: "200px",
          color: "white",
          backgroundColor: "#71b85e",
          border: "2px solid white",
          padding: "10px",
          borderRadius: "25px",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
      {thingsElements}
    </div>
  );
};

export default TestOne;
