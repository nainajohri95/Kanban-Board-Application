import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { GiSettingsKnobs } from "react-icons/gi";

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
      <GiSettingsKnobs />
      {/* <label for="grouping-options" class="dropdown-label">
        Display:
      </label> */}
      <select id="grouping-options" class="dropdown-select">
        <option value="status">Display</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default MySelect;
