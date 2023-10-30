import React from "react";
import "./App.css";
import CourseList from "./Components/CourseList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <CourseList />
      <Footer />
    </div>
  );
}

export default App;
