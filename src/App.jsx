import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTopHandler from "./utils/hooks/ScrollToTopHandler";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FrontPage from "./pages/Home/FrontPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import SkillsPage from "./pages/Skills";

function App() {
  console.count("app renderd");
  return (
    <>
      <ChakraProvider
        theme={extendTheme({
          initialColorMode: "dark",
          useSystemColorMode: true,
          fonts: {
            heading: "Open Sans",
            body: "Raleway",
          },
          styles: {
            global: props => ({
              body: {
                bg: mode("white", "#18181a")(props),
                color: mode("#282c34", "#f3f3f4")(props),
              },
            }),
          },
        })}
      >
        <Router>
          <Navbar />
          <ScrollToTopHandler />
          <Routes>
            <Route path="/" exact element={<FrontPage />}></Route>
            <Route path="/cv" exact element={<FrontPage />}></Route>
            <Route path="/projects" exact element={<FrontPage />}></Route>
            <Route path="/contact" exact element={<ContactPage />}></Route>
            <Route path="/skills" exact element={<SkillsPage />}></Route>
            <Route path="/chatraChatExpanded" element={<FrontPage />}></Route>
            {/* /*404 route*/}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
