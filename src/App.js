import { Switch, Route, Redirect } from "react-router-dom";

//import components
import Navbar from "./components/shared/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Trends from "./components/Trends";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div
      className="App"
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      <Navbar />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/trends" component={Trends} />
        <Route path="/" component={Banner} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
