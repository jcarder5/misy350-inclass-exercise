console.log('hello');

//array

let bucket_list = ["go skydiving", "go to london", "cross country roadtrip", 5];
console.log(bucket_list[2]);


// for loop

for (let i = 0; i < bucket_list.length; i++) {
  console.log("-" + bucket_list[i]);
}
// nested loop
let movie_list1 = [
  "1movie",
  "2movie",
  "3movie",

];

let movie_list2 = [
  "13movie",
  "23movie",
  "2movie",
  "5movie",
  "3movie"

];

for (let i = 0; i < movie_list1.length; i++) {
  for (let k = 0; k < movie_list2.length; k++) {
    if (movie_list1[i]==movie_list2[k]) {
      console.log(movie_list1[i]);
    }
  }
}


//iterator

movie_list1.forEach(movie => console.log(">>" +movie));
let new_movie_list = movie_list2.filter(movie => movie.slice(0,1) != "2");
console.log(new_movie_list);
