const sun = document.getElementById('sun');
const smallBalloon = document.getElementById('balloon-small');
const clouds = document.getElementById('clouds');
const bigBalloon = document.getElementById('big-balloon');


const scroll = () => {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        sun.style.transform = `translateY(${value * 0.15}px)`;
        smallBalloon.style.transform = `translate(${-value * 0.1}px, ${value * 0.4}px)`;
        clouds.style.transform = `translateX(${value * 0.3}px)`;
        bigBalloon.style.transform = `translate(${-value * 0.3}px, ${-value * 0.15}px)`;
        console.log(value)

    })
}

scroll();

