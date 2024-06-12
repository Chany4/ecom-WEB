// let display = document.querySelector('tbody');
// const itemsPurchased = JSON.parse(localStorage.getItem('purchasedItems'));

// itemsPurchased.forEach(items => {
//     display.innerHTML += `
//         <tr>
//             <td><img src="${items.image}" alt="image_of_product" style= "width:200px;height:300px"></td>
//             <td>${items.name}</td>
//             <td>${items.description}</td>
//             <td>${items.color}</td>
//             <td>${items.category}</td>
//             <td>${items.price}</td>
//             <td> <button type="button" class="delete_Item">X</button></td>
//         </tr>
//     `
    
// });

// let remove = document.querySelector('.delete_Item');

// remove.addEventListener('click', (index)=> {
//     itemsPurchased.splice(index, 1);
//     it
// })


let cart = [];

const itemStored = localStorage.getItem('checkout');
if (itemStored){
    try{
        checkoutItems = JSON.parse(storedItems);
    }catch (error){
        console.error('Error', error);
    }
}
function displayProducts(){
    let displayProductsContainer =  document.querySelector('cartProducts');
    cartProductsContainer.innerHTML = '';
    let table = document.createElement('table');
    table.classList.add('table','table-bordered', 'table-responsive');

    let thead = document.createElement('thead');
    thead.innerHTML = `
     <tr>
         <td><img src="${items.image}" alt="image_of_product" style= "width:200px;height:300px"></td>
         <td>${items.name}</td>
         <td>${items.description}</td>
         <td>${items.color}</td>
         <td>${items.category}</td>
         <td>${items.price}</td>
         <td> <button type="button" class="delete_Item">X</button></td>
     </tr>
    `
    table.appendChild(thead);

    let aggregatedItems = {};

    let totalPrice = 0;

    checkoutItems.forEach((product,index)=>{
        let key = `${items.name} | ${items.category} | ${items.price}`;
        if (aggregatedItems[key]){
            aggregatedItems[key].quantity +=1;
        }else{
            aggregatedItems[key] = {...product,quantity:1, index:index0};
        }
    })

    let tbody = document.createElement('tbody');

    Object.keys(aggregatedItems).forEach(key => {
        let product = aggregatedItems[key];
        let row = document.createElement('tr');

        row.innerHTML = `
         <td class ="text-center"><img src="${items.image}" alt="image_of_product" style= "width:200px;height:300px"></td>
         <td class ="text-center">${items.name}</td>
         <td class ="text-center">${items.description}</td>
         <td class ="text-center">${items.color}</td>
         <td class ="text-center">${items.category}</td>
         <td class ="text-center">${items.price}</td>
         <td class ="text-center"><button type="button" class="delete_Item" onclick ="deleteProduct(${product.index})">X</button></td>
        `;

        tbody.appendChild(row);
        totalPrice += items.price * items.quantity;
    });
    table.appendChild(tbody);

    cartProductsContainer.appendChild(table);

    let totalPriceElement = document.createElement('div');
    totalPriceElement.classList.add('mx-auto', 'font-weight-bold');
    totalPriceElement.innerHTML = 'Total Price $${totalPrice}';
    cartProductsContainer.appendChild(totalPriceElement);

}

function deleteProduct(index){
    checkoutItems.splice(index,1);
    displayCartProducts();
}

displayCartProducts();

function deleteProduct(index){
    checkoutItems.splice(index,1);
    localStorage.setItem('checkout',JSON.stringify(checkoutItems));
    displayCartProducts();
    console.log('Product deleted, Updated checkut items:', checkoutItems);
}




