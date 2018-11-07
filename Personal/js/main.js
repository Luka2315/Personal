$(document).ready(function(){
    
    $('#description img').fadeIn(2000);
    
    $('#msg').keyup(function(){
    $('.word-counter').text($.trim(this.value.length)+'/500');
})
});