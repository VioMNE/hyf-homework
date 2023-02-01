const args = process.argv.slice(2);
const numbers = args.map(arg => {
    const num = parseFloat(arg);
    
  if (isNaN(num)) {
    console.error(`Error: ${arg} is not a number.`);
    process.exit(1);
  }
  return num;
});

if (numbers.length === 0) {
  console.error("Error: No numbers provided.");
  process.exit(1);
}

const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log(avg);

// node avg.js 13 7 4 (output 8)
// node avg.js 1 two hello 4 (output is Error: two is not a number.)
// node avg.js  (output is Error: No numbers provided.)