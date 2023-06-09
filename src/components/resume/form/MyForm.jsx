import styles from "./MyForm.module.css";
import cn from "classnames";
import Header from "../header/Header";
import About from "../about/About";
import Contacts from "../contacts/Contacts";
import EducationAndExperience from "../education/EducationAndExperience";
import Save from "../save_button/Save";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const MyForm = () => {
  function savePageAsImage() {
    const elemForm = document.getElementById("myForm");
    const hiddenElems = document.querySelectorAll(`.${styles.hide_on_save}`);

    hiddenElems.forEach((el) => {
      el.style.display = "none";
    });

    html2canvas(elemForm, { backgroundColor: null }).then(function (canvas) {
      canvas.toBlob(
        function (blob) {
          saveAs(blob, "page.jpeg");
        },
        "image/jpeg",
        1
      );
    });

    hiddenElems.forEach((el) => {
      el.style.display = "block";
    });
  }

  return (
    <div className={cn(styles.myForm)} id="myForm">
      <Header />
      <About />
      <EducationAndExperience />
      <Contacts />
      <Save onClick={savePageAsImage} />
    </div>
  );
};

export default MyForm;
