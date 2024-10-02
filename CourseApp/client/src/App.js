import React from "react";
import "./App.css";
import CourseList from "./CourseList"; // Import your course list component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Course List</h1>
        <CourseList /> {/* Display the list of courses */}
      </header>
    </div>
  );
}

export default App;
