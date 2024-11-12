import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AllNotes({
  notesData,
  editNote,
  deleteNote,
  completeNote,
}) {
  const [value, setValue] = useState("");
  const [editingId, setEditingId] = useState("");

  function handleEdit(id) {
    setEditingId(id);
    setValue(notesData.find((item) => item.id === id).info);
  }

  function handleSave(id) {
    setEditingId("");
    editNote(id, value);
  }

  function handleDelete(id) {
    deleteNote(id);
  }

  return notesData && notesData.length
    ? notesData.map((item) => (
        <div
          key={item.id}
          className="flex justify-center items-center w-full h-[50px] gap-5"
        >
          <button
            onClick={() =>
              editingId === item.id ? handleSave(item.id) : handleEdit(item.id)
            }
            className="bg-slate-400 w-16 h-10 rounded-md disabled:bg-zinc-500"
            disabled={item.completed}
          >
            {editingId === item.id ? "Save" : "Edit"}
          </button>
          {item.id === editingId ? (
            <div className="w-1/2 h-[50px] bg-yellow-200 border-2 rounded-md p-2">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full h-full bg-yellow-200 border-0"
              />
            </div>
          ) : (
            <div
              className={`w-1/2 h-[50px] bg-yellow-200 border-2 rounded-md p-2 ${
                item.completed ? "line-through" : ""
              }`}
            >
              {item.info}
            </div>
          )}
          <button
            onClick={() => completeNote(item.id)}
            className="bg-slate-400 w-24 h-10 rounded-md text-sm text-balance"
          >
            {item.completed ? "Mark as incomplete" : "Mark as complete"}
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-slate-400 w-16 h-10 rounded-md"
          >
            Delete
          </button>
        </div>
      ))
    : null;
}
