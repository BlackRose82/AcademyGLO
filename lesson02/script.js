let money = 950;
let income = 'social';
let addExpenses = 'Hotel,courses,flights';
let deposit = true;
let mission = 35e3;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log('Период '+ period + ' месяцев и Цель заработать ' + mission + ' долларов');
console.log(addExpenses.toLowerCase());
for(let i = 0; i < 3; i++ ){
    console.log(addExpenses);
}
const budgetDay = 30;
console.log(money/budgetDay);
console.log(money%budgetDay);


