import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="w-full h-screen flex flex-col justify-end items-center" style={{ backgroundColor: color }}>
      <div className="mb-10 space-x-4">
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
        >
          Red
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("pink")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("white")}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;
