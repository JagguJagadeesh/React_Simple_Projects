import React, { createContext, useContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [from, setFrom] = useState("en");
  const [to, setTo] = useState("te");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  return (
    <LangContext.Provider value={{ from, to, text, translatedText, setFrom, setTo, setText, setTranslatedText }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
