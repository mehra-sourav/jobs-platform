import { Grid, CircularProgress, Box } from "@mui/material";
import useJobs from "@/hooks/useJobs";
import Card from "@/components/Card";
import ErrorIcon from "@mui/icons-material/Error";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import StatusCard from "@/components/StatusCard";

const CardList = () => {
  const { data: jobs, loading, error } = useJobs();
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {loading && (
        <Grid item xs={12}>
          <CircularProgress size={60} />
        </Grid>
      )}
      {error && (
        <Grid item xs={12}>
          <StatusCard
            primary="There was a problem while fetching data"
            type="error"
            Icon={ErrorIcon}
          />
        </Grid>
      )}
      {!loading && !error && jobs?.length === 0 && (
        <Grid item xs={12}>
          <StatusCard
            primary="No jobs available for this category at the moment"
            type="info"
            Icon={SearchOffIcon}
          />
        </Grid>
      )}
      {jobs?.map((job, idx) => (
        <Grid key={idx} item xs={12} sm={4} md={4}>
          <Card key={idx} job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
