const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal); 

const openbtn = function () {
    modal.classList.remove('hidden');   //classList have many prop
    overlay.classList.remove('hidden');
}


for (let i = 0; i < btnsOpenModal.length; i++) {
    // console.log(btnsOpenModal[i].textContent);  // we get three text contents for all three buttons
    btnsOpenModal[i].addEventListener('click', openbtn);
}

// instead of making two same functions individually at btnCloseModal and overlay we can simply make a function

const closebtn = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closebtn);

overlay.addEventListener('click', closebtn);

// to back when we enter esc
// keyboard event also called global event 

// 3-types of addEventListener Keyboard events
// 1. keyup -> triggered when key is released
// 2. keydown -> triggered when key is pressed down
// 3. keypress -> triggered when key is pressed and released
document.addEventListener('keydown',function(e){
    // console.log(e.key);   // select the key we pressed
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        closebtn();
        
    }
});