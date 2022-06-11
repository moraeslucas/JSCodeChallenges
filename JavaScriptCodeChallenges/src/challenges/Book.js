export default class Book {

    constructor(title, author, numCopies) {
        //this.title is a Book's attribute
        this.title = title;
        this.author = author;
        this.numCopies = numCopies;
    }

    //property declaration
    get availability() {
        return this.getAvailability();
    }

    //method declaration
    getAvailability()
    {
        if (this.numCopies === 0) {
            return "Out of Stock";
        }
        return "In Stock";
    }

    //'1' in case there is no parameter
    sell(numCopiesSold = 1)
    {
        this.numCopies -= numCopiesSold;
    }
}