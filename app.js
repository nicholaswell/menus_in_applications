var pages = ["Home","About","Interact"]

function createNav(){
    var nav = document.createElement("nav")
    for(var i = 0; i < pages.length; i++){
        createButton(pages[i], pages[i])
    }

    document.body.appendChild(nav)

    function createButton(pg){
        var button = document.createElement("button")
        button.innerHTML=pg
        button.addEventListener("click",function(){
            navigate(pg)
        })
        nav.appendChild(button)
    }
}

function createWrapper(){
    var wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    document.body.appendChild(wrapper)
}

function navigate(pg){
    if(pg==="Home"){
        homePage()
    }else if(pg==="About"){
        aboutPage()
    }else{
        interactPage()
    }
}

function homePage(){
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML=""
    var header = document.createElement("h1")
    header.innerHTML="Home Page"
    wrapper.appendChild(header)
}

function aboutPage(){
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML=""
    var header = document.createElement("h1")
    var name = document.createElement("h3")
    name.innerHTML = "Nicholas"
    header.innerHTML="About Page"
    wrapper.appendChild(header)
    wrapper.appendChild(name)
}

function interactPage(){
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML=""
    var header = document.createElement("h1")
    var button = document.createElement("button")
    var counterVal = document.createElement("h3")
    var value = 0
    counterVal.innerHTML = "Counter: 0"
    button.innerHTML = "Increase Counter"
    header.innerHTML="Interact Page"
    button.addEventListener("click",function(){
        value+=1
        counterVal.innerHTML = "Counter: " + value

    })

    wrapper.appendChild(header)
    wrapper.appendChild(button)
    wrapper.appendChild(counterVal)
}

createNav()
createWrapper()
navigate("Home")