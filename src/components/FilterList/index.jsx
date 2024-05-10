import { Stack } from "@mui/material";
import Filter from "@/components/Filter";
import { FILTER_ITEMS } from "@/constants/filters";

const FilterList = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2 }}
      sx={{ border: "1px solid red", mb: 5 }}
    >
      {FILTER_ITEMS.map(({ label, filterValues }, idx) => (
        <Filter label={label} filterValues={filterValues} />
      ))}
    </Stack>
  );
};

export default FilterList;
