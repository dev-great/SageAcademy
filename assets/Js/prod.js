var tabs = document.querySelectorAll(".product-tabs_wrap ul li");
var product_designers = document.querySelectorAll(".product_designer");
var product_marketings = document.querySelectorAll(".product_marketing");
var product_managements = document.querySelectorAll(".product_management");
var all = document.querySelectorAll(".pricingbox");

tabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach((tab)=>{

      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");
    console.log(tabval);

    if(tabval == "product_designer"){
        product_designers.forEach((product_designer)=>{
            product_designer.style.display = "block";
      })
      product_marketings.forEach((product_marketing)=>{
        product_marketing.style.display = "none";
        })
        product_managements.forEach((product_management)=>{
            product_management.style.display = "none";
        })
    }
    else if(tabval == "product_marketing"){
        product_designers.forEach((product_designer)=>{
            product_designer.style.display = "none";
      })
      product_marketings.forEach((product_marketing)=>{
        product_marketing.style.display = "block";
        })
        product_managements.forEach((product_management)=>{
            product_management.style.display = "none";
        })
    }
    else if(tabval == "product_management"){
        product_designers.forEach((product_designer)=>{
            product_designer.style.display = "none";
      })
      product_marketings.forEach((product_marketing)=>{
        product_marketing.style.display = "none";
        })
        product_managements.forEach((product_management)=>{
            product_management.style.display = "block";
        })
    }
    else{}

  })
})