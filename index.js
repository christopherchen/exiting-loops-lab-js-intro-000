function breakOut(array, changeValue, stopValue) {
  array.forEach(changeValue) {
    if (changeValue === stopValue) {
      break;
      return array;
    }
  }
}