import { useState } from "react";
import {
  Typography,
  Card as MUICard,
  CardHeader,
  Avatar,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { Collapse, CardContent, CollapseButton } from "./Card.styles";
import { capitalizeEachWord } from "../../utils/common";

const CardHeaderTitle = ({ companyName, jobRole, location }) => (
  <Box sx={{ textAlign: "left" }}>
    <Typography component="h1" variant="body2">
      {companyName}
    </Typography>
    <Typography component="h5" variant="subtitle1">
      {capitalizeEachWord(jobRole)}
    </Typography>
    <Typography component="h6" variant="caption">
      {capitalizeEachWord(location)}
    </Typography>
  </Box>
);

const CardHeaderSubHeader = ({
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode,
}) => {
  let salaryRange = "";

  if (minJdSalary != null && maxJdSalary != null) {
    salaryRange = `${salaryCurrencyCode} ${minJdSalary} - ${maxJdSalary}k`;
  } else if (minJdSalary != null) {
    salaryRange = `${salaryCurrencyCode} ${minJdSalary}+k`;
  } else if (maxJdSalary != null) {
    salaryRange = `${salaryCurrencyCode} 0 - ${maxJdSalary}k`;
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

const AboutSection = ({ jobDetails }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((oldVal) => !oldVal);
  };

  return (
    <Box>
      <Collapse in={expanded} collapsedSize={250}>
        <Typography sx={{ fontWeight: 550 }}>About Company:</Typography>
        <Typography component="p" variant="subtitle2">
          {jobDetails ?? "N.A."}
        </Typography>
      </Collapse>

      {!expanded && (
        <CollapseButton onClick={toggleExpanded}>View More</CollapseButton>
      )}
    </Box>
  );
};

const Card = ({
  job: {
    logoUrl,
    companyName,
    jobRole,
    location,
    minJdSalary,
    maxJdSalary,
    jobDetailsFromCompany,
    minExp,
    salaryCurrencyCode = "USD",
  },
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
            salaryCurrencyCode={salaryCurrencyCode}
          />
        }
        sx={{ alignItems: "self-start" }}
      />

      <CardContent sx={{}}>
        <AboutSection jobDetails={jobDetailsFromCompany} />

        <Box sx={{ mt: 2 }}>
          <Typography component="p" variant="body2" sx={{ fontWeight: 550 }}>
            Minimum Experience
          </Typography>
          <Typography component="p" variant="subtitle2">
            {minExp != null ? `${minExp} years` : "N.A."}
          </Typography>
        </Box>
      </CardContent>

      <CardActions
        sx={{
          flexDirection: "column",
          px: 2,
          mb: 1,
          gap: 1,
          border: "0px solid red",
        }}
        disableSpacing
      >
        <Button variant="contained" fullWidth>
          Easy Apply
        </Button>
        <Button variant="contained" fullWidth>
          Unlock Referral Asks
        </Button>
      </CardActions>
    </MUICard>
  );
};

export default Card;
