let books = [
    {article: "10000", author: "Автор 1", name: "Книга", description: "Какая-то книга"},
    {article: "10001", author: "Автор 2", name: "Книга", description: "Какая-то книга"},
];

function show(books){
    let table = document.createElement("table");
    table.border = 1;
   books.forEach((element) => {
       let tr = document.createElement("tr");
       let td_article = document.createElement('td');
       td_article.innerHTML = element.article;
       let td_author = document.createElement('td');
       td_author.innerHTML = element.author;
       let td_name = document.createElement('td');
       td_name.innerHTML = element.name;
       let td_description = document.createElement('td');
       td_description.innerHTML = element.description;

       tr.appendChild(td_article);
       tr.appendChild(td_author);
       tr.appendChild(td_name);
       tr.appendChild(td_description);

       table.appendChild(tr);
   });
   let div_table = document.getElementById("table");
    div_table.appendChild(table);
}

show(books);