alert("salom, hush kelibsiz");

var yourAge = parseInt(prompt("yoshingizni kiriting!").trim());
console.log('yoshingiz ' + yourAge);
var paragraph = document.createElement("p");
document.body.append(paragraph);

if(yourAge >= 16){
  console.log("marhamat ishtirok etishingiz mumkin");
  paragraph.textContent = "ishtirok etishingiz mumkin";
}else{
  console.log("ishtirok eta olmaysiz");
  paragraph.textContent = "ishtirok eta olmaysiz";
}