import { Box, Typography } from "@mui/material";

const StatusCard = ({ primary, type, primaryStyle, secondaryStyle, Icon }) => {
  return (
    <Box sx={{ ...primaryStyle }}>
      <Icon
        color={type}
        fontSize="large"
        sx={{ ...secondaryStyle, fontSize: 60, mb: 1 }}
      />
      <Typography variant="h6">{primary}</Typography>
    </Box>
  );
};

export default StatusCard;
