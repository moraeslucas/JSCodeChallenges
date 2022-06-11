export default function Vegetarian(menu, vegetarianItens) {
    const menuNode = menu;
    let dish;

    if (menuNode.childElementCount === 0) {

        /*'filter' is a callback function which runs once for every array item,
         * and returns a new array according to a criteria                   */
        const vegetarianOptions = vegetarianItens.filter(
            (item) => item.isVegetarian === true
        );

        //'forEach' performs the specified action for each array item
        vegetarianOptions.forEach((item) => {
            dish = document.createElement("li");
            dish.textContent = item.name;

            menuNode.appendChild(dish);
        });
    }
}