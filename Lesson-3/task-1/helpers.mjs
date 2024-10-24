function getSeason() {
  const monthNumber = new Date().getMonth() + 1;
  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";

    default:
      return "An error ocurred";
  }
}
function getDayTime() {
  const time = new Date().getHours();
  if (0 <= time && time < 6) return "night";
  else if (6 <= time && time < 12) return "morning";
  else if (12 <= time && time < 18) return "day";
  else if (18 <= time && time < 24) return "evening";
  else return "An error ocurred";
}

export { getSeason, getDayTime };
