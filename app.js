let myForm = document.getElementById('my-form');

let form = {
    str1: 'hello',
    num1: 69,
    alertfunc: function(){
        alert('From form object.');
    }
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    form.alertfunc();
})


console.log(myForm);
