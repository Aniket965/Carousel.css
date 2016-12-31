/*slide carousel*/
$('document').ready(function(){
var i=2;
setInterval(function(){
setclass(i);
}, 3000);
$('div:nth-child(1)').addClass('fade-up');
$('.slide-type-button').click(function(){
setclass(i);
});
function setclass(j){
  if(j===2){
    $('div:nth-child(2)').addClass('fade-up');
   $('div:nth-child(1').removeClass('fade-up');
   i=i+1;
  }
  else if(j===3){
    $('div:nth-child(3)').addClass('fade-up');
   $('div:nth-child(2)').removeClass('fade-up');
   i=i+1;
  }
  else if(j===4){
    $('div:nth-child(4)').addClass('fade-up');
   $('div:nth-child(3)').removeClass('fade-up');
   i=i+1;
  }
  else if(j===5){
    $('div:nth-child(5)').addClass('fade-up');
   $('div:nth-child(4)').removeClass('fade-up');
   i=i+1;
  }
  else{
    $('div:nth-child(1)').addClass('fade-up');
   $('div:nth-child(5)').removeClass('fade-up');
  i=2;
  }
}
});
