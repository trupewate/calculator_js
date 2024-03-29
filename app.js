(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn.btn-grey, .btn.btn-yellow');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value
        })
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            console.log(screen.value)
            let answer = eval(screen.value);
            console.log(answer)
            screen.value = answer;
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
    })

})();