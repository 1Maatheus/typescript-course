import React, { ChangeEvent } from "react";

const State = () => {
  const [text, setText] = React.useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
