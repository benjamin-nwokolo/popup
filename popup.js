const btnClick =  document.querySelector('#btn');
const modal = document.querySelector('.modal')
btnClick.addEventListener('click', function (e) 
{
    e.preventDefault();
    modal.style.display = 'block';
})
const close = document.querySelector('.close')
close.addEventListener('click',function () {
    modal.style.display ='none';
})
btnClick.addEventListener('dblclick' ,function (e) {
    e.preventDefault();
    modal.style.display = "none";
})