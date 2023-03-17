import './App.css';
import MyButton from './components/resume/button/MyButton';
import MyForm from './components/resume/form/MyForm';
import { useState } from "react";

function App() {
let mainPage = 
  <div className='mainPage'>
    <MyButton className='mainPage__btn' onClick={addVisible} />
    <span>Add resume</span>
  </div>

const [visibleForm, setVisibleForm] = useState(null);
const [visibleAdd, setVisibleAdd] = useState(mainPage);

function addVisible() {
  setVisibleForm(<MyForm />);
  setVisibleAdd(null);
}
  return (
    <div className="App">
      {visibleAdd}
      {visibleForm}
    </div>
  );
}

export default App;
