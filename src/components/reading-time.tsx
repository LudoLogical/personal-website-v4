export default function ReadingTime({
  data
}: {
  data: { text: string; minutes: number; time: number; words: number };
}) {
  return <p>{Math.ceil(data.minutes)}-minute read</p>;
}
