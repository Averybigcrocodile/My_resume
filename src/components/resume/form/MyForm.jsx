import "./style.css";
import Header from "../header/Header";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import Save from "../save_button/Save";

const MyForm = () => {
  return (
    <div className="myForm">
      <Header />
      <About />
      <Contacts />
      <div className="educationAndExperience">
        <Education />
        <div className="about__line"></div>
        <Experience />
      </div>
      <Save />
    </div>
  );
};

export default MyForm;
