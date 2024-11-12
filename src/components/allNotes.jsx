/* eslint-disable react/prop-types */
export default function AllNotes({ notesData }) {
  console.log(notesData);
  return (
    notesData &&
    notesData.length &&
    notesData.map((item) => (
      <div
        key={item.id}
        className="flex justify-center items-center w-full h-[50px] gap-5"
      >
        <button className="bg-slate-400 w-16 h-10 rounded-md">Edit</button>
        <div className="w-1/2 h-[50px] bg-yellow-200 border-2 rounded-md p-2">
          {item.info}
        </div>
        <button className="bg-slate-400 w-16 h-10 rounded-md">Delete</button>
      </div>
    ))
  );
}
