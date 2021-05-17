const home_main = document.querySelector('body #home-main')
const main_header = document.querySelector('body #home-main header')
const fade_divs = document.querySelectorAll('body #home-main .fade-div')

const navigation_section = document.getElementById('navigation-section')

const home_h2 = document.getElementById('home-h2')
const garage_h2 = document.getElementById('garage-h2')
const about_h2 = document.getElementById('about-h2')
const schedule_h2 = document.getElementById('schedule-h2')
const unknown_h2 = document.getElementById('unknown-h2')

const garage_main = document.querySelector('body #garage-main')
const left_section_main = document.getElementById('left-section-main')
const right_section_main = document.getElementById('right-section-main')
const occupy_space = document.getElementById('occupy-space-btn')

function addGarageSpace(){
    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 4; j++){
            const row = document.createElement('div')
            
            row.className = 'garage-spaces'
            row.id = 'garage-space-row' + i + '-col' + j
            row.textContent = "FREE"
            row.addEventListener('mouseover' ,garageHover, false)
            right_section_main.appendChild(row)
        }
    }
}

function garageHover(){
    occupy_space.style.display = 'block'
}
//please work
addGarageSpace()


function indexTransitionShow(){
    main_header.style.top = '-60%'

    navigation_section.style.top = '0'
    navigation_section.style.zIndex = '2'

    fade_divs[0].style.top = '110%'
    fade_divs[1].style.top = '110%'
    fade_divs[2].style.top = '110%'
    fade_divs[3].style.top = '110%'
    fade_divs[4].style.top = '110%'
}

function closeGarage(){
    garage_main.style.zIndex = '-1'
    garage_main.style.visibility = 'hidden'

    left_section_main.style.opacity = '0'
    left_section_main.style.left = "-25%"

    right_section_main.style.opacity = '0'
    right_section_main.style.right = "-25%"
}

home_h2.addEventListener('click', function(){
    main_header.style.top = '0'

    navigation_section.style.top = '65%'
    navigation_section.style.zIndex = '0'

    fade_divs[0].style.top = '70%'
    fade_divs[1].style.top = '76%'
    fade_divs[2].style.top = '82%'
    fade_divs[3].style.top = '88%'
    fade_divs[4].style.top = '94%'

    closeGarage()

}, false)

garage_h2.addEventListener('click', function(){
    indexTransitionShow()

    garage_main.style.zIndex = '1'
    garage_main.style.visibility = 'visible'

    left_section_main.style.opacity = '1'
    left_section_main.style.left = "0"

    right_section_main.style.opacity = '1'
    right_section_main.style.right = "0"

}, false)

about_h2.addEventListener('click', function(){
    indexTransitionShow()

    closeGarage()
}, false)

schedule_h2.addEventListener('click', function(){
    indexTransitionShow()

    closeGarage()
}, false)

unknown_h2.addEventListener('click', function(){
    indexTransitionShow()

    closeGarage()
}, false)