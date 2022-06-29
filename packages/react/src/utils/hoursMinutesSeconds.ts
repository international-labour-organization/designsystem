export default function hoursMinutesSeconds(secs: number): string {
  const hours = Math.floor(secs / 60 / 60);
  const minutes = Math.floor(secs / 60) - Math.floor(hours * 60);
  const seconds = Math.floor(secs % 60);
  return `${hours > 0 ? hours.toString().padStart(2, "0") + ":" : ""}${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
