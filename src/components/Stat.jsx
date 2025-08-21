export default function Stat({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sub">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
