"use strict";

//AJAX - Asynchronous JavaScript And XML


(() => {
        window.addEventListener(`load`, async () => {
                try {
                    const products = await getProducts()
                    displayProducts(products)
                } catch (err) {
                    alert(err.message)
                }
            }
        )

        async function getProducts() {
            const url = `https://dummyjson.com/products`
            const response = await fetch(url)
            const containerObj = await response.json()
            return containerObj.products
        }

        function displayProducts(products) {
            const tbody = document.getElementById(`tbody`)
            let html = ``

            for (const product of products) {
                const tr =
                    `<tr>
                      <td> ${product.title}</td>
                      <td> ${product.description}</td>
                      <td> ${product.price}</td>
                      <td><img src="${product.thumbnail}"></td>
                     </tr>`
                html += tr
            }
            tbody.innerHTML = html
        }
    }
)()

