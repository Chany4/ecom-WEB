let cart = [];

const itemStored = localStorage.getItem('checkout');
if (itemStored) {
    try {
        cart = JSON.parse(itemStored);
    } catch (error) {
        console.error('Error', error);
    }
}

function displayProducts() {
    let cartProductsContainer = document.querySelector('#cartProducts');
    cartProductsContainer.innerHTML = '';
    let table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'table-responsive');

    let thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <td>Image</td>
            <td>Item</td>
            <td>Description</td>
            <td>Color</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Action</td>
        </tr>
    `;
    table.appendChild(thead);

    let aggregatedItems = {};

    let totalPrice = 0;

    cart.forEach((items, index) => {
        let key = `${items.name} | ${items.category} | ${items.price}`;
        if (aggregatedItems[key]) {
            aggregatedItems[key].quantity += 1;
        } else {
            aggregatedItems[key] = { ...items, quantity: 1, index: index };
        }
    });

    let tbody = document.createElement('tbody');

    Object.keys(aggregatedItems).forEach(key => {
        let items = aggregatedItems[key];
        let row = document.createElement('tr');

        row.innerHTML = `
            <td class="text-center"><img src="${items.image}" alt="image_of_product" style="width:150px"></td>
            <td class="text-center pt-5">${items.name}</td>
            <td class="text-center pt-5">${items.description}</td>
            <td class="text-center pt-5">${items.color}</td>
            <td class="text-center pt-5">${items.quantity}</td>
            <td class="text-center pt-5">${items.price}</td>
            <td class="text-center pt-5"><button type="button" class="delete_Item" onclick="deleteProduct(${items.index})">X</button></td>
        `;

        tbody.appendChild(row);
        totalPrice += items.price * items.quantity;
    });
    table.appendChild(tbody);

    cartProductsContainer.appendChild(table);

    let totalPriceElement = document.createElement('div');
    totalPriceElement.classList.add('mx-auto', 'font-weight-bold');
    totalPriceElement.innerHTML = `Total Price $${totalPrice}`;
    cartProductsContainer.appendChild(totalPriceElement);
}

function deleteProduct(index) {
    cart.splice(index, 1);
    localStorage.setItem('checkout', JSON.stringify(cart));
    displayProducts();
    console.log('Product deleted, Updated checkout items:', cart);
}

function purchase() {
    if (cart.length === 0) {
        console.error('Cannot proceed with purchase: Cart is empty.');
        alert('Your cart is empty. Please add items before proceeding with the purchase.');
        return;
    }

    // const confirmPurchase = confirm('Are you sure you want to proceed with the purchase?');
    // if (!confirmPurchase) {
    //     console.log('Purchase canceled.');
    //     return;
    // }

    try {
        cart = [];
        localStorage.removeItem('checkout');
        displayProducts();
        console.log('Your purchase has been succsessfull');
        alert('Thank you for your purchase!');
    } catch (error) {
        console.error('Error processing purchase:', error);
        alert('There was an error processing your purchase. Please try again later.');
    }
}

const purchaseButton = document.getElementById('purchaseButton');
purchaseButton.addEventListener('click', purchase);

const alertbtn = document.querySelector('.purchase-button')

// alertbtn.addEventListener('click', ()=> {
//     alert('Your purchase has been successfull')
// })

displayProducts();
