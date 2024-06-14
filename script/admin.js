

// Function to open the Add Product modal
function openAddModal() {
    let addModal = document.getElementById('addModal');
    let modal = new bootstrap.Modal(addModal);
    modal.show();
}

// Function to add a new product
function addProduct() {
    let productName = document.getElementById('productName').value;
    // Get other input values similarly

    // Perform validation if needed

    // Add product to the list
    let newProduct = {
        id: new_products.length + 1, // Generate a new ID
        name: productName,
        // Add other properties
    };
    new_products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(new_products));

    // Close the modal
    let addModal = document.getElementById('addModal');
    let modal = bootstrap.Modal.getInstance(addModal);
    modal.hide();

    // Reload the product list
    allProducts();
}

// Function to open the Edit Product modal
function openEditModal(id) {
    let editModal = document.getElementById('editModal');
    let modal = new bootstrap.Modal(editModal);
    modal.show();

    // Populate the form fields with the product details
    let product = new_products.find(item => item.id === id);
    document.getElementById('editId').value = product.id;
    document.getElementById('editProductName').value = product.name;
    // Populate other input fields similarly
}

// Function to update a product
function updateProduct() {
    let id = parseInt(document.getElementById('editId').value);
    let productName = document.getElementById('editProductName').value;
    // Get other input values similarly

    // Perform validation if needed

    // Find the product in the list and update its details
    let productIndex = new_products.findIndex(item => item.id === id);
    new_products[productIndex].name = productName;
    // Update other properties similarly
    localStorage.setItem("products", JSON.stringify(new_products));

    // Close the modal
    let editModal = document.getElementById('editModal');
    let modal = bootstrap.Modal.getInstance(editModal);
    modal.hide();

    // Reload the product list
    allProducts();
}

// Function to delete a product
function deleteProduct(id) {
    // Find the index of the product in the list and remove it
    let productIndex = new_products.findIndex(item => item.id === id);
    new_products.splice(productIndex, 1);
    localStorage.setItem("products", JSON.stringify(new_products));

    // Reload the product list
    allProducts();
}

// Function to display all products
function allProducts() {
    let container = document.querySelector('[all_products]');
    container.innerHTML = ''; // Clear the existing content

    new_products.forEach((item) => {
        container.innerHTML += `
            <div class="col-md-4">
                <img src="${item.image}" style="width:200px; height:250px">
                <h2>${item.name}</h2>
                <p>Price: ${item.price}</p>
                <button class="btn btn-primary" onclick="openEditModal(${item.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct(${item.id})">Delete</button>
            </div>
        `;
    });
}

// Load products on page load
allProducts();
