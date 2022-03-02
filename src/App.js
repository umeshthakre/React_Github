import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//components//components/pages
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

//reactdom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//context
import { UserContext } from "./Context/UserContext";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//hooks
import { useState } from "react";
//firebase
import firebase from "firebase/compat/app";
import "firebase/auth";
import firebaseConfig from "./Config/firebaseConfig";
const app = firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
