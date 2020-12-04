let comments = [];
let comment_textarea = document.getElementById('comment_textarea');
let comment_button = document.getElementById('comment_button');
function display(){
    let comments_el = document.getElementById('comments');
    comments_el.innerHTML = "";
    comments.forEach((item) => {
        let comment_el = document.createElement("div");
        let template = `
        <table border="1">
        <tr>
        <td><img src="${item.avatar}" alt="" width="50px" height="50px"></td>
        <td>
        <h4>${item.name}</h4>
        <span>${item.date}</span>
        </td>
        </tr>
        <tr>
        <td colspan="2">${item.text}</td>
        </tr>
        </table>
        `;
        comment_el.innerHTML = template;
        comments_el.appendChild(comment_el);
        document.getElementById('comment_textarea').value = null;
    })


}

comment_button.onclick = function(){
    comments.push({
        avatar: "https://picsum.photos/id/220/300/300",
        name: "Sasha",
        date: new Date(),
        text: document.getElementById('comment_textarea').value,
    });
    display();
}