import { useEffect, useState } from "react";
import "../App.css";

function findItemByTitle(title, data) {
  let filteredData = data.filter((item) => {
    item.title.toLowerCase().includes(title.toLowerCase());
    return props.onSearch(filteredData);
  });
  console.log("filteredData", filteredData);
}

function NaveBar(props) {
    const [inputValue, setinput] = useState("");

  function findItemByTitle(title, data) {
    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(title.toLowerCase());
    });
    console.log("filteredData", filteredData);
    props.onSearch(filteredData);
  }
  return (
    <div className="navebar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <button
        className="btn"
        onClick={() => findItemByTitle(inputValue, props.message)}
      >
        🔍
      </button>
    </div>
  );
}

export default NaveBar;

// let data = props.message.filter((item) => {
//                     return item.title.toLowerCase().includes(inputValue.toLowerCase())
//                     console.log("data", data)
