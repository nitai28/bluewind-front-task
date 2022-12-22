import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Category } from "src/components/Menu.types";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";

const StyledMenuItem = styled(MenuItem)`
  color: black;

  &:hover {
    background-color: #f5f5f5;
    color: #60aaee;
    cursor: pointer;
  }
`;

const StyledMenuButton = styled(MenuButton)`
  cursor: pointer;
`;

const MenuCategoryItem = ({ category }: { category: Category }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleMenuItemClick = (path?: string) => {
    path ? navigate(path) : navigate("/404");
  };
  return (
    <Menu isOpen={isOpen} key={category.name}>
      <StyledMenuButton
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        as={"span"}
        _hover={{ color: "blue" }}
      >
        {category.name}
      </StyledMenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {category.items.map((item) => (
          <StyledMenuItem
            as={"span"}
            key={item.name}
            onClick={() => handleMenuItemClick(item?.url)}
          >
            {item.name}
          </StyledMenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default MenuCategoryItem;
