/*slide carousel*/
$('document').ready(function(){


  var clickno=33.75;
  
var n =$('.image-box').length;
var max = n*33.75;
console.log(n);
  setInterval(function(){
setclass(clickno);
  	  },3000);
  $('.slide-button').click(function(){
setclass(clickno);
});
function setclass(clickno1){if(clickno1<max){
  $('.image-box').css("transform", "translateY(-"+clickno1+"vw)");
clickno+=33.75;
   }
else {
  $('.image-box').css("transform", "translateY(+"+0+"vw)");
  clickno=33.75;
}}

});
