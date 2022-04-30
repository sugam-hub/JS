const Book = [
    {
        title: "Numerical Methods",
        authors:['A',"B"],
        rating: 5.0,   
    },
    {
        title: "JavaScript",
        authors:['A',"B"],
        rating: 5.0,    
    },
    {
        title: "Operating System",
        authors:['A',"B"],
        rating: 5.0,    
    },
    {
        title: "DBMS",
        authors:['A',"B"],
        rating: 5.0,    
    },
    {
        title: "Software Engineering",
        authors: ['A',"B"],
        rating: 5.0,   
    },
]

console.log(
    Book.map((book) => {
       return book.title;
    })
);