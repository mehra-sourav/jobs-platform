import { Stack } from "@mui/material";
import Filter from "@/components/Filter";
import { FILTER_ITEMS } from "@/constants/filters";

const FilterList = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ border: "1px solid red", mb: 5 }}
    >
      {FILTER_ITEMS.map(({ label, filterValues }) => (
        <Filter key={label} inputLabel={label} filterValues={filterValues} />
      ))}
    </Stack>
  );
};

export default FilterList;
