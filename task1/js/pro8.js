let weight = 65;
let height = 180;

let bmi = weight / (height * height); //65 / (180 * 180)


if (bmi < 18.5) { 
    console.log("underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("normal");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("overweight");
}
else if (bmi >= 30) {
    console.log("obese");
}