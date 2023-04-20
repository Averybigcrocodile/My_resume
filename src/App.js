import styles from './App.module.css';
import cn from 'classnames';
import MyButton from './components/resume/button/MyButton';
import MyForm from './components/resume/form/MyForm';
import MyRelease from './components/release/main/MainPage';
import { useState } from "react";

function App() {
let mainPage = 
  <div className={cn(styles.mainPage)}>
    <div className={cn(styles.resumeIcon)}>
      <MyButton className={cn(styles.mainPage__btn)} onClick={addVisibleResume} />
      <span>Add resume</span>
    </div>
    <div className={cn(styles.releaseIcon)}>
      <MyButton className={cn(styles.mainPage__btn)} onClick={addVisibleRelease} />
      <span>Add model release</span>
    </div>
  </div>

const [visibleResume, setVisibleResume] = useState(null);
const [visibleRelease, setVisibleRelease] = useState(null);
const [visibleAdd, setVisibleAdd] = useState(mainPage);

function addVisibleResume() {
  setVisibleResume(<MyForm />);
  setVisibleAdd(null);
}
function addVisibleRelease() {
  setVisibleRelease(<MyRelease />);
  setVisibleAdd(null);
}

  return (
    <div className={cn(styles.app)}>
      {visibleAdd}
      {visibleResume}
      {visibleRelease}
    </div>
  );
}

export default App;
