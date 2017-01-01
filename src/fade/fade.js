/*fade carousel*/
$('document').ready(function(){
var length =$('div.image-box').length;
$('div:nth-child(1)').addClass('fade-up');
var current=$('div.fade-up');
var next;
var i=1;
setInterval(function(){
setclass();
}, 3000);
$('.slide-button').click(function(){
setclass();
});


function setclass(){
  
    if(i!=length){
    current=$('div.fade-up');
    next = current.next();
    next.addClass('fade-up');
    current.removeClass('fade-up');
    i+=1;
 
  }
  else{
    $('div.image-box').removeClass('fade-up');
    $('div.image-box').first().addClass('fade-up');
    i=1;
    
  }

}
});

