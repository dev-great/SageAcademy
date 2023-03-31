var tabs = document.querySelectorAll(".data_tabs_wrap ul li");
var data_engineerings = document.querySelectorAll(".data_engineering");
var data_analysises = document.querySelectorAll(".data_analysis");
var data_sciences = document.querySelectorAll(".data_science");
var all = document.querySelectorAll(".pricingbox");

tabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach((tab)=>{

      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");
    console.log(tabval);

    if(tabval == "data_engineering"){
        data_engineerings.forEach((data_engineering)=>{
          data_engineering.style.display = "block";
      })
      data_analysises.forEach((data_analysis)=>{
        data_analysis.style.display = "none";
        })
        data_sciences.forEach((data_science)=>{
          data_science.style.display = "none";
        })
    }
    else if(tabval == "data_analysis"){
        data_engineerings.forEach((data_engineering)=>{
          data_engineering.style.display = "none";
      })
      data_analysises.forEach((data_analysis)=>{
        data_analysis.style.display = "block";
        })
        data_sciences.forEach((data_science)=>{
          data_science.style.display = "none";
        })
    }
    else if(tabval == "data_science"){
        data_engineerings.forEach((data_engineering)=>{
          data_engineering.style.display = "none";
      })
      data_analysises.forEach((data_analysis)=>{
        data_analysis.style.display = "none";
        })
        data_sciences.forEach((data_science)=>{
          data_science.style.display = "block";
        })
    }
    else{}

  })
})