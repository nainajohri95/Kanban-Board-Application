import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TuneIcon from "@mui/icons-material/Tune";

const MySelect = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        margineLeft: "20px",
      }}
    >
      <TuneIcon style={{ marginRight: "10px" }} />
      <FormControl fullWidth>
        <InputLabel id="display-select-label">Display</InputLabel>
        <Select
          labelId="display-select-label"
          id="display-select"
          value={selectedValue}
          label="Display"
          onChange={handleChange}
        >
          <MenuItem value="">Display</MenuItem> {/* Default/Empty option */}
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          {/* Add more menu items as needed */}
        </Select>
      </FormControl>
    </div>
  );
};

export default MySelect;
