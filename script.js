alert("salom, hush kelibsiz");

var pulMiqdori = parseInt(prompt('qancha pulingiz bor').trim( ));

console.log("pulingiz " + pulMiqdori);
var paragraph = document.createElement("p");
document.body.append(paragraph);

if(pulMiqdori >= 100){
  console.log("marhamat telefon sizniki");
  paragraph.textContent = "sotib olishingiz mumkin";
}else{
  console.log("sizda pul miqdori yetarli emas!");
  paragraph.textContent = "sotib ola olmaysiz";
}