import "./style.css";
import Header from "../header/Header";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import EducationAndExperience from "../education/EducationAndExperience";
import Save from "../save_button/Save";

const MyForm = () => {
  return (
    <div className="myForm">
      <Header />
      <About />
      <EducationAndExperience />
      <Contacts />
      <Save />
    </div>
  );
};

export default MyForm;
