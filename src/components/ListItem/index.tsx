import React from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

//recebendo props com typescript
type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
};

export default function ListItem({ item, onChange }: Props) {
  return (
    //posso passar uma propriedade pro style
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <label htmlFor="">
        {item.name} - {item.done === true ? "Feito" : "A fazer"}
      </label>
    </C.Container>
  );
}
