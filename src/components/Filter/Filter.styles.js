import {
  Select as MUISelect,
  Chip as MUIChip,
  SvgIcon as MUISvgIcon,
  styled,
} from "@mui/material";

export const Select = styled(MUISelect)(() => ({
  "& :hover": {
    cursor: "default",
  },
}));

export const Chip = styled(MUIChip)(() => ({
  borderRadius: 0,
}));

export const SvgIcon = styled(MUISvgIcon)(() => ({
  "&.MuiChip-deleteIcon": {
    height: "100%",
    margin: 0,
    "&:hover": {
      backgroundColor: "red",
    },
  },
}));
