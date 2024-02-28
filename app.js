const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".sliderWrapper")
const sliderItem = document.querySelectorAll(".sliderItem")
const navL = document.querySelector(".navList")
const lItem = document.querySelectorAll(".listItems")
const buyButton = document.querySelector(".buyBtn")
const productDescription = document.querySelector(".productDescription")
const productDescriptionTitle = document.querySelector(".productDescriptionTitle")
const payment = document.querySelector(".payment")
const prodbuyBtn = document.querySelector(".prodbuyBtn")
const close = document.querySelector(".closeBtn")

//Creting a list of arrays of the products so that whenever user click on the product we can display it on the #productDescription Div 
//*Starting code for making it dynamic, creating arrays of product sarts here*

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 120,
        colors: [{
            code: "black",
            img: "https://i.ibb.co/sskGtXn/air.png"
        },
        {
            code: "blue",
            img: "https://i.ibb.co/qp5ZF1D/air2.png"
        }
        ]
    },

    {
        id: 2,
        title: "Jordan",
        price: 149,
        colors: [{
            code: "gray",
            img: "https://i.ibb.co/0r6zGMH/jordan.png"
        },
        {
            code: "green",
            img: "https://i.ibb.co/gDNZVWt/jordan2.png"
        }
        ]
    },

    {
        id: 3,
        title: "Hippie",
        price: 100,
        colors: [{
            code: "gray",
            img: "https://i.ibb.co/crfvc5h/hippie.png"
        },
        {
            code: "black",
            img: "https://i.ibb.co/19cnN6X/hippie2.png"
        }
        ]
    },

    {
        id: 4,
        title: "Crater",
        price: 130,
        colors: [{
            code: "black",
            img: "https://i.ibb.co/1Lp4WNC/crater.png"
        },
        {
            code: "gray",
            img: "https://i.ibb.co/t4McFp5/crater2.png"
        }
        ]
    },

    {
        id: 5,
        title: "Blazer",
        price: 110,
        colors: [{
            code: "gray",
            img: "https://i.ibb.co/QpkDhks/blazer.png"
        },
        {
            code: "green",
            img: "https://i.ibb.co/KNRNrPD/blazer2.png"
        }
        ]
    }
]
//Making Array of products code is done here 

let choosenProduct = products[0]; //this will make sure that the first will always after loading & reloading of the page

const currentProductImg = document.querySelector(".dImg");
const currentProductTitle = document.querySelector(".productDescriptionTitle");
const currentProductPrice = document.querySelector(".productDescriptionPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

lItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //This will move the slider left and right *slider moving code start*
        sliderWrapper.style.transform = `translateX(${-100 * index}VW)`

        choosenProduct = products[index]
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductColors.forEach((color, index) => {

            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;

    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })

        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

prodbuyBtn.addEventListener("click", () => {
    payment.style.display = "flex";
})

close.addEventListener("click", () => {
    console.log("clicked")
    payment.style.display = "none";
})