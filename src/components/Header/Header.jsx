import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import "../Header/Header.css";

const MySelect = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "inline-block",
        alignItems: "center",
        marginTop: "20px",
        margineLeft: "20px",
      }}
    >
      <p></p>
      <GiSettingsKnobs />
      <select class="dropdown-select">
        <option value="status">Display</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default MySelect;
