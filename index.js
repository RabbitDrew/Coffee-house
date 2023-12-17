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

/*slider*/
const arrowLeft =document.querySelector('.left')
const arrowRight =document.querySelector('.right')

const sliderList = document.querySelector('.slider_list')

const controls = document.querySelectorAll ('.controls_btn')

const arrStep = [0, -33.33, -66.66]

let slide = 0
let step = 0


function sliedPushLeftBtn () {
     if (slide >=0 && slide <2 ) {
        ++slide
     }else  {
        slide = 0
     }
}

function sliedPushRightBtn () {
    if (slide >0 && slide <3 ) {
       --slide
    }else if (slide===0) {
       slide = 2
    }
}

function move () {
    for (let i=0; i<arrStep.length; i++) {
        if (slide === i ) {
            step = arrStep[i]
        }
    }
}

function showTheSlide () {
    sliderList.style.transform="translateX("+step+"%)"
}


arrowLeft.addEventListener('click', event=> {
    sliedPushLeftBtn ()
    console.log(slide)
    move ()
    console.log(step)
    showTheSlide ()
    controlsBtnAnimation ()
})

/*autoSwitchSlides*/
function autoMove () {
    sliedPushLeftBtn ()
    move ()
    showTheSlide ()
    controlsBtnAnimation ()
}
setInterval (autoMove, 3500)

arrowRight.addEventListener('click', event=> {
    sliedPushRightBtn ()
    console.log(slide)
    move ()
    console.log(step)
    showTheSlide ()
    controlsBtnAnimation ()
})

/*controls*/

function controlsBtn () {
    for (let i=0; i<controls.length; i++) {
        if (event.target === controls[i]) {
            slide = i
        }
    }
}

for (let i=0; i<controls.length; i++) {
    controls[i].addEventListener('click', event => {
        controlsBtn ()
        console.log(slide)
        move ()
        console.log(step)
        showTheSlide ()
        controlsBtnAnimation ()
    })
}

/*animationControlsBtns*/

const showBtnAnimation = document.querySelectorAll('.controll_btn_animation')

function controlsBtnAnimation () {
    for (let i=0; i<controls.length; i++) {
        if (slide !== i ) {
            showBtnAnimation[i].style.animation = 'fill' + 3.5 +'s'
        }else  {
            showBtnAnimation[i].style.removeProperty('animation')
        }
    }
}
controlsBtnAnimation ()

/*/*animationControlsBtns*/
/*controls*/

/*swipe*/

const sliderWin = document.querySelector ('.slider_win_wrapper')
const sliderWinLeft = sliderWin.offsetLeft;
const windowWidth = window.innerWidth;

const sliderListWidth = sliderList.offsetWidth
console.log(sliderListWidth)
let tuchWidth = 0
/*function getTuch (event) {
    let tuch = event.touches[0]
    let tuchX = tuch.clientX;
    tuchWidth = tuchX-sliderListWidth
    tuchWidth = (windowWidth/tuchWidth)*100
}


function slideMove () {
    if (sliderListWidth>=0 && sliderListWidth<=sliderListWidth) {
        sliderList.style.transform ='translateX(' + tuchWidth*0.7 + '%)'
    }
}

sliderList.addEventListener("touchstart", function(event) {
    getTuch (event)
    console.log(tuchWidth)
});

sliderList.addEventListener("touchmove", function(event) {
    getTuch (event)
    slideMove ()
    console.log(tuchWidth)
});
*/
/*/swipe*/
/*/slider*/

let startX = 0;
function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  let endX = e.changedTouches[0].clientX;
  let diffX = endX - startX;
  let direction = diffX > 0 ? 'right' : 'left';
  switchSlide(direction);
}

function slideMove () {
let sliderOffset = sliderWin.offsetLeft;
let touchOffset = tuchWidth - sliderOffset;
let slideOffset = touchOffset * 0.5;
if (slideOffset >= 0 && slideOffset <= sliderListWidth) {
    sliderList.style.transform ='translateX(' + slideOffset + 'px)';
    }
}

function switchSlide(direction) {
  if (direction === 'left') {
    sliedPushLeftBtn();
  }

  if (direction === 'right') {
    sliedPushRightBtn();
  }
  move();
  showTheSlide();
  controlsBtnAnimation();
}

sliderList.addEventListener('touchstart', handleTouchStart);
sliderList.addEventListener('touchend', handleTouchEnd);