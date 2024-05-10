import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Box, Chip } from "@mui/material";
import DropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledSelect } from "./Filter.styles.js";

const Filter = ({ inputLabel, filterValues }) => {
  let [val, setVal] = useState([]);

  const handleChange = (event) => {
    setVal((oldVal) => [...oldVal, event.target.value]);
  };

  return (
    <FormControl size="small" sx={{ mr: 1 }}>
      <InputLabel
        sx={{
          position: "relative",
          top: 22,
          paddingRight: 6,
          maxWidth: "100%",
        }}
      >
        {inputLabel}
      </InputLabel>
      <StyledSelect
        value={val}
        label={inputLabel}
        IconComponent={DropDownIcon}
        autoWidth
        onChange={handleChange}
        multiple
        renderValue={(selected) => {
          console.log("selected:", selected);
          return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          );
        }}
      >
        {filterValues.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default Filter;
