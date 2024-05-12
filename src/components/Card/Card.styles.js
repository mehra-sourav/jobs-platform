import {
  Collapse as MUICollapse,
  CardContent as MUICardContent,
  Button as MUIButton,
  styled,
} from "@mui/material";

export const Collapse = styled(MUICollapse)(({ in: open }) => ({
  ...(!open && {
    maskImage: "linear-gradient(transparent, 0, black 70%, transparent 100%)",
  }),
}));

export const CollapseButton = styled(MUIButton)(({ in: open }) => ({
  position: "relative",
  bottom: 10,
  left: "50%",
  transform: "translateX(-50%)",
  "&:focus": {
    outline: "none",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const CardContent = styled(MUICardContent)(() => ({
  marginTop: 16,
  paddingTop: 0,
  maxHeight: 350,
  textAlign: "left",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "0.2em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
  },
}));
