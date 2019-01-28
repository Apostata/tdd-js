export default function convertToHumanTime(duration) {
  const totalSeconds = duration / 1000;
  const min = parseInt(totalSeconds / 60, 10);
  const sec = parseInt(totalSeconds % 60, 10);
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
}
