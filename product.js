var productContainer = document.getElementById("images")
var search = document.getElementById("search-input")
var productlist = productContainer.querySelectorAll("div")

var form = document.getElementById("form")
form.addEventListener("submit", function(event){
    event.preventDefault()
})

search.addEventListener("keyup", function(event){
    var enteredValue = event.target.value.toUpperCase()
    for(count=0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})