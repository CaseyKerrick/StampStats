export const randomColorsList = (size) => {
  let colors = [];
  for (let x = 0; x < size; x++) {
    colors.push([rand(255), rand(255), rand(255)]);
  }

  return colors.map(colors => `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`);
};

const rand = (max) => {
  return Math.floor(Math.random() * (max / 5)) * 5;
}
