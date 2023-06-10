const rotation = function(spin, delay) {
  const spinning = spin.split('');
  let delayed = delay;
  let printedCharacters = 0;
  for (let char of spinning) {
    setTimeout(() => {
      process.stdout.write(char + '\r ');
      printedCharacters++;
      if (printedCharacters === spinning.length) {
        process.stdout.write('\n');
      }
    }, delayed);
    delayed += delay + 200;
  }
};

const characters = "|/-\\|/-\\|";
const setSpin = 200;

rotation(characters, setSpin);

// const characters = ["|, /, -, \\, |, /, -, \\, |"];

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r| ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-  ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r| ');
// }, 1700);

