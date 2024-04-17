import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
// import MyState from "./components/MyState";
// import MyProps from "./components/MyProps";
import MyRouter from "./components/MyRouter";

function App() {
  return (
    <div>
      {/* <NavBar/>
      <Header/>
      <Main/> */}
      <MyRouter fruit="測試水果"/>
      {/* <MyState/>
      <MyProps subject="Taiwan Fruit Stand"/> */}
    </div>
  );
}

export default App;
