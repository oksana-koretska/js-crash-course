const nums = [1, 2, 3, 4, 5, 6];

const newNums = nums.map((arrayElement, index) => {
    return arrayElement + 10;
});

// console.log(newNums);

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

const newMovies = movies.reduce((acc, currMovie, index) => {
    if (currMovie.genre === 'comics') {
        acc.push({
            ...currMovie,
            year: '200' + index,
        });
    }
    return acc;
}, []);

console.log(' newMovies ', newMovies);

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
const sentence = words.join(', ');
// console.log('Joined words - ', sentence);

const str = 'test-error';
console.log('Includes ', str.includes('cat'));
// console.log('Includes in array ', words.includes('Force'));