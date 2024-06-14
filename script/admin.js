let products = JSON.parse(localStorage.getItem("products")) || [];
function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><input type="text" class="form-control" id="productImg${index}" value="${product.image}" required></td>
            <td><input type="text" class="form-control" id="productName${index}" value="${product.name}" required></td>
            <td><input type="text" class="form-control" id="productCategory${index}" value="${product.category}" required></td>
            <td><input type="text" class="form-control" id="productColor${index}" value="${product.color}" required></td>
            <td><textarea class="form-control" id="productDescription${index}" required>${product.description}</textarea></td>
            <td><input type="text" class="form-control" id="productPrice${index}" value="${product.price}" required></td>
            <td class="d-flex py-4">
                <button class="btn btn-success me-1" onclick="updateProduct(${index})">Update</button>
                <button class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
            </td>
        `;
        productList.appendChild(row);
    });
}
function addProduct(img, name, category, color, description,price,) {
    const newProduct = {
        id: products.length + 1,
        image: img,
        name: name,
        category: category,
        color:color,
        description: description,
        price: parseFloat(price),
    };
    products.push(newProduct);
    saveProducts();
    displayProducts();
}
function updateProduct(index) {
    const productImg = document.getElementById(`productImg${index}`).value.trim();
    const productName = document.getElementById(`productName${index}`).value.trim();
    const productCategory = document.getElementById(`productCategory${index}`).value.trim();
    const productColor = document.getElementById(`productColor${index}`).value.trim();
    const productDescription = document.getElementById(`productDescription${index}`).value.trim();
    const productPrice = document.getElementById(`productPrice${index}`).value.trim();

    if (!productName || !productCategory ||!productColor  || !productDescription ||!productPrice) {
        alert("Please fill in all fields.");
        return;
    }
    products[index].image = productImg;
    products[index].name = productName;
    products[index].category = productCategory;
    products[index].color = productColor;
    products[index].description = productDescription;
    products[index].price = parseFloat(productPrice);

    saveProducts();
    displayProducts();
}
function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        saveProducts();
        displayProducts();
    }
}
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const productImg = document.getElementById("productImg").value.trim();
    const productName = document.getElementById("productName").value.trim();
    const productCategory = document.getElementById("productCategory").value.trim();
    const productColor = document.getElementById("productColor").value.trim();
    const productDescription = document.getElementById("productDescription").value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();
    if (!productImg || !productName || !productCategory || !productPrice || !productDescription) {
        alert("Please fill in all fields.");
        return;
    }
    addProduct(productImg, productName, productCategory, productColor, productDescription,  productPrice);
    $('#addProductModal').modal('hide');
    document.getElementById("productForm").reset();
});
displayProducts();