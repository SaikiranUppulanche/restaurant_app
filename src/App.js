import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [ascending, setAscending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems1 = useMemo(() => [5, 3, 1, 10, 9], []);
  const listItems2 = useMemo(() => [5, 3, 1, 10, 9], []);

  const handleListOreder = () => {
    setAscending((prev) => !prev);
  };

  return (
    <div className="app">
      <DemoList
        title={listTitle}
        items1={listItems1}
        items2={listItems2}
        isAscending={ascending}
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={handleListOreder}>
        {ascending ? "change to descending order" : "change to ascending order"}
      </Button>
    </div>
  );
}

export default App;
