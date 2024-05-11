import { Grid } from "@mui/material";

import Card from "@/components/Card";

const CardList = ({ jobs }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {jobs.map((job, idx) => (
        <Grid key={idx} item xs={12} sm={4} md={4}>
          <Card key={idx} job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
