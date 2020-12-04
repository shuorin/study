let products = [
    {img: 'https://picsum.photos/id/28/300/300', article: '111111', description: 'товар', price: '1000'},
    {img: 'https://picsum.photos/id/45/300/300', article: '222222', description: 'Хороший товар', price: '5000'},
    {img: 'https://picsum.photos/id/16/300/300', article: '333333', description: 'товар', price: '6000'},
    {img: 'https://picsum.photos/id/35/300/300', article: '444444', description: 'товар', price: '4000'},
];


function displayProducts(products){

    products.forEach((product) => {

        let imgBlock = document.createElement('img');
        imgBlock.src = product.img;
        imgBlock.style.borderRadius = '20px';
        let articleBlock = document.createElement('h1');
        articleBlock.innerHTML = product.article;
        let descriptionBlock = document.createElement('h4');
        descriptionBlock.innerHTML = product.description;
        let priceBlock = document.createElement('div');
        priceBlock.innerHTML = product.price;

        let productBlock = document.createElement('div');
        productBlock.style.textAlign = 'center';
        productBlock.style.marginTop = '100px';
        productBlock.appendChild(imgBlock);
        productBlock.appendChild(articleBlock);
        productBlock.appendChild(descriptionBlock);
        productBlock.appendChild(priceBlock);
        document.body.appendChild(productBlock);
    });
}
displayProducts(products);