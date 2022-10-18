import "./styles.css";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const da = useRef(10);

  useEffect(() => {
    console.log("hasgimn");
    console.log(da.current);
  }, [da]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
