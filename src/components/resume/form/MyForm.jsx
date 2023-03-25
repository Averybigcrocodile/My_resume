import "./style.css";
import Header from "../header/Header";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import EducationAndExperience from "../education/EducationAndExperience";
import Save from "../save_button/Save";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const MyForm = () => {
  function savePageAsImage() {
    const element = document.getElementById("myForm");
    element.querySelectorAll(".hide-on-save").forEach((el) => {
      el.style.display = "none";
    });
    html2canvas(element, { backgroundColor: null }).then(function (canvas) {
      canvas.toBlob(
        function (blob) {
          saveAs(blob, "page.jpeg");
        },
        "image/jpeg",
        1
      );
    });
  }

  return (
    <div className="myForm" id="myForm">
      <Header />
      <About />
      <EducationAndExperience />
      <Contacts />
      <Save onClick={savePageAsImage} />
    </div>
  );
};

export default MyForm;
