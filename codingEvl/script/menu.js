let div = document.getElementById("grid")

function display() {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
    let x = ``
    async function getUser() {
        try {
            let res = await fetch(url) // here also to await
            let data = await res.json() // here also to await
            order(data)
            console.log(data)

        } catch (error) {

            console.log("", error)
        }



    }
    getUser()

    function order(data) {
      
        data.meals.map(a => {
            let price = Math.floor((Math.random() * 500) + 100);
            x+=` <div class="w-[250px]">
            <div>
                <img src="${a.strMealThumb}" alt="">
            </div>
            <div class="flex justify-center mt-5">
                <div class="mr-5">
                    <p><span>price:${price}</span></p>
                </div>
                <div class="bg-green-500 p-2">
                    <button onclick="addCart(${price},${a.idMeal})">Add Cart</button>
                </div>
            </div>
        </div>
            `
        });
       
        div.innerHTML = x



    }

}
 display()

 function addCart(price,id){
    // console.log(price,id)
     let cart = document.getElementById("cart")
     let user = {
         price:price,
         mailId:id,
     }
     console.log(user)

     let Mail_info = JSON.parse(localStorage.getItem("Mail_info")) || []

    
     Mail_info.push(user)
     localStorage.setItem('Mail_info',JSON.stringify(Mail_info))
     cart.textContent = Mail_info.length
      
 }
