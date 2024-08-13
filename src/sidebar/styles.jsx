import { styled } from "@mui/material/styles";
import { Calculate, Menu, Science } from "@mui/icons-material";

export const Nav = styled("nav")({
  position: "absolute",
  backgroundColor: "#F0F0F0",
  width: "250px",
  left: "0",
  top: "40px",
  height: "calc(100% - 40px)",
  boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.2)",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const MenuIconWrapper = styled("div")({});

export const MenuIcon = styled(Menu)({
  fontSize: "30px",
  ":hover": {
    cursor: "pointer",
  },
});

export const Section = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const Title = styled("h3")({
  padding: "0 calc((30px - 22.5px) / 2)",
});

export const List = styled("ul")({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const Item = styled("li")({});

export const Button = styled("button")(({ isActive }) => ({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  width: "100%",
  border: "none",
  borderLeft: isActive ? "2px solid #000" : "2px solid transparent",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#e0e0e0",
  },
}));

export const CalculateIcon = styled(Calculate)({
  fontSize: "30px",
});

export const ScienceIcon = styled(Science)({
  fontSize: "30px",
});

export const Text = styled("span")({});
