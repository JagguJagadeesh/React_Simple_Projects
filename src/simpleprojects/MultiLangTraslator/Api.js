const TranslatorAPI = async (text, from, to) => {
  const url = `https://free-google-translator.p.rapidapi.com/external-api/free-google-translator?from=${from}&to=${to}&query=${text}`;
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "8e2867f76emsh2dd6c6b1a8836f2p1a19b2jsn2cf06593515e",
      "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.translation;
  } catch (error) {
    console.error("Translation error:", error);
    return "Translation failed.";
  }
};

export default TranslatorAPI;
