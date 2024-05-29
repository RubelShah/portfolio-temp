const sections = document.querySelectorAll('.section');
const controlBox = document.querySelectorAll('.control-box');
const controlBtn = document.querySelectorAll('.control');
const Body = document.querySelector('.main-content');

controlBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        const idvalue = this.dataset.id;
        const activeId = document.getElementById(idvalue);
        console.log(idvalue);
        for(element of controlBtn){
            if(element.classList.contains('active-btn')){
                element.classList.remove('active-btn')
            };
        };
        this.classList.add('active-btn');

        for(element of sections){
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
        activeId.classList.add('active');
    });

    
});

//
const ThemBtn = document.getElementById('them-btn');
ThemBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('light-mode');
})