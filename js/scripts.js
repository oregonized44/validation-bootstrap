

var wednesday = function(){

  var input = $("#q1-ans").val().toUpperCase();
  if(input === "YES"){
    $("#q1").removeClass("has-error").addClass("has-success");
  }else{
    $("#q1").addClass("has-error");
  }

}
var addition = function(){
  var input = $("#q2-ans").val().toUpperCase();
  if(input === "YES"){
    $("#q2").removeClass("has-error has-warning").addClass("has-success");
  }else if(input === "NO"){
    $("#q2").removeClass("has-success has-warning").addClass("has-error");
  }else{
    $("#q2").removeClass("has-error has-success").addClass("has-warning");
  }

}
var coding = function(){
  var input = $("input:radio[name=coding]:checked").val();
  console.log(input);
  if(input === "1"){
    $("#q3").removeClass("has-error has-warning").addClass("has-success");
  }else if(input === "0"){
    $("#q3").removeClass("has-success has-warning").addClass("has-error");
  }else{
    $("#q3").removeClass("has-success has-error").addClass("has-warning");
  }



}
$(document).ready(function(){
  $(".btn").click(function(){
    console.log("function working");
    wednesday();
    console.log("made it");
    addition();
    coding();
  });
});
