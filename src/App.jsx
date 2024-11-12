import { useState } from "react";

import AllNotes from "./components/allNotes";

function App() {
  const [notesData, setNotesdata] = useState([]);

  const [title, setTitle] = useState("");

  function createNewNote() {
    setNotesdata((prev) => [
      ...prev,
      {
        id: Date.now(),
        info: title,
      },
    ]);
    setTitle("");
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center gap-5 m-10">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task"
          className="border-2 border-emerald-950 h-10 w-1/2 p-2"
        />
        <button
          onClick={() => createNewNote()}
          className="bg-lime-700 w-20 rounded-md"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col items-center gap-5">
        <AllNotes notesData={notesData} />
      </div>
    </div>
  );
}

export default App;
