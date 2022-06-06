import Header from "../Header";
import Footer from "../Footer";
//import NavBar from "../../elements/common/NavBar";
function MainLayout(props) {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
