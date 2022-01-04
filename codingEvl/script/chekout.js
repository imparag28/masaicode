let Mail_info = JSON.parse(localStorage.getItem("Mail_info"))
let id = document.getElementById('sum')
let sum = 0
Mail_info.forEach(e => {
    if(e.price != null)
    sum+=e.price
});

id.textContent=sum

function order(){
    console.log("a")

    setInterval(() => {
        alert("Order Accepted")
    }, 0);

    setInterval(() => {
        alert(" Your order is being cooked")
    }, 3000);

    setInterval(() => {
        alert("Order out for delivery ")
    }, 7000);

    setInterval(() => {
        alert("Order delivered!!")
    }, 12000);
}