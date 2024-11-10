document.getElementById("burger-lines").addEventListener("click", function(){
    document.getElementById("burger").classList.add("open")
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("burger").classList.remove("open")
})