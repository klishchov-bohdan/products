let menu = []
let prodElements = []

fetch('http://localhost:8080/suppliers')
    .then(response => response.json())
    .then(json => {
        let container = document.getElementById("container")
        container.innerText = ""
        for (const supplier of json) {
            for (const product of supplier["menu"]) {
                container.innerHTML += `
                <div class="product">
                    <div class="product_header">
                        <img src="${product.image}" alt="product_image" class="product_image" width="600">
                    </div>
                    <div class="product_body">
                        <span class="tag tag-blue">${product.type}</span>
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                    </div>
                    <div class="product_footer">
                        <div class="supplier">
                            <img src="${supplier["image"]}" alt="supplier_image" class="supplier_image">
                            <div class="supplier_info">
                                <h5>${supplier["name"]}</h5>
                                <small>${product["price"]} $</small>
                            </div>
                        </div>
                    </div>
                </div>>
            `
            }
        }
    })