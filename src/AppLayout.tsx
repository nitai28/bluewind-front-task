import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./views/About";
import AutonomicCar from "./views/AutonomicCar";
import ContactUs from "./views/ContactUs";
import styled from "@emotion/styled";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr;
  width: 100%;
`;

const StyledAppLayoutContent = styled.div`
  padding: 40px 0;
`;
const AppLayout = () => {
  return (
    <BrowserRouter>
      <StyledAppLayout>
        <Menu />
        <StyledAppLayoutContent>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>Blue wind home page</h1>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/autonomic-car" element={<AutonomicCar />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </StyledAppLayoutContent>
      </StyledAppLayout>
    </BrowserRouter>
  );
};

export default AppLayout;
