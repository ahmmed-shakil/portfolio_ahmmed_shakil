import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputComponent = ({ setValue }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    setValue && setValue(phoneNumber);
  }, [phoneNumber, setValue]);
  return (
    <PhoneInput
      inputStyle={{ height: "45px", width: "100%" }}
      country={"bd"}
      value={phoneNumber}
      onChange={(phone) => setPhoneNumber(phone)}
    />
  );
};

export default PhoneInputComponent;
