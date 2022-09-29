const ElementText = ['Beginner Web Developer ', 'Game Developer '];
let i = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function typing() {
    if (i == ElementText.length) {
        i = 0;
    }
    currentText = ElementText[i];
    incrementTxt = ++textIndex;
    words = currentText.slice(0, incrementTxt);
    document.querySelector('.typing').textContent = words;

    if (words.length == currentText.length) {
        i++;
        textIndex = 0;
    }
    setTimeout(typing, 200);
})();

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const booksElemitaniton = books.filter((book) => book.sales > 1000000);
console.log(booksElemitaniton);

const newArray = booksElemitaniton.map((test) => {return `${test.author} adalah penulis buku ${test.title} yang sangat hebat!`});
console.log(newArray);