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

Book.forEach(function (a){
    document.write(`
        <ul>
            <li>title : ${a.title}</li>
            <li></li>authors : ${a.authors}</li>
            <li></li>rating  : ${a.rating}</li>
        </ul>
        `
    )
})