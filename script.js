/* ===================================
   ToolHub AI - Script.js (Phase 1)
=================================== */

// ===============================
// Dark Mode Toggle
// ===============================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML="☀️";

    }else{

        themeBtn.innerHTML="🌙";

    }

});

// ===============================
// Search Tool Cards
// ===============================

const searchInput = document.querySelector(".search-box input");

const cards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("keyup",function(){

    let value=this.value.toLowerCase();

    cards.forEach(card=>{

        let title=card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

// ===============================
// Button Animation
// ===============================

const buttons=document.querySelectorAll(".tool-card a");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ===============================
// Welcome Message
// ===============================

window.onload=function(){

console.log("Welcome to ToolHub AI 🚀");

};

// ===============================
// Scroll Effect
// ===============================

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

document.querySelector(".header").style.boxShadow="0 8px 20px rgba(0,0,0,.15)";

}else{

document.querySelector(".header").style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

}

});

/* Dark Mode */

.dark-mode{
background:#111827;
color:#ffffff;
}

.dark-mode .header{
background:#1f2937;
}

.dark-mode .tool-card{
background:#1f2937;
color:#ffffff;
}

.dark-mode .feature{
background:#1f2937;
color:#ffffff;
}

.dark-mode nav a{
color:#ffffff;
}

.dark-mode .search-box input{
background:#374151;
color:#ffffff;
  }
