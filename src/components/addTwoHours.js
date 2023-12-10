export function addTwoHours(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);

  let newHours = hours + 2;

  if (newHours >= 24) {
    newHours -= 24;
  }

  return `${newHours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}
