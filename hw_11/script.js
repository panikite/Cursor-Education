window.addEventListener('DOMContentLoaded', function() {

    let jedy = document.getElementById('jedy_button'),
        l1 = document.getElementById('l1'),
        l2 = document.getElementById('l2'),
        l3 = document.getElementById('l3');


    jedy.addEventListener('click', function() {
       l1.classList.toggle('l1_active');
       l2.classList.toggle('l2_active');
       l3.classList.toggle('l3_active');
    });
   
});


