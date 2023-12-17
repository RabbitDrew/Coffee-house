/*adopt_menu*/
const btnLines = document.querySelector('.circl_is_closed')
const menuPanel = document.querySelector ('.adopt_menu_panel')
const btnLineTop = document.querySelector ('.line_top')
const btnLineBottom =document.querySelector ('.line_bottom')


let panelIsOpened = false

function panelIsClosed () {
    let screenWidth = window.innerWidth
    if (screenWidth>768) {
        menuPanel.classList.add('panel_get_close')
        btnLineTop.classList.remove('line_to_cross_animation_top')
        btnLineBottom.classList.remove('line_to_cross_animation_bottom')
        panelIsOpened = false
    }
}

panelIsClosed ()
window.addEventListener("resize",panelIsClosed);


function openMenuPanel () {
    menuPanel.classList.remove('panel_get_close')
    panelIsOpened = true
}

function closeMenuPanel () {
    menuPanel.classList.add('panel_get_close')
    panelIsOpened = false
}

function changeBtn () {
    if (panelIsOpened === false){
        btnLineTop.classList.remove('line_to_cross_animation_top')
        btnLineBottom.classList.remove('line_to_cross_animation_bottom')
    } else if (panelIsOpened === true) {
        btnLineTop.classList.add('line_to_cross_animation_top')
        btnLineBottom.classList.add('line_to_cross_animation_bottom')
    }
}

changeBtn ()

function panelAnimationOpen () {
    menuPanel.classList.add('panel_is_animated_open')
    menuPanel.classList.remove('panel_is_animated_close')
    panelIsOpened = true
}

function panelAnimationClose () {
    menuPanel.classList.add('panel_is_animated_close')
    menuPanel.classList.remove('panel_is_animated_open')
    panelIsOpened = false
}


btnLines.addEventListener('click', event => {
    if (panelIsOpened === false) {
        panelAnimationOpen ()
        openMenuPanel ()
        changeBtn ()
        console.log (panelIsOpened)
    } else if (panelIsOpened === true) {
        panelAnimationClose ()
        setTimeout (closeMenuPanel, 500)
        changeBtn ()
        console.log (panelIsOpened)
}
})


const navBtnsMenuPanel = document.querySelectorAll('.nav_item_adopt') 

for (let i = 0; i<navBtnsMenuPanel.length; i++) {
    navBtnsMenuPanel[i].addEventListener('click', event =>  {
        if (panelIsOpened === true) {
            panelAnimationClose ()
            setTimeout (closeMenuPanel, 500)
            changeBtn ()
            panelIsOpened = false
        }
    })
}
/*adopt_menu*/


/*MENU CARDS*/
/*switch menu cards*/
const controlBtnsCards = document.querySelectorAll ('.nav_menu_btn')
const controlBtnsCardsTitle = document.querySelectorAll ('.menu_btn_title')
const menuContainerWrapper = document.querySelectorAll ('.menu_container_wrapper')

let currentBtn = 0

function getCurrentBtn (i) {
            currentBtn=i
    console.log(currentBtn)
}

function showTheMenulist () {
    for (let i=0; i<menuContainerWrapper.length; i++) {
        if (currentBtn === i) {
           menuContainerWrapper[i].classList.remove('cards_list')
           menuContainerWrapper[i].classList.remove('hidden_menu')
           menuContainerWrapper[i].classList.add('visible_menu')
        } else {
            menuContainerWrapper[i].classList.add('cards_list')
        }
      }
}

function switchTheMenuList () {
   for (let i=0; i<menuContainerWrapper.length; i++) {
     if (currentBtn === i) {
        menuContainerWrapper[i].classList.remove('cards_list')
     }else {
        menuContainerWrapper[i].classList.add('cards_list')
     }
   }
}

function shiftAnimation () {
    for (let i=0; i<menuContainerWrapper.length; i++) {
        if (currentBtn === i) {
           menuContainerWrapper[i].classList.remove('hidden_menu')
           menuContainerWrapper[i].classList.add('visible_menu')
        }else {
           menuContainerWrapper[i].classList.add('hidden_menu')
           menuContainerWrapper[i].classList.remove('visible_menu')
        }
    }
}

const loadBtn = document.querySelector('.load_btn_wrapper')
/*rework the function  it'has  to has dependences from length of arr items to be shown on the screen*/
function hideTheLoadBtn () {
    if (currentBtn===1) {
            loadBtn.classList.add ('hide_load_btn')
        }else if (currentBtn !==1) {
            loadBtn.classList.remove ('hide_load_btn')
    }
}
hideTheLoadBtn ()
/*rework the function  it'has  to has dependences from length of arr items to be shown on the screen*/

function activeBtnCards () {
    for (let i=0; i<controlBtnsCards.length; i++) {
        if (currentBtn===i) {
            controlBtnsCards[i].classList.add('btn_is_active')
            controlBtnsCardsTitle[i].classList.add('menu_btn_title_is_active')
        }else {
            controlBtnsCards[i].classList.remove('btn_is_active')
            controlBtnsCardsTitle[i].classList.remove('menu_btn_title_is_active')
        }
    }
}
activeBtnCards () /*active btn with cards*/

for (let i=0; i<controlBtnsCards.length; i++) {
    controlBtnsCards[i].addEventListener('click', event => {
        getCurrentBtn (i)
        activeBtnCards ()
        switchTheMenuList ()
        setTimeout (shiftAnimation,200)

        hideTheLoadBtn ()
    })
}

shiftAnimation ()
showTheMenulist ()

 /*load the rest of cards*/
 const coffeCards = document.querySelectorAll ('.coffe_card')
 const teaCards = document.querySelectorAll ('.tea_card')
 const dessertCards = document.querySelectorAll ('.dessert_card')

 var cardsIsLoaded = false

 function loadCoffeCards () {
     for (let i = 0; i<coffeCards.length; i++) {
        if (currentBtn === 0) {
            coffeCards[i].classList.remove('close_two_part')
            coffeCards[i].classList.toggle ('load_animation_card_open')
            cardsIsLoaded =true
        }
     }
 }

 function loadDessertCards () {
    for (let i = 0; i<dessertCards.length; i++) {
       if (currentBtn === 2) {
           dessertCards[i].classList.remove('close_two_part')
           dessertCards[i].classList.toggle ('load_animation_card_open')
           cardsIsLoaded = true
       }
    }
 }

 function hideTheLoadBtnCoffeCards() {
    if (curCard===0) {
        loadBtn.classList.add ('hide_load_btn')
    }
}

function hideTheLoadBtndessertCards() {
    if (curCard===2) {
        loadBtn.classList.add ('hide_load_btn')
    }
}

 function animationLoadBtnAdd () {
    loadBtn.classList.add('load_animation_btn')
 }

 function animationLoadBtnRemove () {
    loadBtn.classList.remove('load_animation_btn')
 }
    animationLoadBtnRemove ()

loadBtn.addEventListener ('click', event => {
    animationLoadBtnAdd ()
    setTimeout(animationLoadBtnRemove,850)
    setTimeout(hideTheLoadBtnCoffeCards, 900)
    setTimeout(loadCoffeCards, 900)
    setTimeout(hideTheLoadBtndessertCards, 900)
    setTimeout(loadDessertCards, 900)
})

/*load_the_rest_of_cards*/
/*/switch menu cards*/
/*/MENU CARDS*/

/*POPUPS*/
/*open close pop up window*/
const cards = document.querySelectorAll ('.menu_card_wrapper')
const popUps= document.querySelectorAll ('.pop_ups_bg')
const popUpWrapper = document.querySelectorAll ('.pop_ups_wrapper')
const popUp = document.querySelectorAll ('.pop_up')
const popUpCloseBtn = document.querySelectorAll ('.pop_up_close_btn')
const popUpCloseBtnTitle = document.querySelectorAll ('.pop_up_close_btn_title')

let curCard = 0

let popUpIsShown = false

function getindexCard (i) {
    curCard = i
    console.log(curCard)
}

function openPopUp () {
    for (let i=0; i<popUps.length; i++) {
      if (curCard === i) {
            popUps[i].classList.remove('pop_up_is_closed')
            popUpIsShown = true
        }
      }
      console.log(popUpIsShown)
    }


 function closePopUp (event) {
    for (let i=0; i<popUps.length; i++) {
        if (event === popUps[i] || event === popUpWrapper[i] || event === popUpCloseBtn[i] || event === popUpCloseBtnTitle[i]) {
            popUps[i].classList.add('pop_up_is_closed')
        }
      }
      popUpIsShown = false
      console.log(popUpIsShown)
 }

 function animationOpenPopUp () {
    for (let i=0; i<popUps.length; i++) {
        if (curCard === i) {
            popUps[i].classList.remove ('pop_up_hidden')
            popUps[i].classList.add ('pop_up_visible')
        }
      }
 }

 function animationCosePopUp () {
    for (let i=0; i<popUps.length; i++) {
        if (curCard === i) {
            popUps[i].classList.add ('pop_up_hidden')
            popUps[i].classList.remove ('pop_up_visible')
        }
      }
 }

function disableScroll () {
    document.body.style.cssText=`
    overflow:hidden;
    `
}

function enableScroll () {
    document.body.style.cssText=`
    overflow:auto;
    `
}


/*get the price of card
(fuction for getting start price from layout for the next calculating price)*/
let price = 0
let defoltPrice = 0
let text = ''
function getThePrice () {
    for (let i=0; i<popUps.length; i++) {
        if (curCard === i) {
            text = popUpPrice[i].textContent
            text = text.replace('$', '')
            price = +text
            defoltPrice = +text
        }
    }
}
/*/get the price of card
(fuction for getting start price from layout for the next calculating price)*/


for (let i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', event => {
        getindexCard (i)
        openPopUp ()
        animationOpenPopUp ()

        getThePrice ()
        disableScroll ()
        console.log(price)
        console.log(defoltPrice)
    })
}

/*close pop up by clicking on the bg*/
for (let i=0; i<popUpWrapper.length; i++) {
    popUpWrapper[i].addEventListener('click', event => {
        if (event.target === event.currentTarget) {
            animationCosePopUp ()
            setTimeout(function () { closePopUp(event); }, 500)
            enableScroll ()
            console.log(popUpIsShown)
        }
    })
}
/*/close pop up by clicking on the bg*/

/*close pop up by clicking on Btn close */
for (let i=0; i<popUpCloseBtn.length; i++) {
    popUpCloseBtn[i].addEventListener('click', event => {
        if (event.target === event.currentTarget) {
            animationCosePopUp ()
            setTimeout(function () { closePopUp(event); }, 500)
            enableScroll ()
            console.log(popUpIsShown)
        }
    })
}
    /*btn title 'close'*/
    for (let i=0; i<popUpCloseBtnTitle.length; i++) {
        popUpCloseBtnTitle[i].addEventListener('click', event => {
            if (event.target === event.currentTarget) {
                popUpIsShown = false
                animationCosePopUp ()
                setTimeout(function () { closePopUp(event); }, 500)
                enableScroll ()
                console.log(popUpIsShown)
            }
        })
    }
      /*btn title 'close'*/
/*/close pop up by clicking on Btn close*/
/*/open / close pop up window*/


/*price calculating*/
const popUpPrice = document.querySelectorAll ('.pop_up_price')
const sizeBtn = document.querySelectorAll ('.size')
const addBtn = document.querySelectorAll ('.additivies')

let indexOfSizeBtn = 0

function getTheIndexSizeBtn (i) {
       indexOfSizeBtn =i %3
}

let indexOfAddBtn = 0
let priceOfAdd = 0
function getTheIndexAddBtn (i) {
    indexOfAddBtn =i %3
    console.log(indexOfAddBtn)
}

function plusAdditieves () {
    if (indexOfAddBtn >=0 && indexOfAddBtn <=2) {
       priceOfAdd = priceOfAdd+0.5
    }
}


function changeThePrice () {
    if (indexOfSizeBtn === 0) {
        price = defoltPrice
    }else if (indexOfSizeBtn === 1) {
        price = defoltPrice+0.5
    }else if (indexOfSizeBtn === 2) {
        price = defoltPrice + 1
    }
}

function showThePrice () {
    for (let i=0; i<popUps.length; i++) {
        if (curCard === i) {
            popUpPrice[i].textContent = '$'+(price+priceOfAdd).toFixed(2)
        }
    }
}

/*additieves btn*/

for (let i=0; i<addBtn.length; i++) {
    addBtn[i].addEventListener('click', event =>{
        getTheIndexAddBtn (i)
        plusAdditieves()
        showThePrice ()
    })
}

/*/additives btn*/

/*size btn*/
for (let i=0; i<sizeBtn.length; i++) {
    sizeBtn[i].addEventListener('click', event =>{
        getTheIndexSizeBtn (i)
        changeThePrice ()
        showThePrice ()
    })
}
/*/size btn*/

/*//*price calculating*/
/*/POPUPS*/


