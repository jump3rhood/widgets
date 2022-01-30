import Accordion from "./components/Accordion";
import Search from "./components/Search";
import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
const items = [
  {
    title: "What is a dog?",
    content:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  },
  {
    title: "What kinds of dogs are there?",
    content:
      "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
  },
  {
    title: "How do you acquire a dog?",
    content:
      "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
  },
];
const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Cyan",
    value: "cyan",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </div>
  );
}

export default App;

// wikipedia api end point
/*
en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=?
*/
