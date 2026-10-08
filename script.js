
    let images = [
        "تيشرت-Punisher-طرح-اسکلت-هنري-پانيشر-2.webp",
        "jeans-denim-90-100-1 - Copy.jpg",
        "IMG_7876-1.jpg"

    ];
    let current= 0;

    setInterval(function(){
         current++;
        if(current>= images.length){
            current = 0;
        }
    document.getElementById("slide").src =
    images[current];
 },3000);






 
    
 

        function addToCart(name){
            cart++;
            localStorage.setItem("cart", cart)
            document.getElementById("count").innerText = cart;

            let products =
            JSON.parse(
                localStorage.getItem("products")
             
        ) || [];
        products.push(name);

        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );

        alert("محصول اضافه شد")


        }







