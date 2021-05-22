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

const card_vehicle_section = document.querySelector('body #garage-main #left-section-main #card-vehicle-section')
const service_card_section = document.querySelector('body #garage-main #left-section-main #service-card-section')

const bars_div = document.querySelector('body #garage-main #left-section-main #bars-div')
const bars_body_div = document.querySelector('body #garage-main #left-section-main #bars-body-div')
const card_vehicle_nav = document.querySelector('body #garage-main #left-section-main #bars-body-div label:nth-child(1)')
const service_order_card_nav = document.querySelector('body #garage-main #left-section-main #bars-body-div label:nth-child(2)')
const delivery_note_nav = document.querySelector('body #garage-main #left-section-main #bars-body-div label:nth-child(3)')


const occupy_space = document.getElementById('occupy-space-btn')
const km_run_div = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #km-run-div')
const km_run_input = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #km-run-div input')
const finalize_cancel_div = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #finalize-cancel-div')
const occupy_done_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #finalize-cancel-div #done-btn')
const occupy_cancel_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #finalize-cancel-div #cancel-btn')
const edit_info_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #edit-info-btn')

const spare_parts_div = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div')

const battery_replace_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #battery-replace-btn')
const battery_good_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #battery-good-btn')

const brake_replace_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #brake-replace-btn')
const brake_good_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #brake-good-btn')

const light_replace_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #light-replace-btn')
const light_good_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #light-good-btn')

const windshield_replace_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #windshield-replace-btn')
const windshield_good_btn = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #spare-parts-div #windshield-good-btn')

const logic_info_div = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #logic-info-div')
const car_model_input_garage = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #logic-info-div #car-model-input')
const car_type_input_garage = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #logic-info-div #car-type-input')
const owner_name_input_garage = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #logic-info-div #owner-name-input')
const owner_address_input_garage = document.querySelector('body #garage-main #left-section-main #card-vehicle-section #logic-info-div #owner-address-input')
//service card section
const service_time_input = document.querySelector('body #garage-main #left-section-main #service-card-section #service-time-div #service-time-input')
const date_leave_input = document.querySelector('body #garage-main #left-section-main #service-card-section #date-leave-div #date-leave-input')
const schedule_acts_1_input = document.querySelector('body #garage-main #left-section-main #service-card-section #scheduled-acts-div #scheduled-acts-input-1')
const schedule_acts_2_input = document.querySelector('body #garage-main #left-section-main #service-card-section #scheduled-acts-div #scheduled-acts-input-2')
const schedule_acts_3_input = document.querySelector('body #garage-main #left-section-main #service-card-section #scheduled-acts-div #scheduled-acts-input-3')


const middle_section_main = document.getElementById('middle-section-main')
const garage_spaces_divs = document.querySelectorAll('body #garage-main #right-section-main .garage-spaces')

const right_section_main = document.getElementById('right-section-main')

const garage_notif = document.querySelector('body #home-main #navigation-section #garage-notif')

/*****************************************GARAGE*************************************************/

const schedule_main = document.querySelector('body #schedule-main')

const schedule_body = document.querySelector('body #schedule-main #schedule-body')

const current_day_div = document.querySelector('body #schedule-main #schedule-body #current-day-div')
const current_day_div_lbl = document.querySelector('body #schedule-main #schedule-body #current-day-div #current-day-lbl')
const current_day_div_1 = document.querySelector('body #schedule-main #schedule-body #current-day-div-1')
const current_day_div_lbl_1 = document.querySelector('body #schedule-main #schedule-body #current-day-div-1 #current-day-lbl-1')
const current_day_div_2 = document.querySelector('body #schedule-main #schedule-body #current-day-div-2')
const current_day_div_lbl_2 = document.querySelector('body #schedule-main #schedule-body #current-day-div-2 #current-day-lbl-2')

const arrow_left_day = document.querySelector('body #schedule-main #schedule-body .arrow-left')

const add_new_div = document.querySelector('body #schedule-main #schedule-body #add-new-sched')

const add_new_lbl = document.querySelector('body #schedule-main #schedule-body #add-new-sched #add-new-sched-lbl')
const add_new_img = document.querySelector('body #schedule-main #schedule-body #add-new-sched #add-new-sched-img')

const add_new_logic_info = document.querySelector('body #schedule-main #schedule-body #add-new-sched #logic-info-div')
const car_model_input = document.querySelector('body #schedule-main #schedule-body #add-new-sched #logic-info-div #car-model-input')
const car_type_input = document.querySelector('body #schedule-main #schedule-body #add-new-sched #logic-info-div #car-type-input')
const owner_name_input = document.querySelector('body #schedule-main #schedule-body #add-new-sched #logic-info-div #owner-name-input')
const owner_address_input = document.querySelector('body #schedule-main #schedule-body #add-new-sched #logic-info-div #owner-address-input')
const time_to_sched_input = document.querySelector('body #schedule-main #schedule-body #add-new-sched #logic-info-div #time-to-sched-input')

const add_new_btn = document.querySelector('body #schedule-main #schedule-body #add-new-sched #add-new-sched-btn')
const add_new_btn_cancel = document.querySelector('body #schedule-main #schedule-body #add-new-sched #cancel-new-sched-btn')

let sched_counter = 0
let garage_block_arr = []
let sched_counter_curr = 0

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 4; j++){
        garage_block_arr.push('G' + i + '-B' + j)
    }
}

// every block or space in the garage section
let garage_capacity = {}

let previous_click_block = ""

bars_div.addEventListener('click', function(){
    if(bars_body_div.style.display == 'block'){
        bars_body_div.style.display = 'none'
    }else{
        bars_body_div.style.display = 'block'
    }
    
}, false)

service_order_card_nav.addEventListener('click', function(){
    service_card_section.style.display = 'block'
    card_vehicle_section.style.display = 'none'
    //delivery_note_section.style.display = 'none'

    bars_body_div.style.display = 'none'
}, false)

card_vehicle_nav.addEventListener('click', function(){
    card_vehicle_section.style.display = 'block'
    service_card_section.style.display = 'none'
    //delivery_note_section.style.display = 'none'

    bars_body_div.style.display = 'none'
}, false)

delivery_note_nav.addEventListener('click', function(){
    delivery_note_section.style.display = 'block'
    service_card_section.style.display = 'none'
    card_vehicle_section.style.display = 'none'

    bars_body_div.style.display = 'none'
}, false)

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
                CarModel : null,
                CarType : null,
                OwnerName : null,
                OwnerAddress : null,
                'Kilometer Run' :'0.0',
                Battery : null,
                Brakes : null,
                CarLights : null,
                WindShields : null,
                TimeForService : null,
                DateForLeaving : null,
                SchedActivity1 : null,
                SchedActivity2 : null,
                SchedActivity3 : null
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

    if(free_occupied == 'FREE' && sched_counter_curr > 0){
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

    if(garage_capacity[previous_click_block.textContent]['CarModel'] !== null){
        car_model_input_garage.value = garage_capacity[previous_click_block.textContent]['CarModel']
    }else{
        car_model_input_garage.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['CarType'] !== null){
        car_type_input_garage.value = garage_capacity[previous_click_block.textContent]['CarType']
    }else{
        car_type_input_garage.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['OwnerName'] !== null){
        owner_name_input_garage.value = garage_capacity[previous_click_block.textContent]['OwnerName']
    }else{
        owner_name_input_garage.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['OwnerAddress'] !== null){
        owner_address_input_garage.value = garage_capacity[previous_click_block.textContent]['OwnerAddress']
    }else{
        owner_address_input_garage.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['TimeForService'] !== null){
        service_time_input.value = garage_capacity[previous_click_block.textContent]['TimeForService']
    }else{
        service_time_input.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['DateForLeaving'] !== null){
        date_leave_input.value = garage_capacity[previous_click_block.textContent]['DateForLeaving']
    }else{
        date_leave_input.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['SchedActivity1'] !== null){
        schedule_acts_1_input.value = garage_capacity[previous_click_block.textContent]['SchedActivity1']
    }else{
        schedule_acts_1_input.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['SchedActivity2'] !== null){
        schedule_acts_2_input.value = garage_capacity[previous_click_block.textContent]['SchedActivity2']
    }else{
        schedule_acts_2_input.value = ""
    }

    if(garage_capacity[previous_click_block.textContent]['SchedActivity3'] !== null){
        schedule_acts_3_input.value = garage_capacity[previous_click_block.textContent]['SchedActivity3']
    }else{
        schedule_acts_3_input.value = ""
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

    logic_info_div.style.pointerEvents = 'none'
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
    if(battery_replace_btn.style.backgroundColor == 'white' && battery_good_btn.style.backgroundColor == 'white'){
        alert("Need to fill up everything")
        return 
    }else if(battery_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Battery'] = true 
    }else if(battery_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Battery'] = false 
    }

    if(brake_replace_btn.style.backgroundColor == 'white' && brake_good_btn.style.backgroundColor == 'white'){
        alert("Need to fill up everything")
        return 
    }else if(brake_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Brakes'] = true 
    }else if(brake_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['Brakes'] = false 
    }

    
    if(light_replace_btn.style.backgroundColor == 'white' && light_good_btn.style.backgroundColor == 'white'){
        alert("Need to fill up everything")
        return 
    }else if(light_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['CarLights'] = true 
    }else if(light_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['CarLights'] = false 
    }

    if(windshield_replace_btn.style.backgroundColor == 'white' && windshield_good_btn.style.backgroundColor == 'white'){
        alert("Need to fill up everything")
        return 
    }else if(windshield_good_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['WindShields'] = true 
    }else if(windshield_replace_btn.style.backgroundColor == 'white'){
        garage_capacity[previous_click_block.textContent]['WindShields'] = false 
    }

    garage_capacity[previous_click_block.textContent]['Availability'] = 'OCCUPIED'
    garage_capacity[previous_click_block.textContent]['Kilometer Run'] = km_run_input_int_val
    garage_capacity[previous_click_block.textContent]['Edit Info Enable'] = true

    var currentDate = new Date();
    var days_add = 4;
    var futureDate = []

    currentDate.setDate(currentDate.getDate() + days_add); 

    var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;
    var y = currentDate.getFullYear();

    for(let i = 0; i < days_add; i++){
        futureDate.push(mm + '/'+ dd + '/'+ y)
        dd -= 1
    }

    garage_capacity[previous_click_block.textContent]['TimeForService'] = "wtf is this"
    garage_capacity[previous_click_block.textContent]['DateForLeaving'] = futureDate[0]
    garage_capacity[previous_click_block.textContent]['SchedActivity1'] = futureDate[3]
    garage_capacity[previous_click_block.textContent]['SchedActivity2'] = futureDate[2]
    garage_capacity[previous_click_block.textContent]['SchedActivity3'] = futureDate[1]

    //km_run_input.value = km_run_input.value + " km"
    km_run_div.style.pointerEvents = 'none'
    spare_parts_div.style.pointerEvents = 'none'
    logic_info_div.style.pointerEvents = 'none'

    finalize_cancel_div.style.display = 'none'
    edit_info_btn.style.display = 'block'

    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 4; j++){
            document.getElementById('garage-space-row' + i + '-col' + j).style.pointerEvents = 'auto'
        }
    }

    let remove_sched = document.getElementById('queue-sched-' + sched_counter)
    remove_sched.remove()

    sched_counter_curr -= 1
    sched_counter -= 1
    if(sched_counter_curr == 0){
        garage_notif.style.display = 'none'
    }
    garage_notif.textContent = sched_counter_curr

    alert("You can now view all the designated dates on the Service Order Card. Just click the navigation bars icon on the left side.")

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
    logic_info_div.style.pointerEvents = 'none'

    // battery_replace_btn.style.backgroundColor = 'white'
    // battery_replace_btn.style.backgroundColor = 'white'

    // brake_replace_btn.style.backgroundColor = 'white'
    // brake_replace_btn.style.backgroundColor = 'white'

    // light_replace_btn.style.backgroundColor = 'white'
    // light_replace_btn.style.backgroundColor = 'white'

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
    logic_info_div.style.pointerEvents = 'none'

    if(answer){
        edit_info_btn.style.display = 'none'
        finalize_cancel_div.style.display = 'block'
    }
},false)
/*****************************************GARAGE*************************************************/
let rotate_day = 1
arrow_left_day.addEventListener('click' , function(){
    console.log(rotate_day)
    if(rotate_day == 0){
        current_day_div.style.width = '25%'
        current_day_div.style.height = '50%'
        current_day_div.style.top = '25%'
        current_day_div.style.left = '38%'

        current_day_div_1.style.width = '10%'
        current_day_div_1.style.height = '20%'
        current_day_div_1.style.top = '40%'
        current_day_div_1.style.left = '65%'

        current_day_div_2.style.width = '10%'
        current_day_div_2.style.height = '20%'
        current_day_div_2.style.top = '40%'
        current_day_div_2.style.left = '78%' 
        
        rotate_day += 1
    }else if(rotate_day == 1){
        current_day_div_1.style.width = '25%'
        current_day_div_1.style.height = '50%'
        current_day_div_1.style.top = '25%'
        current_day_div_1.style.left = '38%'

        current_day_div_2.style.width = '10%'
        current_day_div_2.style.height = '20%'
        current_day_div_2.style.top = '40%'
        current_day_div_2.style.left = '65%'

        current_day_div.style.width = '10%'
        current_day_div.style.height = '20%'
        current_day_div.style.top = '40%'
        current_day_div.style.left = '78%' 
        
        rotate_day += 1
    }else if(rotate_day == 2){
        current_day_div_2.style.width = '25%'
        current_day_div_2.style.height = '50%'
        current_day_div_2.style.top = '25%'
        current_day_div_2.style.left = '38%'

        current_day_div.style.width = '10%'
        current_day_div.style.height = '20%'
        current_day_div.style.top = '40%'
        current_day_div.style.left = '65%'

        current_day_div_1.style.width = '10%'
        current_day_div_1.style.height = '20%'
        current_day_div_1.style.top = '40%'
        current_day_div_1.style.left = '78%'

        rotate_day = 0
    }
    
}, false)

add_new_img.addEventListener('click', function(){
    add_new_div.style.top = '20%'
    add_new_div.style.left = '2%'
    add_new_div.style.width = '25%'
    add_new_div.style.height = '70%'

    add_new_lbl.style.display = 'none'
    add_new_img.style.display = 'none'

    add_new_logic_info.style.display = 'block'
    add_new_btn.style.display = 'block'
    add_new_btn_cancel.style.display = 'block'
}, false)

let new_sched_top_style = 20
let new_sched_top_style_1 = 20
let new_sched_top_style_2 = 20
add_new_btn.addEventListener('click', function(){
    if(car_model_input.value == ""){
        alert("Need to fill up everything")
        return 
    }

    if(car_type_input.value == ""){
        alert("Need to fill up everything")
        return 
    }

    if(owner_name_input.value == ""){
        alert("Need to fill up everything")
        return 
    }

    if(owner_address_input.value == ""){
        alert("Need to fill up everything")
        return 
    }
    let get_day = parseInt(time_to_sched_input.value[time_to_sched_input.value.length - 2] + time_to_sched_input.value[time_to_sched_input.value.length - 1])
    let get_curr_day = new Date()

    if(time_to_sched_input.value == ""){
        alert("Need to fill up everything")
        return 
    }else if(get_day > get_curr_day.getDate() + 2 || get_day < get_curr_day.getDate()){
        alert("Choose only up to 2 days from now :)")
        return
    }

    garage_capacity[garage_block_arr[sched_counter]]['CarModel'] = car_model_input.value
    garage_capacity[garage_block_arr[sched_counter]]['CarType'] = car_type_input.value
    garage_capacity[garage_block_arr[sched_counter]]['OwnerName'] = owner_name_input.value
    garage_capacity[garage_block_arr[sched_counter]]['OwnerAddress'] = owner_address_input.value

    sched_counter += 1

    add_new_div.style.top = '35%'
    add_new_div.style.left = '5%'
    add_new_div.style.width = '15%'
    add_new_div.style.height = '30%'

    add_new_lbl.style.display = 'block'
    add_new_img.style.display = 'block'

    add_new_logic_info.style.display = 'none'
    add_new_btn.style.display = 'none'
    add_new_btn_cancel.style.display = 'none'

    if(get_day == get_curr_day.getDate()){
        let block = document.createElement('label')
    
        block.className = 'queue-sched'
        block.id = 'queue-sched-' + sched_counter
        block.textContent = garage_block_arr[sched_counter - 1] + " | " + owner_name_input.value
        current_day_div.appendChild(block)
        document.getElementById('queue-sched-' + sched_counter).style.top = new_sched_top_style + '%'
        new_sched_top_style += 15
        sched_counter_curr += 1

        garage_notif.style.display = 'block'
        garage_notif.textContent = sched_counter_curr
    }

    if(get_day == get_curr_day.getDate() + 1){
        let block = document.createElement('label')
    
        block.className = 'queue-sched'
        block.id = 'queue-sched-' + sched_counter
        block.textContent = garage_block_arr[sched_counter - 1] + " | " + owner_name_input.value
        current_day_div_1.appendChild(block)
        document.getElementById('queue-sched-' + sched_counter).style.top = new_sched_top_style_1 + '%'
        new_sched_top_style_1 += 15
    }

    if(get_day == get_curr_day.getDate() + 2){
        let block = document.createElement('label')
    
        block.className = 'queue-sched'
        block.id = 'queue-sched-' + sched_counter
        block.textContent = garage_block_arr[sched_counter - 1] + " | " + owner_name_input.value
        current_day_div_2.appendChild(block)
        document.getElementById('queue-sched-' + sched_counter).style.top = new_sched_top_style_2 + '%'
        new_sched_top_style_2 += 15
    }


    car_model_input.value = null
    car_type_input.value = null
    owner_name_input.value = null
    owner_address_input.value = null

}, false)

add_new_btn_cancel.addEventListener('click', function(){
    add_new_div.style.top = '35%'
    add_new_div.style.left = '5%'
    add_new_div.style.width = '15%'
    add_new_div.style.height = '30%'

    add_new_lbl.style.display = 'block'
    add_new_img.style.display = 'block'

    add_new_logic_info.style.display = 'none'
    add_new_btn.style.display = 'none'
    add_new_btn_cancel.style.display = 'none'
}, false)

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

    if(garage_notif.style.display == 'block'){
        alert('You can now occupy one slot on your garage.')
    }

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
    closeSchedule()
}, false)

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
    closeSchedule()
}, false)

about_h2.addEventListener('click', function(){
    indexTransitionShow()

    closeGarage()
    closeSchedule()
}, false)

schedule_h2.addEventListener('click', function(){
    indexTransitionShow()
    schedule_main.style.zIndex = '1'
    schedule_main.style.visibility = 'visible'

    schedule_body.style.opacity = '1'
    schedule_body.style.left = "0"

    let currentDate = new Date();
    let box_1_date = new Date();
    let box_2_date = new Date();

    box_1_date.setDate(box_1_date.getDate() + 1); 
    box_2_date.setDate(box_2_date.getDate() + 2); 

    var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;
    var y = currentDate.getFullYear();

    var dd_1 = box_1_date.getDate();
    var mm_1 = box_1_date.getMonth() + 1;
    var y_1 = box_1_date.getFullYear();

    var dd_2 = box_2_date.getDate();
    var mm_2 = box_2_date.getMonth() + 1;
    var y_2 = box_2_date.getFullYear();

    current_day_div_lbl.textContent = y + '/'+ mm + '/'+ dd
    current_day_div_lbl_1.textContent = y_1 + '/'+ mm_1 + '/'+ dd_1
    current_day_div_lbl_2.textContent = y_2 + '/'+ mm_2 + '/'+ dd_2

    closeGarage()
}, false)

function closeSchedule(){
    schedule_main.style.zIndex = '-1'
    schedule_main.style.visibility = 'hidden'

    schedule_body.style.opacity = '0'
    schedule_body.style.left = "-100%"

}

unknown_h2.addEventListener('click', function(){
    indexTransitionShow()
    closeSchedule()
    closeGarage()
}, false)