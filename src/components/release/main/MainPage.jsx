import cn from "classnames";
import styles from "./MainPage.module.css";
import { useState } from "react";
import Photosession from "../photosession/Photosession";
import Photographer from "../photographer/Photographer";
import Model from "../model/Model";
import Info from "../info/Info";
import Sign from "../sign/Sign";
import MyRelease from "../form/MyRelease";
import Personal from "../personal/Personal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainPage = () => {
  // фотограф
  const [namePh, setNamePh] = useState("");
  const [phonePh, setPhonePh] = useState("");
  // модель
  const [photoMd, setPhotoMd] = useState("");
  const [nameMd, setNameMd] = useState("");
  const [dateMd, setDateMd] = useState("");
  const [cityMd, setCityMd] = useState("");
  const [adressMd, setAdressMd] = useState("");
  const [passportMd, setPassportMd] = useState("");
  const [phoneMd, setPhoneMd] = useState("");
  // фотосесія
  const [nameOfShoot, setNameOfShoot] = useState("");
  const [dateOfShoot, setDateOfShoot] = useState("");
  const [placeOfShoot, setPlaceOfShoot] = useState("");
  // підписи
  const [signPh, setSingPh] = useState("");
  const [signMd, setSingMd] = useState("");
  // Інформація про фотосесію
  const handleNameOfShootChange = (value) => {
    setNameOfShoot(value);
  };
  const handleDateOfShootChnage = (value) => {
    setDateOfShoot(value);
  };
  const handlePlaceOfShootChange = (value) => {
    setPlaceOfShoot(value);
  };
  // Інформація про фотографа
  const handleNamePhChange = (value) => {
    setNamePh(value);
  };
  const handlePhonePhChange = (value) => {
    setPhonePh(value);
  };
  //Інформація про модель
  const handlePhotoMdChange = (value) => {
    setPhotoMd(value);
  };
  const handleNameMdChange = (value) => {
    setNameMd(value);
  };
  const handleDateMdChange = (value) => {
    setDateMd(value);
  };
  const handleCityMdChange = (value) => {
    setCityMd(value);
  };
  const handleAdressMdChange = (value) => {
    setAdressMd(value);
  };
  const handlePassportMdChange = (value) => {
    setPassportMd(value);
  };
  const handlePhoneMdChange = (value) => {
    setPhoneMd(value);
  };
  // підпис
  const handleSignPhChage = (value) => {
    setSingPh(value);
  };
  const handleSignMdChage = (value) => {
    setSingMd(value);
  };

  return (
    <div className={cn(styles.mainPage)}>
      <Photosession
        nameOfShootChange={handleNameOfShootChange}
        dateOfShootChange={handleDateOfShootChnage}
        placeOfShootChange={handlePlaceOfShootChange}
      />
      <Photographer
        nameChange={handleNamePhChange}
        phoneChange={handlePhonePhChange}
      />
      <Model
        photoChange={handlePhotoMdChange}
        nameChange={handleNameMdChange}
        dateOfBirthChange={handleDateMdChange}
        cityChange={handleCityMdChange}
        adressChange={handleAdressMdChange}
        passportChange={handlePassportMdChange}
        phoneChange={handlePhoneMdChange}
      />
      <Info />
      <Sign signPhChange={handleSignPhChage} signMdChange={handleSignMdChage} />
      <div className={cn(styles.myRelease)}>
        <MyRelease namePh={namePh} nameMd={nameMd} />
        <Personal
          nameOfShoot={nameOfShoot}
          dateOfShoot={dateOfShoot}
          placeOfShoot={placeOfShoot}
          namePh={namePh}
          phonePh={phonePh}
          photoMd={photoMd}
          nameMd={nameMd}
          dateOfBirthMd={dateMd}
          cityMd={cityMd}
          adressMd={adressMd}
          passportMd={passportMd}
          phoneMd={phoneMd}
          signPh={signPh}
          signMd={signMd}
        />
      </div>
    </div>
  );
};

export default MainPage;
