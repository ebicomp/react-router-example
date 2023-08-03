import React from "react";

const FlexPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        width: "22em",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          padding: "0.5em 1em",
          borderBottom: "1px solid #e3e3e3"
        }}
      >
        Header
      </div>
      <div
        style={{
          padding: "0.5em 1em",
          borderBottom: "1px solid #e3e3e3",
          flex: 1
        }}
      >
        Content
      </div>
      <div
        style={{
          padding: "0.5em 1em",
          borderBottom: "1px solid #e3e3e3"
        }}
      >
        Footer
      </div>
    </div>
  );
};

export default FlexPage;
