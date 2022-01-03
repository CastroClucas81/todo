import React from "react";
import * as C from "./App.styles";
import AddArea from "./components/AddArea";
import ListItem from "./components/ListItem";

import { Item } from "./types/Item";

/*
  Se tratando de react... dicas:

  - Componentize tudo q for usar mais de uma vez
  - Criar um componente mesmo q vá usar uma vez... Se o cód ficar mto grande
  
*/

export default function App() {
  const [list, setList] = React.useState<Item[]>([
    {
      id: 1,
      name: "Comprar o pão da padaria",
      done: false,
    },
    {
      id: 2,
      name: "Comprar o leite na padaria",
      done: true,
    },
  ]);

  function handleAddTask(taskName: string) {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    //preciso jogar no setList... simplesmente clonar n adianta
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          <h3>Lista de tarefas</h3>
        </C.Header>
        {/* área adicionar nova tarefa */}
        <AddArea onEnter={handleAddTask} />

        {/* área lista de tarefas*/}
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
}
