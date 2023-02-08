const main = document.querySelector('main');
window.addEventListener('load', () => {
    
    function setScaleUp(){
        main.style.transform = 'scale(1)';
    }
    
    setTimeout(setScaleUp, 300);
});

main.style.transform = 'scale(.6)';

let manualTheme = undefined;

const header = {

    innerContainer: document.querySelector('.switch-theme__inner-container'),

    toggleSwitch: document.querySelector('.switch-theme__toggle-switch'),

    theme: undefined,
    // Automatic detection
    detectTheme: function(){
        let detectTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        this.theme = detectTheme;
    },
    // Automatic setting of theme
    changeToggle: function(){
        if(this.theme === 'dark'){
           this.toggleSwitch.style.left = '32px';
        }
    }
}
header.detectTheme();
header.changeToggle();

const cards = {
    card: document.querySelectorAll('.card'),
    cardHover: document.querySelectorAll('.card:hover'),
    heading: document.querySelectorAll('.card__title'),
    p: document.querySelectorAll('.card__text'),

}

let loopEventHandler = [header.innerContainer, header.toggleSwitch];

loopEventHandler.forEach(element => {
    
    element.addEventListener('click', function() {
        console.log('hi');
        if(header.theme === 'dark' || manualTheme === 'dark'){

            cards.card.forEach(function(card){
                card.classList.add('dark__theme--background');
                card.classList.remove('active');
            });
        
            cards.heading.forEach(function(headingColor){
                headingColor.classList.add('dark__theme--text');
            });
        
            cards.p.forEach(function(cardText){
                cardText.classList.add('dark__theme--text');
            });
        } else {
            cards.card.forEach(function(card){
                card.classList.remove('dark__theme--background');
                card.classList.add('active');
            });
        
            cards.heading.forEach(function(headingColor){
                headingColor.classList.remove('dark__theme--text');
            });
        
            cards.p.forEach(function(cardText){
                cardText.classList.remove('dark__theme--text');
            });
        }
    });
});

// provides a manual control for theme and stops automatic control from overriding

header.innerContainer.addEventListener('click', () => {

    delete header.theme;

    if(header.toggleSwitch.style.left === '3px'){
        header.toggleSwitch.style.left = '32px';
        manualTheme = 'dark';
    } else {
        header.toggleSwitch.style.left = '3px';
        manualTheme = 'light';
    }
});