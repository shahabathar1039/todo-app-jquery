$('.fa-plus').on('click', function() {
    $('input').fadeToggle(200);
    $('input').val('');
});

$('ul').on('click', 'li', function() {
    $(this).toggleClass('done-todo')
})

$('input').on('keypress', function(e) {
    if(e.which === 13) {
        value = $(this).val();
        $('ul').append('<li>' + value + '<span><i class="fa fa-trash" aria-hidden="true"></i></span></li>');
        $('input').val('');
    };
});

$('ul').on('click', 'span', function(e) {
    e.stopPropagation();
    $(this).parent().fadeToggle(200);
})