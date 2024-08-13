/* eslint-disable react/prop-types */
import {
  Nav,
  Item,
  List,
  Text,
  Title,
  Button,
  Section,
  MenuIcon,
  ScienceIcon,
  CalculateIcon,
  MenuIconWrapper,
} from "./styles";

function SideBar(props) {
  const { onClose, currentSection, setCurrentSection } = props;

  return (
    <Nav>
      <MenuIconWrapper>
        <MenuIcon onClick={onClose} />
      </MenuIconWrapper>
      <Section>
        <Title>Calculator</Title>
        <List>
          <Item>
            <Button
              isActive={currentSection === "standard"}
              onClick={() => {
                setCurrentSection("standard");
              }}
            >
              <CalculateIcon />
              <Text>Standard</Text>
            </Button>
          </Item>
          <Item>
            <Button
              isActive={currentSection === "scientific"}
              onClick={() => {
                setCurrentSection("scientific");
              }}
            >
              <ScienceIcon />
              <Text>Scientific</Text>
            </Button>
          </Item>
        </List>
      </Section>
    </Nav>
  );
}

export default SideBar;
