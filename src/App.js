import React from "react";
import Row from "./components/Row";

const App = () => {
  return (
    <div className="w-screen bg-black h-screen">
      <main className="w-3/5 bg-red-500 h-screen mx-auto">
        <Row />
        <Row />
        <Row />
        <Row />
      </main>
    </div>
  );
};

export default App;
