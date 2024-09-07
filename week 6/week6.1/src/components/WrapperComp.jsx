import React from "react";

function WrapperComp() {
  return (
    <div>
     <CardWrapper innerComponents={<TextComponent/>} />
     <CardWrapper innerComponents={<TextComponent2/>} />

    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CardWrapper({ innerComponents }) {
  return (
    <div style={{ border: "2px solid black", padding: "5px" }}>
     { innerComponents }
    </div>
  );
}

function TextComponent() {
  return <div>Hy There</div>;
}

function TextComponent2() {
    return <div style={{color:"red"}}>Hy There2</div>;
  }
export default WrapperComp;
