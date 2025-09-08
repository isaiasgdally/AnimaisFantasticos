// NAVEGAÇÃO POR TAB
function tabNav(){
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');


if(tabMenu.length && tabContent.length){
function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
};

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    });
});
};
};
tabNav();

//ACCORDION LIST
function accordionNav(){


const accordionList = document.querySelectorAll('.js-accordion dt');
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');

if(accordionList.length){

function activeAccordion(){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
};
    
accordionList.forEach((item) =>{
    item.addEventListener('click', activeAccordion);
})
};
};
accordionNav();