import React from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

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
      <SecondComponent name="Segundo!" />
      <Destructuring
        title="Primeiro post!"
        content="Algum conteúdo!"
        commentsQty={10}
        tags={["TS", "Java"]}
      />
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
