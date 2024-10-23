let button = document.getElementById("btn");
let output  =document.querySelector(".output");

let quotes = [
    "Your limitation—it's only your imagination", "Push yourself, because no one else is going to do it for you", "Great things never come from comfort zones", "Dream it. Wish it. Do it", "Success doesn't just find you. You have to go out and get it", "The harder you work for something, the greater you'll feel when you achieve it", "Dream bigger. Do bigger", "Don't stop when you're tired. Stop when you're done", "Wake up with determination. Go to bed with satisfaction", "The key to success is to start before you are ready"
]


button.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quotes.length)
    output.textContent= quotes[random];
    
})
