import menu from "../store/menu.json";
import { Category } from "../components/Menu.types";
import MenuCategoryItem from "../components/MenuCategoryItem";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const StyledMenu = styled.div`
  display: flex;
  width: 100%;
  padding: 0 10%;
  background: #000000;
  justify-content: space-between;
  gap: 16px;
  color: white;
  margin: 0;
  align-items: center;
`;

const StyledMenuItems = styled.div`
  width: fit-content;
  display: flex;
  gap: 3vw;
`;

const StyledMenuTitle = styled.span`
  font-size: clamp(24px, 1.6rem, 36px);
  font-family: "Andale Mono", monospace;
  font-weight: bold;
  cursor: pointer;
`;
const Menu = () => {
  const categories: Category[] = menu?.categories || [];
  const navigate = useNavigate();
  return (
    <StyledMenu>
      <StyledMenuTitle onClick={() => navigate("/")}>BlueWind</StyledMenuTitle>
      <StyledMenuItems>
        {categories.map((category: Category, index) => (
          <div key={index}>
            <MenuCategoryItem category={category} />
          </div>
        ))}
      </StyledMenuItems>
    </StyledMenu>
  );
};

export default Menu;
