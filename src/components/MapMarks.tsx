import Marks from "./Marks/marks";

export default function MapMarks() {
  const marks = [
    {
      loc: -50.5156,
      name: "Cachoeira do dede",
    },
  ];

  return (
    <div className="relative h-full">
      <div className="bg-cyan-200 h-full">
        {marks.map((mark) => (
          <Marks name={mark.name} key={mark.name} />
        ))}
      </div>
    </div>
  );
}
