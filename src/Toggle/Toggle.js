import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  alert(toggle);
  return (
    <div
      style={{
        color: "black",
        background: "green",
        padding: "30px",
        margin: "30px",
        textAlign: "center",
      }}
    >
      {toggle && (
        <p>
          dedjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
        </p>
      )}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "hide" : "show"}
      </button>
    </div>
  );
};

export default Toggle;
