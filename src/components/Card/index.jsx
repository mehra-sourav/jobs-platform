import {
  Typography,
  Card as MUICard,
  CardHeader,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import { capitalizeString } from "../../utils/common";

const CardHeaderTitle = ({ companyName, jobRole, location }) => (
  <Box sx={{ textAlign: "left" }}>
    <Typography component="h1" variant="body2">
      {companyName}
    </Typography>
    <Typography component="h5" variant="subtitle1">
      {capitalizeString(jobRole)}
    </Typography>
    <Typography component="h6" variant="caption">
      {capitalizeString(location)}
    </Typography>
  </Box>
);

const CardHeaderSubHeader = ({ minJdSalary, maxJdSalary }) => {
  let salaryRange = "";

  if (minJdSalary != null && maxJdSalary != null) {
    salaryRange = `₹${minJdSalary} - ${maxJdSalary} LPA`;
  } else if (minJdSalary != null) {
    salaryRange = `₹${minJdSalary}+ LPA`;
  } else if (maxJdSalary != null) {
    salaryRange = `₹0 - ${maxJdSalary} LPA`;
  } else {
    salaryRange = "N.A.";
  }

  return (
    <Typography
      component="p"
      variant="body2"
      sx={{
        textAlign: "left",
        position: "absolute",
        left: 0,
        ml: 2,
        fontWeight: 550,
      }}
    >
      Estimated Salary: {salaryRange}
    </Typography>
  );
};

const Card = ({
  job: { logoUrl, companyName, jobRole, location, minJdSalary, maxJdSalary },
}) => {
  return (
    <MUICard
      variant="outlined"
      sx={{ position: "relative", boxShadow: 1, borderRadius: 5 }}
    >
      <CardHeader
        title={
          <CardHeaderTitle
            companyName={companyName}
            jobRole={jobRole}
            location={location}
          />
        }
        avatar={<Avatar alt={`${companyName} Logo`} src={logoUrl} />}
        subheader={
          <CardHeaderSubHeader
            minJdSalary={minJdSalary}
            maxJdSalary={maxJdSalary}
          />
        }
        sx={{ alignItems: "self-start" }}
      />

      <CardContent></CardContent>
    </MUICard>
  );
};

export default Card;
