import Filter from "@/components/Filter";
import { Stack } from "@mui/material";

const FilterList = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2 }}
      sx={{ border: "1px solid red", mb: 5 }}
    >
      Filter List
    </Stack>
  );
};

export default FilterList;
