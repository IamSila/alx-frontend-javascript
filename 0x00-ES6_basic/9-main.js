import getFullBudgetObject from './9-getFullBudget';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeIndollars(fullBudget.income));
console.log(fullBudget.getIncomeInEuros(fullBudget.income));
