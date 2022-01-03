import React from "react";
import * as C from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

export default function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = React.useState("");

  //poder pegar a tecla
  function handleKeyUp(e: React.KeyboardEvent) {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}
