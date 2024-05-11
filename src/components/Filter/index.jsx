import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Select, Chip, SvgIcon } from "./Filter.styles.js";

const ItemChip = ({ ...params }) => (
  <Chip
    deleteIcon={
      <SvgIcon size="small">
        <ClearIcon />
      </SvgIcon>
    }
    size="small"
    {...params}
  />
);

const Filter = ({ inputLabel, filterValues }) => {
  let [val, setVal] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setVal(typeof value === "string" ? value.split(",") : value);
  };

  const handleChipDelete = (deletedChip) => {
    let newValues = val.filter((i) => i != deletedChip);
    setVal(newValues);
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
      <Select
        value={val}
        label={inputLabel}
        IconComponent={DropDownIcon}
        autoWidth
        onChange={handleChange}
        multiple
        renderValue={(selected) => {
          return (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <ItemChip
                  key={value}
                  label={value}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                  }}
                  onDelete={() => handleChipDelete(value)}
                ></ItemChip>
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
      </Select>
    </FormControl>
  );
};

export default Filter;
