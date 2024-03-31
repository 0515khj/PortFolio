import {  BrowserRouter as Router ,  Routes,  Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyle from "./styled/GlobalStyle";
import Project from "./page/project/Project";
import Main2 from "./page/main/Main2";
import About from "./components/main/About";
import JavaScript from "./page/javascript/JavaScript";
import Contact from "./page/connect/Contact";


const App = () => {
  return (
    <>
       <GlobalStyle/> 
      <Router basename="/PortFolio">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main2/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/javascript" element={<JavaScript/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>






        </Routes>
      </Router>
    </>
  );
};

export default App;