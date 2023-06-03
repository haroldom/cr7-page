const info_btn = document.querySelector('.main-section-btn')
const nav_items = document.querySelectorAll('.nav-item')
const sections = document.querySelectorAll('.section');

console.log(window.innerHeight)

function checkSectionVisibility() {
    // console.log(sections[1].getBoundingClientRect())
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // console.log(section.id+ ': ' + rect)
        if(rect.top <= 60 && rect.top >= -(rect.height-60)){
            console.log(section.id)
            nav_items.forEach(nav_item=>{
                if(nav_item.innerText.toLowerCase()==section.id.toLowerCase()){
                    nav_item.children[0].classList.add('active');
                } else{
                    nav_item.children[0].classList.remove('active');
                }
            })
        }
    });
}


nav_items.forEach(nav_item => {
    nav_item.addEventListener('click', () => {
        nav_items.forEach(item => item.children[0].classList.remove('active'));
        nav_item.children[0].classList.add('active');
    })
})
info_btn.addEventListener('click', () => {
    window.location.href = "./index.html#sobre él";
})

window.addEventListener('scroll', checkSectionVisibility);
