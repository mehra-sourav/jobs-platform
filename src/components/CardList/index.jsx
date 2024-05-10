import { Grid } from "@mui/material";

import Card from "@/components/Card";

const CardList = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={12} sm={4} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default CardList;
