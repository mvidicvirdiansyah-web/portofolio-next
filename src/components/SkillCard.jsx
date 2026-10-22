export default function SkillCard({ nama, level }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-semibold ">{nama}</h3>
      <p className="mt-1 text-sm text-gray-600">Level: {level}</p>
    </div>
  );
}