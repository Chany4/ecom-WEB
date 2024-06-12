// function CreateItem(id, name, category, color, image, description, price, quantity) {
//     this.id = id;
//     this.name = name;
//     this.category = category;
//     this.color = color;
//     this.image = image;
//     this.description = description;
//     this.price = price;
// }

// // Leather bags 
// let item1 = new CreateItem("1", 'Poison Ivy', 'leather', 'green', 'https://chany4.github.io/ecomWEB/images/leather/Christian%20Dior%20Micro%20Lady%20Dior%20Green%20Quilted%20Cannage%20Lambskin%20Cd%20Charm%20Mini%20Bag.jpeg', 'images/leather/Christian Dior Micro Lady Dior Green Quilted Cannage Lambskin Cd Charm Mini Bag', 'R 1 780.00');

// let item2 = new CreateItem(2, 'Butterflix', 'leather', 'blue', 'https://chany4.github.io/ecomWEB/images/leather/result%20(2).png', 'Blue leather bag with butterfly chain charms with sleek strap', 'R700');

// let item3 = new CreateItem(3, 'Abyss', 'leather', 'black', 'https://chany4.github.io/ecomWEB/images/leather/result%20(3).png', 'Black leather bag with white star center and sleek strap', 'R600');

// let item4 = new CreateItem(4, 'Swan', 'leather', 'pink', 'https://chany4.github.io/ecomWEB/images/leather/result%20(4).png', 'Pink leather bag with silver heart sharms and sleek strap', 'R1200');

// let item5 = new CreateItem(5, 'Pink Whisper', 'leather', 'pink', 'https://chany4.github.io/ecomWEB/images/leather/result%20(5).png', 'Pink leather bag with butterfly clasp and sleek strap', 'R800');

// let item6 = new CreateItem(6, 'Verdant Luxe', 'leather', 'green', 'https://chany4.github.io/ecomWEB/images/leather/result%20(6).png', 'Chunky Green leather bag with thick buckle', 'R1300');

// let item7 = new CreateItem(7, 'Pearl Essence', 'leather', 'white', 'https://chany4.github.io/ecomWEB/images/leather/result%20(7).png', 'Beautiful white leather bag with thin strap', 'R1289');

// //Crochet Bags

// let item8 = new CreateItem(8, 'example', 'crochet', 'green', 'https://chany4.github.io/ecomWEB/images/crochets/Crochet%20Patterns%20For%20Your%20New%20Bags%20(34%20Pics)%20(2).png', 'Beautiful white knitted bag with thin strap', 'R1289', );

// let items = [item1, item2, item3, item4, item5, item6, item7, item8]

// localStorage.setItem('items', JSON.stringify(items))

// const itemsNew = []

// function displayItems() {
//     let main = document.querySelector('main');
//     main.innerHTML = '';
//     let itemsContainer = document.createElement('div');
//   itemsContainer.classList.add('row');
//   items.forEach(item => {
//     let itemDiv = document.createElement('div');
//     itemDiv.classList.add('col', 'col-4');
//     itemDiv.innerHTML += `
//         <div style = "border: 2px solid black; margin: 7px;padding:5px;background-color: white;">
//             <img src="${item.image} "style= 'width:150px; height:250px'>
//             <h2>${item.name}</h2>
//             <p>Price: ${item.price}</p>
//             <button class="purchase" value="${item.id}" style:"purchase:hover{background-color:green;}">Add to Cart</button>

//         </div>
//         `
//         ;
//         itemsContainer.appendChild(itemDiv);
//   });
//   main.appendChild(itemsContainer);
//   // Add styles to the container
//   itemsContainer.style.display = 'flex';
//   itemsContainer.style.flexWrap = 'wrap';
//   itemsContainer.style.justifyContent = 'space-between';




//     const purchbtns = document.querySelectorAll('.purchase');
//     const deleteItem = document.querySelectorAll('.delete_Item')

//     let purchasedItems = JSON.parse(localStorage.getItem("purchasedItems")) || [];

//     function addToCart(id) {
//         let [item] = items.filter(object => object.id === +id)
//         purchasedItems.push(item)
//         localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems))
//     }

//     purchbtns.forEach(button => {
//         button.addEventListener('click', (event) => {
//             addToCart(event.target.value);
//         })
//     })
// }

// displayItems();

let products = JSON.parse(localStorage.getItem("products")) || [
    {
        id: 1,
        name: "Poison Ivy",
        category: "leather",
        color: "green",
        description: "Christian Dior Micro Lady Dior Green Quilted Cannage Lambskin Cd Charm Mini Bag",
        image: "https://chany4.github.io/ecomWEB/images/leather/Christian%20Dior%20Micro%20Lady%20Dior%20Green%20Quilted%20Cannage%20Lambskin%20Cd%20Charm%20Mini%20Bag.jpeg",
        price: 1780,
    },
    {
        id: 2,
        name: "Butterflix",
        category: "leather",
        color: "blue",
        description: "Blue leather bag with butterfly chain charms with sleek strap",
        image: "https://chany4.github.io/ecomWEB/images/leather/result%20(2).png",
        price: 1780,
    },
    {
        id: 3,
        name: "Poison Ivy",
        category: "leather",
        color: "green",
        description: "Christian Dior Micro Lady Dior Green Quilted Cannage Lambskin Cd Charm Mini Bag",
        image: "https://chany4.github.io/ecomWEB/images/leather/Christian%20Dior%20Micro%20Lady%20Dior%20Green%20Quilted%20Cannage%20Lambskin%20Cd%20Charm%20Mini%20Bag.jpeg",
        price: 1780,
    },
    {
        id: 4,
        name: "Poison Ivy",
        category: "leather",
        color: "green",
        description: "Christian Dior Micro Lady Dior Green Quilted Cannage Lambskin Cd Charm Mini Bag",
        image: "https://chany4.github.io/ecomWEB/images/leather/Christian%20Dior%20Micro%20Lady%20Dior%20Green%20Quilted%20Cannage%20Lambskin%20Cd%20Charm%20Mini%20Bag.jpeg",
        price: 1780,
    }

]

localStorage.setItem("products", JSON.stringify(products));

function allProducts() {
    try {
        let container = document.querySelector('[all-products]');

        products.forEach((item) => {
            container.innerHTML += `
                <div class="col-md-4">
                    <img src="${item.image} "style= 'width:200px; height:250px'>
                    <h2>${item.name}</h2>
                    <p>Price: ${item.price}</p>
                    <button class="purchase" value="${item.id}" style:"purchase:hover{background-color:green;}">Add to Cart</button>     
                </div>
            `
            console.log("ye")
        });
    }catch{
        console.error("kys")
    }
}allProducts()
