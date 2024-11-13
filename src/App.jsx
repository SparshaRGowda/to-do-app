import { useState } from "react";

import AllNotes from "./components/allNotes";

function App() {
  const [notesData, setNotesdata] = useState([]);

  const [title, setTitle] = useState("");

  function createNewNote(e) {
    e.preventDefault();
    setNotesdata((prev) => [
      {
        id: Date.now(),
        info: title,
        completed: false,
      },
      ...prev,
    ]);
    setTitle("");
  }

  function editNote(getId, getInfo) {
    setNotesdata((prevData) =>
      prevData.map((item) =>
        item.id === getId ? { ...item, info: getInfo } : item
      )
    );
  }

  function deleteNote(id) {
    const filtered = notesData.filter((item) => item.id !== id);
    setNotesdata(filtered);
  }

  function completeNote(id) {
    setNotesdata((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <form
        onSubmit={(e) => createNewNote(e)}
        className="flex justify-center gap-5 m-10"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task"
          className="border-2 border-emerald-950 h-10 w-1/2 p-2"
        />
        <button
          // onClick={() => createNewNote()}
          className="bg-lime-700 w-20 rounded-md"
        >
          Add
        </button>
      </form>
      <div className="flex flex-col items-center gap-5">
        <AllNotes
          notesData={notesData}
          editNote={editNote}
          deleteNote={deleteNote}
          completeNote={completeNote}
        />
      </div>
    </div>
  );
}

export default App;
