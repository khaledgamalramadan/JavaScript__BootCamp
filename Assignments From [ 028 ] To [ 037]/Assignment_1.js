let num = 9; // "009"

if (num === 9) {
  console.log(`00${num}`);
} else if (num === 20) {
  console.log(`0${num}`);
} else if (num === 110) {
  console.log(num);
}

// anothe way soluton
num === 9
  ? console.log(`00${num}`)
  : num === 20
  ? console.log(`0${num}`)
  : num === 110
  ? console.log(num)
  : console.log("ukwom a number");