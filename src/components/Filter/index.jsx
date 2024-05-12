import { FormControl, Autocomplete, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useFilters from "@/hooks/useFilters";
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
  const { filters, setFilter, removeFilter, removeAllFilters } =
    useFilters(inputLabel);

  const handleChange = (e, value, reason) => {
    if (reason === "clear") {
      removeAllFilters(inputLabel);
    } else if (["removeOption", "selectOption"].includes(reason)) {
      setFilter(inputLabel, value);
    }
  };

  const handleChipDelete = (deletedChipValue) => {
    removeFilter(inputLabel, deletedChipValue);
  };

  return (
    <FormControl
      size="small"
      sx={{ mr: 1, position: "relative", minWidth: 210 }}
    >
      <Autocomplete
        multiple
        autoComplete
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
            />
          ));
        }}
        size="small"
        value={filters}
      />
    </FormControl>
  );
};

export default Filter;
