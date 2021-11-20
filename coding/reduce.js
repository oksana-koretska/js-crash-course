let euros = [29.76, 41.85, 46.5]; 

let sum = euros.reduce( function(total, amount){
  return total + amount
});

// console.log(sum);

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
// console.log(flat);



const movies = [{
    name: 'LoTR',
    genre: 'comics',
}, {
    name: 'Star Wars',
    genre: 'Sci-Fi'
}, {
    name: 'Dark Knight',
    genre: 'comics',
}];

movies.reduce((prev, cur) => {
    // console.log(arguments)
    prev.push(cur.name);

    // console.log({ prev, cur});

    return prev;
}, []);


let objs = [
    {name: "Peter", age: 35},
    {name: "John", age: 27},
    {name: "Jake", age: 28}
  ];
  
  let sumAge = objs.reduce(function(acc, curr) {
    return acc + curr.age;
  }, 0);

// console.log(sumAge);


const posts = [
    {id: 1, category: "frontend", title: "All About That Sass"},
    {id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips"},
    {id: 3, category: "frontend", title: "Sanitizing HTML: Going antibactirial on XSS attacks"}
];

const categoryPosts = posts.reduce((acc, post) => {
    let {id, category} = post;
    return {...acc, [category]: [...(acc[category] || []), id]};
}, {});

// console.log(categoryPosts);