const books = [
    {
        title: "O alienista",
        author: "Machado de Assis",
        released_at: '1882',
    },
    {
        title: "Bras Cubas",
        author: "Machado de Assis",
        released_at: '1881',
    },
    {
        title: "Percy Jackson e o Ladrão de Raios",
        author: "Rick Riordan",
        released_at: '2005',
    },
    {
        title: "Livro Fake",
        author: "Joao Fake",
        released_at: '2022',
    }
];


function getBooks(array, autor) {
    const booksNew = array.filter(item => item.author.toUpperCase().includes(autor.toUpperCase()))
    console.log(booksNew)
}

getBooks(books, 'machado')


function booksDate(array, data) {
    const booksNew2 = array.filter(item => item.released_at.includes(data))
    console.log(booksNew2)
}

booksDate(books, new Date().getFullYear())