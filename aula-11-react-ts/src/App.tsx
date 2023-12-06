import React from "react";
import FirstComponent from "./components/FirstComponent";

function App() {
  //Variables
  const name: string = "Matheus";
  const age: number = 25;
  const isWorking: boolean = true;

  //Functions

  const userGreeting = (name: string): string => {
    return `Olá, ${name}	`;
  };
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <FirstComponent />
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
