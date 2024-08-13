import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
  padding: "10px 0 0 0",
  width: "calc((100% * 2) / 3)",
});

export const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const MenuIcon = styled(Menu)({
  fontSize: "30px",
  ":hover": {
    cursor: "pointer",
  },
});

export const TypeText = styled("span")({
  fontSize: "22px",
  fontWeight: "600",
});

export const ExpressionText = styled("p")({
  margin: "0",
  fontSize: "30px",
  padding: "15px 10px",
  display: "flex",
  justifyContent: "flex-end",
});

export const ButtonsContainer = styled("div")({
  display: "grid",
  gridTemplateRows: "repeat(6, 1fr)",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "5px",
  height: "325px",
});

export const Button = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
