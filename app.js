const menu = {
_courses: {
  appetizers: [],
  mains: [],
  desserts: [],
},
get appetizers () {
return this._courses.appetizers;
},
get mains () {
return this._courses.mains;
},
get desserts () {
return this._courses.desserts;
},
set appetizers(appetizers) {
this._courses.appetizers = appetizers;
},
set mains(mains) {
this._courses.mains = mains;
},
set desserts(desserts) {
this._courses.desserts = desserts;
},
get _courses () {
return {
  appetizers: this.appetizers,
  mains: this.mains,
  desserts: this.desserts,
}
}
addDishToCourse (courseName , dishName , dishPrice){
const dish = {
  name: dishName,
  price: dishPrice,
};
return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName) {
const dishes = this.courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
},
generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is ${totalPrice}.`;
  }
};
menu.addDishToCourse('appetizers' , 'Cesar salad' , 4.25);
menu.addDishToCourse('appetizers' , 'Tuna salad' , 3.80);
menu.addDishToCourse('appetizers' , 'Tofu' , 10.60);

menu.addDishToCourse('main' , 'Fish steak' , 7.25);
menu.addDishToCourse('main' , 'Kebabs' , 6.80);
menu.addDishToCourse('main' , 'Beef gourmet' ,8.60);

menu.addDishToCourse('dessert' , 'Ice cream' , 3.80);
menu.addDishToCourse('dessert' , 'Tea cakes' , 3.20);
menu.addDishToCourse('dessert' , 'Cheese cake' , 4.90);

const meal = menu.generateRandomMeal();
console.log(meal);