// Coding Challenge #6
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Function to calculate the tip based on the bill amount
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};

// Test data
const bills = [125, 555, 44];

// Calculate tips for each bill
const tips = bills.map(bill => calcTip(bill));

// Calculate total amounts (bill + tip) for each bill
const total = bills.map((bill, index) => bill + tips[index]);

// Output results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);