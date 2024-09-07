import React from "react";
import { useState } from "react";


 function HeaderMain() {
  const [title, setTitle] = useState("My name is");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Updates the title</button>
      <Header title={title} />
      <Header title={title} />

      <Header title="Vibhu1" />
      <Header title="Vibhu1" />

      <Header title="Vibhu1" />
      <Header title="Vibhu1" />
    </div>
  );}


  // eslint-disable-next-line react/prop-types
  const Header = React.memo(function Header({ title }) {
    return (
      <>
        <h1>{title}</h1>
      </>
    );
  });



  function HeaderWithButton() {
    const [title, setTitle] = useState(" My name is ");
    function updateTitle() {
      setTitle("My name is " + Math.random());
    }
    return (
      <>
        <button onClick={updateTitle}>Updates the title</button>

        <Header title={title} />
      </>
    );
  }

 
  function Header2({ title }) {
    return (
      <>
        <h1>{title}</h1>
      </>
    );
  }


export default HeaderMain;
