import { BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./Components/Home";
// Sample Projects 
import PasswordGenrator from "./simpleprojects/PasswordGenrator";
import CurrencyConverter from "./simpleprojects/Currency/CurrencyConverter";
import LearningContextAPI from "./simpleprojects/ContextAPI.js/LearningContextAPI";
import TaskManager from "./simpleprojects/Task_manager/TaskManager";
import ImageEditer from "./simpleprojects/ImageEditer/ImageEditer";
import MultiLangTrans from "./simpleprojects/MultiLangTraslator/MultiLangTrans";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/passwordgen" element={<PasswordGenrator/>} />
        <Route path="/currencyconvert" element={<CurrencyConverter/>} />
        <Route path="/contextapi" element={<LearningContextAPI/>} />
        <Route path="/taskmanager" element={<TaskManager/>} />
        <Route path="/imgeditor" element={<ImageEditer/>} />
        <Route path="/languagetranslator" element={<MultiLangTrans/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
