import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items1, items2, isAscending } = props;

  const descendingSortedList = useMemo(() => {
    console.log("running ascending");
    return items1.sort((a, b) => b - a);
  }, [items1]);

  const ascendingSortedList = useMemo(() => {
    console.log("running descending");
    return items2.sort((a, b) => a - b);
  }, [items2]);
  console.log("DemoList RUNNING");
  console.log(descendingSortedList, ascendingSortedList);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {isAscending
          ? ascendingSortedList.map((item) => <li key={item}>{item}</li>)
          : descendingSortedList.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
