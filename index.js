const home_main = document.querySelector('body #home-main')
const main_header = document.querySelector('body #home-main header')
const fade_divs = document.querySelectorAll('body #home-main .fade-div')

const navigation_section = document.getElementById('navigation-section')

const home_h2 = document.getElementById('home-h2')
const garage_h2 = document.getElementById('garage-h2')
const about_h2 = document.getElementById('about-h2')
const schedule_h2 = document.getElementById('schedule-h2')
const unknown_h2 = document.getElementById('unknown-h2')

/*****************************************GARAGE*************************************************/

const garage_main = document.querySelector('body #garage-main')

const left_section_main = document.getElementById('left-section-main')
const occupy_space = document.getElementById('occupy-space-btn')
const km_run_div = document.querySelector('body #garage-main #left-section-main #km-run-div')
const km_run_input = document.querySelector('body #garage-main #left-section-main #km-run-div input')
const finalize_cancel_div = document.querySelector('body #garage-main #left-section-main #finalize-cancel-div')
const occupy_done_btn = document.querySelector('body #garage-main #left-section-main #finalize-cancel-div #done-btn')
const occupy_cancel_btn = document.querySelector('body #garage-main #left-section-main #finalize-cancel-div #cancel-btn')
const edit_info_btn = document.querySelector('body #garage-main #left-section-main #edit-info-btn')

const spare_parts_div = document.querySelector('body #garage-main #left-section-main #spare-parts-div')

const battery_replace_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #battery-replace-btn')
const battery_good_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #battery-good-btn')

const brake_replace_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #brake-replace-btn')
const brake_good_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #brake-good-btn')

const light_replace_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #light-replace-btn')
const light_good_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #light-good-btn')

const windshield_replace_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #windshield-replace-btn')
const windshield_good_btn = document.querySelector('body #garage-main #left-section-main #spare-parts-div #windshield-good-btn')

const middle_section_main = document.getElementById('middle-section-main')
const garage_spaces_divs = document.querySelectorAll('body #garage-main #right-section-main .garage-spaces')

const right_section_main = document.getElementById('right-section-main')

// every block or space in the garage section
let garage_capacity = {}

let previous_click_block = ""

function addGarageSpace(){
    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 4; j++){
            const row = document.createElement('div')
            
            row.className = 'garage-spaces'
            row.id = 'garage-space-row' + i + '-col' + j
            row.addEventListener('click' ,garageHover, false)

            let garage_block = 'G' + i + '-B' + j
            //initialize an object name, garage_capacity
            // the parent key will be the garage block number , ex G1-B1
            // the child keys will be , Availability and kilometer run
            garage_capacity[garage_block] = {
                Availability :'FREE',
                'Kilometer Run' :'0.0',
                Battery : null,
                Brakes : null,
                CarLights : null,
                WindShields : null
            }

            row.textContent = garage_block
            right_section_main.appendChild(row)
        }
    }

    //garage_capacity['G2-B1'] = 'OCCUPIED'
}

addGarageSpace()

// whenever user click on a specific block of garage
function garageHover(block){

    //to reset if one block has been settled
    edit_info_btn.style.display = 'none'

    // only if previous_click_block has a value , but at first , it is null
    if(previous_click_block){
        previous_click_block.style.opacity = '0.3'
    }
    
    // the opacity of the div or block selected
    block.target.style.opacity = '1'

    previous_click_block = block.target

    let free_occupied = garage_capacity[previous_click_block.textContent]['Availability']

    if(free_occupied == 'FREE'){
        occupy_space.style.display = 'block'
    }else{
        occupy_space.style.display = 'none'
    }

    if(garage_capacity[previous_click_block.textContent]['Edit Info Enable']){
        edit_info_btn.style.display = 'block'
    }

    if(garage_capacity[previous_click_block.textContent]['Kilometer Run'] != '0.0'){
        km_run_input.value = garage_capacity[previous_click_block.textContent]['Kilometer Run'] + " km"
    }else{
        km_run_input.value = ''
    }
    
    if(garage_capacity[previous_click_block.textContent]['Battery'] === true){
        battery_replace_btn.style.backgroundColor = '#d9514eff'
        battery_good_btn.style.backgroundColor = 'white'
    }else if(garage_capacity[previous_click_block.textContent]['Battery'] === false){
        battery_replace_btn.style.backgroundColor = 'white'
        battery_good_btn.style.backgroundColor = '#2da8d8ff'
    }

    if(garage_capacity[previous_click_block.textContent]['Brakes'] === true){
        brake_replace_btn.style.backgroundColor = '#d9514eff'
        brake_good_btn.style.backgroundColor = 'white'
    }else if(garage_capacity[previous_click_block.textContent]['Brakes'] === false){
        brake_replace_btn.style.backgroundColor = 'white'
        brake_good_btn.style.backgroundColor = '#2da8d8ff'
    }

    if(garage_capacity[previous_click_block.textContent]['CarLights'] === true){
        light_replace_btn.style.backgroundColor = '#d9514eff'
        light_good_btn.style.backgroundColor = 'white'
    }else if(garage_capacity[previous_click_block.textContent]['CarLights'] === false){
        light_replace_btn.style.backgroundColor = 'white'
        light_good_btn.style.backgroundColor = '#2da8d8ff'
    }

    if(garage_capacity[previous_click_block.textContent]['WindShields'] === true){
        windshield_replace_btn.style.backgroundColor = '#d9514eff'
        windshield_good_btn.style.backgroundColor = 'white'
    }else if(garage_capacity[previous_click_block.textContent]['WindShields'] === false){
        windshield_replace_btn.style.backgroundColor = 'white'
        windshield_good_btn.style.backgroundColor = '#2da8d8ff'
    }
    else{
        battery_replace_btn.style.backgroundColor = 'white'
        battery_good_btn.style.backgroundColor = 'white'

        brake_replace_btn.style.backgroundColor = 'white'
        brake_good_btn.style.backgroundColor = 'white'

        light_replace_btn.style.backgroundColor = 'white'
        light_good_btn.style.backgroundColor = 'white'

        windshield_replace_btn.style.backgroundColor = 'white'
        windshield_good_btn.style.backgroundColor = 'white'
    }
    
    console.log(previous_click_block.textContent)
}

battery_replace_btn.addEventListener('click', function(){
    battery_replace_btn.style.backgroundColor = '#d9514eff'
    battery_good_btn.style.backgroundColor = 'white'
}, false)

battery_good_btn.addEventListener('click', function(){
    battery_good_btn.style.backgroundColor = '#2da8d8ff'
    battery_replace_btn.style.backgroundColor = 'white'
}, false)

brake_replace_btn.addEventListener('click', function(){
    brake_replace_btn.style.backgroundColor = '#d9514eff'
    brake_good_btn.style.backgroundColor = 'white'
}, false)

brake_good_btn.addEventListener('click', function(){
    brake_good_btn.style.backgroundColor = '#2da8d8ff'
    brake_replace_btn.style.backgroundColor = 'white'
}, false)

light_replace_btn.addEventListener('click', function(){
    light_replace_btn.style.backgroundColor = '#d9514eff'
    light_good_btn.style.backgroundColor = 'white'
}, false)

light_good_btn.addEventListener('click', function(){
    light_good_btn.style.backgroundColor = '#2da8d8ff'
    light_replace_btn.style.backgroundColor = 'white'
}, false)

windshield_replace_btn.addEventListener('click', function(){
    windshield_replace_btn.style.backgroundColor = '#d9514eff'
    windshield_good_btn.style.backgroundColor = 'white'
}, false)

windshield_good_btn.addEventListener('click', function(){
    windshield_good_btn.style.backgroundColor = '#2da8d8ff'
    windshield_replace_btn.style.backgroundColor = 'white'
}, false)

occupy_space.addEventListener('click', function(){
   previous_click_block.style.background = 'url(./imgs/car_b.png)'
   previous_click_block.style.backgroundRepeat = 'no-repeat'
   previous_click_block.style.backgroundPosition = 'center'
   previous_click_block.style.backgroundSize = '50% 50%'

    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 4; j++){
            document.getElementById('garage-space-row' + i + '-col' + j).style.pointerEvents = 'none'
        }
    }

   km_run_div.style.pointerEvents = 'auto'
   spare_parts_div.style.pointerEvents = 'auto'

   occupy_space.style.display = 'none'
   finalize_cancel_div.style.display = 'block'
}, false)

occupy_done_btn.addEventListener('click', function(){

    // handle numbers only for km run text input
    let km_run_input_int_val
    km_run_input_int_val = parseInt(km_run_input.value)

    if(km_run_input_int_val !== parseInt(km_run_input_int_val , 10)){
        alert("Numbers only")
        return
    }

    //get the selected button on all of the spare Parts
    if(battery_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Battery'] = true 
    }else if(battery_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Battery'] = false 
    }

    if(brake_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Brakes'] = true 
    }else if(brake_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Brakes'] = false 
    }

    
    if(light_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['CarLights'] = true 
    }else if(light_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['CarLights'] = false 
    }

    if(windshield_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['WindShields'] = true 
    }else if(windshield_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['WindShields'] = false 
    }

    garage_capacity[previous_click_block.textContent]['Availability'] = 'OCCUPIED'
    garage_capacity[previous_click_block.textContent]['Kilometer Run'] = km_run_input_int_val
    garage_capacity[previous_click_block.textContent]['Edit Info Enable'] = true

    //km_run_input.value = km_run_input.value + " km"
    km_run_div.style.pointerEvents = 'none'
    spare_parts_div.style.pointerEvents = 'none'

    finalize_cancel_div.style.display = 'none'
    edit_info_btn.style.display = 'block'

    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 4; j++){
            document.getElementById('garage-space-row' + i + '-col' + j).style.pointerEvents = 'auto'
        }
    }

    console.log(garage_capacity)
}, false)

occupy_cancel_btn.addEventListener('click', function(){
    previous_click_block.style.background = 'url(./imgs/free.png)'
    previous_click_block.style.backgroundRepeat = 'no-repeat'
    previous_click_block.style.backgroundPosition = 'center'
    previous_click_block.style.backgroundSize = '50% 50%'

    km_run_div.style.pointerEvents = 'none'
    km_run_input.value = ""

    spare_parts_div.style.pointerEvents = 'none'

    battery_replace_btn.style.backgroundColor = 'white'
    battery_replace_btn.style.backgroundColor = 'white'

    brake_replace_btn.style.backgroundColor = 'white'
    brake_replace_btn.style.backgroundColor = 'white'

    light_replace_btn.style.backgroundColor = 'white'
    light_replace_btn.style.backgroundColor = 'white'

    occupy_space.style.display = 'block'
    finalize_cancel_div.style.display = 'none'

    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 4; j++){
            document.getElementById('garage-space-row' + i + '-col' + j).style.pointerEvents = 'auto'
        }
    }
}, false)

edit_info_btn.addEventListener('click', function(){
    let answer = confirm("Are you sure you want to edit this?")

    km_run_div.style.pointerEvents = 'auto'
    km_run_input.addEventListener('click', function(){
        km_run_input.value = ""
    }, false)

    spare_parts_div.style.pointerEvents = 'auto'

    if(answer){
        edit_info_btn.style.display = 'none'
        finalize_cancel_div.style.display = 'block'
    }
},false)

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

    occupy_space.style.opacity = '0'
    occupy_space.style.left = "-25%"

    finalize_cancel_div.style.opacity = '0'
    finalize_cancel_div.style.left = "-25%"

    edit_info_btn.style.opacity = '0'
    edit_info_btn.style.left = "-25%"

    middle_section_main.style.opacity = '0'
    middle_section_main.style.left = "-45%"

    right_section_main.style.opacity = '0'
    right_section_main.style.right = "-25%"
}

garage_h2.addEventListener('click', function(){
    indexTransitionShow()

    garage_main.style.zIndex = '1'
    garage_main.style.visibility = 'visible'

    left_section_main.style.opacity = '1'
    left_section_main.style.left = "0"

    occupy_space.style.opacity = '1'
    occupy_space.style.left = "0"

    finalize_cancel_div.style.opacity = '1'
    finalize_cancel_div.style.left = "0"

    edit_info_btn.style.opacity = '1'
    edit_info_btn.style.left = "0"

    middle_section_main.style.opacity = '1'
    middle_section_main.style.left = "25%"

    right_section_main.style.opacity = '1'
    right_section_main.style.right = "0"

}, false)

/*****************************************GARAGE*************************************************/

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