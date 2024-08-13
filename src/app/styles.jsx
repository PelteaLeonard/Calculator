import { styled } from "@mui/material/styles";
import {
  Menu,
  Calculate,
  CropSquare,
  BackspaceOutlined,
} from "@mui/icons-material";

export const Main = styled("main")({
  backgroundColor: "#c9c9c9",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const MainContainer = styled("div")({
  backgroundColor: "#e0e0e0",
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  width: "700px",
  position: "relative",
});

export const TopContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const LogoIcon = styled(Calculate)({
  fontSize: "30px",
});

export const LogoText = styled("span")({});

export const MaximizeIcon = styled(CropSquare)({});

export const InnerContainer = styled("div")({
  display: "flex",
});

export const CalculatorContainer = styled("div")({
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
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "5px",
});

export const Button = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
});

export const BackspaceOutlinedIcon = styled(BackspaceOutlined)({});

export const EqualButton = styled(Button)({});

export const HistoryContainer = styled("div")({
  padding: "10px 0 0 0",
  width: "calc(100% / 3)",
});

export const Tab = styled("span")({
  height: "30px",
  display: "flex",
  alignItems: "center",
});

export const List = styled("ul")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "8px",
  padding: "15px 10px"
});

export const Item = styled("li")({
  listStyleType: "none",
});

export const Bold = styled("b")({
  display: "flex",
  fontSize: "30px",
  padding: "0 4px",
});
