var tabs = document.querySelectorAll(".tabs_wrap ul li");
var frontend_engineerings = document.querySelectorAll(".frontend_engineering");
var backend_engineerings = document.querySelectorAll(".backend_engineering");
var cloud_engineerings = document.querySelectorAll(".cloud_engineering");
var all = document.querySelectorAll(".pricingbox");

tabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach((tab)=>{

      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");
    console.log(tabval);

    if(tabval == "frontend_engineering"){
        frontend_engineerings.forEach((frontend_engineering)=>{
            frontend_engineering.style.display = "block";
      })
      backend_engineerings.forEach((backend_engineering)=>{
        backend_engineering.style.display = "none";
        })
        cloud_engineerings.forEach((cloud_engineering)=>{
            cloud_engineering.style.display = "none";
        })
    }
    else if(tabval == "backend_engineering"){
        frontend_engineerings.forEach((frontend_engineering)=>{
            frontend_engineering.style.display = "none";
      })
      backend_engineerings.forEach((backend_engineering)=>{
        backend_engineering.style.display = "block";
        })
        cloud_engineerings.forEach((cloud_engineering)=>{
            cloud_engineering.style.display = "none";
        })
    }
    else if(tabval == "cloud_engineering"){
        frontend_engineerings.forEach((frontend_engineering)=>{
            frontend_engineering.style.display = "none";
      })
      backend_engineerings.forEach((backend_engineering)=>{
        backend_engineering.style.display = "none";
        })
        cloud_engineerings.forEach((cloud_engineering)=>{
            cloud_engineering.style.display = "block";
        })
    }
    else{}

  })
})