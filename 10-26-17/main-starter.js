/*jshint esversion: 6 */

// multi-dimentional array
let top_movies = [
  ["The Shawshank Redemption", 1994, "Drama"],
  ["The Godfather", 1972, "Crime"],
  ["The Godfather: Part II", 1974, "Crime"],
  ["The Dark Knight", 2008, "Action"],
  ["12 Angry Men", 1957, "Drama"]
];

// write a for loop to output movie names
for (let i = 0; i < top_movies.length; i++) {
  console.log(" " + top_movies[i]);
}




// use Iterator and Arrow function
// to loop over the array to out names with *** prefix

let prefix_top = top_movies.forEach(movie => console.log("***" + movie));



// Use Iterator and Arrow functions, .filter()
// to output the name and genre of movies after 1990

let filter_top = top_movies.filter(movie => movie.slice(1,2) > 1990);
console.log(">>>" + filter_top);



// change genre category for either "Crime" or "Drame"
// to "Crime, Drama" using .map() and output the result
// see https://www.w3schools.com/jsref/jsref_map.asp






// add code to calculate the number of years to become a millinaire
// with initial deposit of 10000 and 0.06 interest rate
function int(a,b) {
let x =  Math.log(1000000/a);
let y = Math.log(1 + b);
let z = x/y;
return console.log("You'll be a millionare in " + z +" years");

}

console.log(int(10000,.06));








// add player objects and output results according to lecture slides
let player1 = {
  name: "Stephen Curry",
  dob: "March 14, 1988",
  height: 1.91,
  weight: 86,
  shoot(){
    return "3-pointer";
  }
};

let player2 = {
  name: "Lebron James",
  dob: "December 30, 1984",
  height: 2.03,
  weight: 118,
  shoot(){
    return "dunk";
  }
};

console.log(player1.name);
console.log(player2["name"]);
console.log(player2.weight - player1.weight);
console.log(player1.shoot());
console.log(player2.shoot());
