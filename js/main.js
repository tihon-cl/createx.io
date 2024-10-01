document.getElementById("burger").addEventListener("click", function(){
    document.getElementById("burger-box").classList.add("open")
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("burger-box").classList.remove("open")
})