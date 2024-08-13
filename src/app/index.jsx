import SideBar from "../sidebar";
import StandardCalculator from "../standard-calculator";
import { useState } from "react";
import {
  Tab,
  Main,
  List,
  Item,
  LogoIcon,
  LogoText,
  TopContainer,
  MainContainer,
  LogoContainer,
  InnerContainer,
  HistoryContainer,
} from "./styles";
import ScientificCalculator from "../scientific-calculator";

function App() {
  const [history, setHistory] = useState([]);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("standard");

  const handleOpenSideBar = () => {
    setSideBarIsOpen(true);
  };

  const handleCloseSideBar = () => {
    setSideBarIsOpen(false);
  };

  return (
    <Main>
      <MainContainer>
        <TopContainer>
          <LogoContainer>
            <LogoIcon />
            <LogoText>Calculator</LogoText>
          </LogoContainer>
          {/* <MaximizeIcon /> */}
        </TopContainer>
        <InnerContainer>
          {currentSection === "standard" ? (
            <StandardCalculator
              onOpen={handleOpenSideBar}
              setHistory={setHistory}
            />
          ) : (
            <ScientificCalculator
              onOpen={handleOpenSideBar}
              setHistory={setHistory}
            />
          )}
          <HistoryContainer>
            <Tab>History</Tab>
            <List>
              {history.length
                ? history
                    .reverse()
                    .map((expression, index) => (
                      <Item key={index}>{expression}</Item>
                    ))
                : "There is no history yet!"}
            </List>
          </HistoryContainer>
        </InnerContainer>
        {sideBarIsOpen ? (
          <SideBar
            onClose={handleCloseSideBar}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        ) : null}
      </MainContainer>
    </Main>
  );
}

export default App;
