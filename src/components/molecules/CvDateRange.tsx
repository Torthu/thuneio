export default function CvDateRange({
  start,
  end,
}: {
  start: Date;
  end: Date;
}) {
  return (
    <div className="text-gray-400">
      {start.getFullYear()}-{`0${start.getMonth() + 1}`.slice(-2)} -{" "}
      {end.getFullYear()}-{`0${end.getMonth() + 1}`.slice(-2)}
    </div>
  );
}
