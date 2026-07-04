const eventDate = new Date("July 26, 2026 18:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+" Days "+
hours+" Hours "+
minutes+" Minutes "+
seconds+" Seconds";

if(distance<0){

clearInterval(timer);

document.getElementById("countdown").innerHTML =
"🎉 The Celebration Has Started! 🎉";

}

},1000);

document.getElementById("rsvp").onclick=function(){

    alert(
`Thank you!

We hope to celebrate Crista's
18th Birthday with you.

See you on
July 26, 2026 ❤️`
    );

}