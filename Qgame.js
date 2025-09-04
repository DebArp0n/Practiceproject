const button = document.querySelectorAll('.button');
const body = document.querySelector("body");

button.forEach(function(button){
    button.addEventListener('click',function(ev){
        if(ev.target.id === 'grey'){
            body.style.backgroundColor = ev.target.id;

        }
        if(ev.target.id === 'white'){
            body.style.backgroundColor = ev.target.id;

        }
        if(ev.target.id === 'blue'){
            body.style.backgroundColor = ev.target.id;

        }
        if(ev.target.id === 'yellow'){
            body.style.backgroundColor = ev.target.id;

        }

    })

})