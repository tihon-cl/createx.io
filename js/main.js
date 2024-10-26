document.getElementById("burger").addEventListener("click", function(){
    document.getElementById("burger-box").classList.add("open")
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("burger-box").classList.remove("open")
})

document.getElementById("plus").addEventListener("click", function(){
    document.getElementById("main-block-text").classList.add("plus-click")
    document.getElementById("minus").classList.add("plus-click")
    document.getElementById("plus").classList.add("display-none")
    document.getElementById("block-header").classList.add("header-minus")
})

document.getElementById("minus").addEventListener("click", function(){
    document.getElementById("main-block-text").classList.remove("plus-click")
    document.getElementById("minus").classList.remove("plus-click")
    document.getElementById("plus").classList.remove("display-none")
    document.getElementById("block-header").classList.remove("header-minus")
})

document.getElementById("plus2").addEventListener("click", function(){
    document.getElementById("main-block-text2").classList.add("plus-click")
    document.getElementById("minus2").classList.add("plus-click")
    document.getElementById("plus2").classList.add("display-none")
    document.getElementById("block-header2").classList.add("header-minus")
})

document.getElementById("minus2").addEventListener("click", function(){
    document.getElementById("main-block-text2").classList.remove("plus-click")
    document.getElementById("minus2").classList.remove("plus-click")
    document.getElementById("plus2").classList.remove("display-none")
    document.getElementById("block-header2").classList.remove("header-minus")
})

document.getElementById("plus3").addEventListener("click", function(){
    document.getElementById("main-block-text3").classList.add("plus-click")
    document.getElementById("minus3").classList.add("plus-click")
    document.getElementById("plus3").classList.add("display-none")
    document.getElementById("block-header3").classList.add("header-minus")
})

document.getElementById("minus3").addEventListener("click", function(){
    document.getElementById("main-block-text3").classList.remove("plus-click")
    document.getElementById("minus3").classList.remove("plus-click")
    document.getElementById("plus3").classList.remove("display-none")
    document.getElementById("block-header3").classList.remove("header-minus")
})

document.getElementById("plus4").addEventListener("click", function(){
    document.getElementById("main-block-text4").classList.add("plus-click")
    document.getElementById("minus4").classList.add("plus-click")
    document.getElementById("plus4").classList.add("display-none")
    document.getElementById("block-header4").classList.add("header-minus")
})

document.getElementById("minus4").addEventListener("click", function(){
    document.getElementById("main-block-text4").classList.remove("plus-click")
    document.getElementById("minus4").classList.remove("plus-click")
    document.getElementById("plus4").classList.remove("display-none")
    document.getElementById("block-header4").classList.remove("header-minus")
})

document.getElementById("right-arrow").addEventListener("click", function(){
    document.getElementById("main-txt-card2").classList.add("vv")
})

document.getElementById("yearly").addEventListener("click", function(){
    document.getElementById("monthly").classList.add("yearly-act")
    document.getElementById("yearly").classList.add("yearly-act-yearly")
    document.getElementById("monthly").classList.remove("yearly-act-yearly")
})

document.getElementById("monthly").addEventListener("click", function(){
    document.getElementById("yearly").classList.remove("yearly-act-yearly")
    document.getElementById("monthly").classList.add("yearly-act-yearly")
})