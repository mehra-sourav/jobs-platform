import { useState } from "react";
import { FormControl, Autocomplete, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Chip, SvgIcon } from "./Filter.styles.js";

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

  const handleChange = (e, value) => {
    setVal(value);
  };

  const handleChipDelete = (deletedChip) => {
    let newValues = val.filter((i) => i.value !== deletedChip);
    setVal(newValues);
  };

  return (
    <FormControl
      size="small"
      sx={{ mr: 1, position: "relative", minWidth: 210 }}
    >
      <Autocomplete
        multiple
        options={filterValues}
        getOptionLabel={(option) => option.label}
        popupIcon={<DropDownIcon />}
        renderInput={(params) => <TextField {...params} label={inputLabel} />}
        onChange={handleChange}
        renderTags={(tagValue) => {
          return tagValue.map(({ label, value }) => (
            <ItemChip
              key={label}
              label={label}
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              onDelete={() => handleChipDelete(value)}
              sx={{ mr: 1 }}
            ></ItemChip>
          ));
        }}
        size="small"
        value={val}
      />
    </FormControl>
  );
};

export default Filter;
