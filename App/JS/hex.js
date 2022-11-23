const toggle = document.querySelector('.toggle');
const toggleBox = document.querySelector('.toggle-box')
const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');
const toHome = document.querySelector('.to-home');
const direction = document.querySelector('.direction');

lightMode.addEventListener('click',()=>{
    toggle.style.left = '60%';
    toggle.style.backgroundColor ='#1D1F23';
    toggleBox.style.borderColor = '#1D1F23';
    document.body.style.backgroundImage = 'linear-gradient(135deg,#d2dce7,#d5dff1)';
    document.body.style.color = "#1D1F23"
    toHome.style.color = '#1D1F23';
    direction.style.backgroundColor = '#1D1F23';
})

darkMode.addEventListener('click',()=>{
    toggle.style.left = '12%';
    toggle.style.backgroundColor = '#d5dff1';
    toggleBox.style.borderColor = '#d5dff1';
    document.body.style.backgroundImage = 'linear-gradient(135deg,#2F3439,#1D1F23)';
    document.body.style.color = '#d5dff1';
    toHome.style.color = '#d5dff1';
    direction.style.backgroundColor = '#d5dff1';
    
})


