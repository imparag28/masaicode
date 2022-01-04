let Mail_info = JSON.parse(localStorage.getItem("Mail_info"))
let div = document.getElementById("grid")

let x = ``
Mail_info.map((a)=>{
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${a.mailId}`
  
    async function getUser() {
        try {
            let res = await fetch(url) // here also to await
            let data = await res.json() // here also to await
            cart(data,a.price)
    
        } catch (error) {
    
            console.log("", error)
        }
    
    
    
    }
    getUser()
})



function cart(data,price) {
  
    data.meals.map(a => {
        x+=` <div  class="w-[250px]">
        <div>
            <img src="${a.strMealThumb}" alt="">
        </div>
        <div class="flex justify-center mt-5">
            <div class="mr-5">
                <p><span>price:${price}</span></p>
            </div>
            <div class="bg-green-500 p-2">
                <button onclick="Remove(${price})">Remove</button>
            </div>
        </div>
    </div>
        `
    });
   
    div.innerHTML = x



}


function Remove(price,id){
// console.log(price,id)
 let cart = document.getElementById("cart")
 localStorage.removeItem("price")
 cart.textContent = Mail_info.length-1
  
}