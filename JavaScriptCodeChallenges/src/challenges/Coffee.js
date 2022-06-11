export default function Coffee(coffees)
{

    /*The array's reduce method runs a function once for every item in an array, and it returns a single value
     *This reduced function takes an accumulator and the current value in the array.                        */
    let totalCoffees = coffees.reduce(
        (totalCoffees, coffee) => (totalCoffees += coffee)
    );

    /*Template literals (aka template strings) allow you to combine JS expressions and strings into one:
     * Instead of using the well known + sign, you can now use back ticks...
     * ...and where you need to evaluate variable/expression, you can surround it with $ sign and {}  */
    return `The total bill is $${totalCoffees * 1.25}`;
}