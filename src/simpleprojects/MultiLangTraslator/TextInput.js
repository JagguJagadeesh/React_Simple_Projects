import React, { useState } from "react";
import data from "./data.json";
import { useLang } from "./LangContext";

function TextInput() {
  const { setFrom, setText } = useLang();
  const [val,setval] = useState("English")
  const values = Object.values(data);

  return (
    <div className="flex flex-col w-full h-full gap-6">
      <select
        value={val}
        onChange={(e) => {setFrom(Object.keys(data).find((key) => data[key] === e.target.value));setval(e.target.val)}}
        className="rounded-lg px-2 py-1 text-black"
      >
        {values.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <textarea
        className="h-40 p-2 rounded text-black"
        placeholder="Enter Text Here"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
