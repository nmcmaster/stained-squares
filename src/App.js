import "./App.css";

function App() {
  return (
    <div className="w-screen bg-black h-screen">
      <main className="flex w-3/5 bg-red-500 h-screen mx-auto">
        <div className="w-1/4 bg-blue-100" style={{ height: "15vw" }} />
        <div className="w-1/4 bg-green-100" style={{ height: "15vw" }}></div>
        <div className="w-1/4 bg-pink-100" style={{ height: "15vw" }}></div>
        <div className="w-1/4 bg-blue-700" style={{ height: "15vw" }}></div>
      </main>
    </div>
  );
}

export default App;
