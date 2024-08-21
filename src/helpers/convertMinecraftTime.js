export default function convertMinecraftTime(minecraftTime) {
  // Convert ticks to real-world seconds
  let realSeconds = minecraftTime * 3;

  // Convert seconds to hours and minutes
  let hours = Math.floor(realSeconds / 3600);
  let minutes = Math.floor((realSeconds % 3600) / 60);

  // Adjust hours to 12-hour format
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format minutes to always be two digits
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
}
