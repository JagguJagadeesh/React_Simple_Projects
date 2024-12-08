import React from "react";
import TranslatedText from "./TranslatedText";
import TextInput from "./TextInput";
import TranslatorAPI from "./Api";
import { LangProvider, useLang } from "./LangContext";

function TranslateButton() {
  const { text, from, to, setTranslatedText } = useLang();

  const handleTranslate = async () => {
    const result = await TranslatorAPI(text, from, to);
    setTranslatedText(result);
  };

  return (
    <button
      className="bg-green-500 rounded-lg px-40 py-2 text-4xl"
      onClick={handleTranslate}
    >
      Translate
    </button>
  );
}

function MultiLangTrans() {
  return (
    <LangProvider>
      <div className="h-screen bg-gradient-to-r text-center from-cyan-500 to-blue-500 text-white">
        <h1 className="text-center text-4xl font-semibold pb-0 pt-6">MultiLang Translation</h1>
        <div className="flex items-center px-6 py-0 gap-4 mt-4  w-full h-[24rem]">
          <div className="w-1/2 h-80 rounded-lg shadow-2xl flex flex-col gap-6 p-4 bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-solid border-white">
            <h1 className="text-2xl font-medium">Input Box</h1>
            <TextInput />
          </div>
          <div className="w-1/2 h-80 rounded-lg shadow-2xl flex flex-col gap-6 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-solid border-white">
            <h1 className="text-2xl font-medium">Output Box</h1>
            <TranslatedText />
          </div>
        </div>
        <TranslateButton />
      </div>
    </LangProvider>
  );
}

export default MultiLangTrans;
