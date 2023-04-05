import styles from './App.module.css';
import cn from 'classnames';
import MyButton from './components/resume/button/MyButton';
import MyForm from './components/resume/form/MyForm';
import { useState } from "react";

function App() {
let mainPage = 
  <div className={cn(styles.mainPage)}>
    <MyButton className={cn(styles.mainPage__btn)} onClick={addVisible} />
    <span>Add resume</span>
  </div>

const [visibleForm, setVisibleForm] = useState(null);
const [visibleAdd, setVisibleAdd] = useState(mainPage);

function addVisible() {
  setVisibleForm(<MyForm />);
  setVisibleAdd(null);
}
  return (
    <div className={cn(styles.App)}>
      {visibleAdd}
      {visibleForm}
    </div>
  );
}

export default App;
