/*slide carousel*/
$('document').ready(function(){


  var clickno=33.75;
  $('.slide-type-button').click(function(){
if(clickno<168){
  $('.image-box').css("transform", "translateY(-"+clickno+"vw)");
clickno+=33.75;
   }
else {
  $('.image-box').css("transform", "translateY(+"+0+"vw)");
  clickno=33.75;
}
});
});
