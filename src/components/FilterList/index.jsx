import { Stack, Grid } from "@mui/material";
import Filter from "@/components/Filter";
import { FILTER_ITEMS } from "@/constants/filters";

const FilterList = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      sx={{ mb: 5, justifyContent: "center" }}
      xl
    >
      {FILTER_ITEMS.map(({ label, filterValues }) => (
        <Grid item xs={12} sm={4} md={2.5} lg={2.2}>
          <Filter key={label} inputLabel={label} filterValues={filterValues} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FilterList;
