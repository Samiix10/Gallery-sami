const navItems = document.querySelector(".navItemList")
const navBtn = document.querySelector(".navitems button")
const swip1 = document.getElementById("Swiper")
const scrol = document.getElementById("scrol")
console.log(navBtn)
navBtn.addEventListener("click", () => {
    navItems.classList.toggle("show")
})
scrol.addEventListener("click", () => { 
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
window.addEventListener("scroll", () => { 
    const nav = document.querySelector("nav")
    if (window.scrollY > 0) {
        nav.classList.add("stiky")
    } else {
        nav.classList.remove("stiky")
    }
    if (window.scrollY > 800) {
        scrol.style = "opacity: 1;visibility: visible;"
    } else {
        scrol.style = "opacity: 0;visibility: hidden;"
    }
})
const img = document.querySelector(".secContent")
const newImg = document.createElement("img")

const myImges = [{src : "img/sec-2-imgs/portfolio-1.jpg",
    title:"the real cam",
    secTitle:"marks mojos",
    genra:"potography"
},
    {src : "img/sec-2-imgs/portfolio-2.jpg",
        title:"glass on paper",
        secTitle:"paper glass",
        genra:"paper"
    },
    {src : "img/sec-2-imgs/portfolio-3.jpg",
        title:"enjoy the mix",
        secTitle:"music mojo",
        genra:"music"
    },
    {src : "img/sec-2-imgs/portfolio-4.jpg",
        title:"awesome food",
        secTitle:"real teste",
        genra:"awesome food"
    },
    {src : "img/sec-2-imgs/portfolio-6.jpg",
        title:"sofamania",
        secTitle:"Glosy color",
        genra:"color"
    },
    {src : "img/sec-2-imgs/portfolio-11.jpg",
        title:"orange",
        secTitle:"real orange",
        genra:"fruit"
    },
    {src : "img/sec-2-imgs/portfolio-7.jpg",
        title:"the greenary",
        secTitle:"the door",
        genra:"door"
    },
    {src : "img/sec-2-imgs/portfolio-10.jpg",
        title:"stool glass",
        secTitle:"cutting tool",
        genra:"tools"
    },
    {src : "img/sec-2-imgs/portfolio-5.jpg",
        title:"the headphone",
        secTitle:"music moment",
        genra:"headphone"
    }]
//console.log(myImges)

showimgs(myImges)
function showimgs(myImges) {
    swip1.innerHTML = " "
    for (let i = 0; i < myImges.length; i++) { 
        swip1.innerHTML += `
        <div class="swiper-slide">
            <div class="cardBox">
                <div class="cardbody" style="background-image:url(${myImges[i].src})">
                    <span class="mask">
                    </span>
                    <p>${myImges[i].genra}</p>
                    <div class="cardText">
                        <span>
                            ${myImges[i].secTitle}
                        </span>
                        <p>
                        ${myImges[i].title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        `
    }
}




const sw = document.getElementById("swiper1")
sw.addEventListener("mouseenter", () => {
    swiper1.autoplay.stop()
})
sw.addEventListener("mouseleave", () => {
    swiper1.autoplay.start()
})