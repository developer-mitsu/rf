import $ from 'jquery'

$(function(){
    $('#openMenuBtn').on('click', function() {
        $('#toggleMenu').addClass('active')
        $('html, body').css({
            overflow: 'hidden'
        })
        $(window).on('touchmove.noScroll', function(e) {
            e.preventDefault();
        });
    })
    
    $('#closeMenuBtn').on('click', function() {
        $('#toggleMenu').removeClass('active')
        $('html, body').css({
            overflow: 'visible'
        })
        $(window).off('.noScroll')
    })
})


// // A
// function toggleIsDone() {
//     // ...
// }

// // B
// toggleIsDone()

// // C
// () => {
//     toggleIsDone()
// }



var users = [
    'aaa',
    'ddd',
    'ccc'
]

var user = users[1] //user = 'bbb'

user = 'ddd' //user = 'ddd'

users[1] = user

