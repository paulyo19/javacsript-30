const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 100;               //100px

function shadow(e){
    const { offsetWidth: width, offsetHeight: height} = hero;
    let { offsetX: x, offsetY: y } = e;
    
    if(this !== e.target){
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2))
    const yWalk = Math.round((y / height * walk) - (walk / 2))   //this means that the walk is 100 so 50 is as high is what we should go and -50 is how low we should go

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`
}

hero.addEventListener('mousemove', shadow)