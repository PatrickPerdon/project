let circle = document.querySelector('.circle');

circle.addEventListener('mouseover', function() {
    circle.classList.add('hover')
});

circle.addEventListener('mouseleave', function() {
    circle.classList.remove('hover')
});

let circle_2 = document.querySelector('.circle-2');

circle_2.addEventListener('mouseover', function() {
    circle_2.classList.add('hover_2')
});

circle_2.addEventListener('mouseleave', function() 
{
    circle_2.classList.remove('hover_2')
});

