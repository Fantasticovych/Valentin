const btnYes=document.querySelector('.cat__btn-yes');
const btnNo=document.querySelector('.cat__btn-no');
let audio = new Audio('./audio/oke.mp3');
let audio2 = new Audio('./audio/no.mp3');
let count=0;
btnYes.addEventListener('click',function(){
   audio2.pause();
   count=0;
   document.querySelector(".cat__title").textContent="I love you my valentine";
   document.querySelector(".cat__gif").src='./img/love.gif'
   audio.play();
});

btnNo.addEventListener('click',function(){   
   audio.pause();
   count++;

   switch (count) {
      case 1:
         audio2.play();
         document.querySelector(".cat__title").textContent="Are you serious?";
         document.querySelector(".cat__gif").src='./img/serious.gif'
         btnYes.style.width = "250px";
         btnNo.style.width = "150px";
         break;

      case 2:
         document.querySelector(".cat__title").textContent="giving a last chance!";
         document.querySelector(".cat__gif").src='./img/last.gif'
         btnYes.style.width = "300px";
         btnNo.style.width = "100px";

         break;

      case 3:
         document.querySelector(".cat__title").textContent="you're mine !";
         document.querySelector(".cat__gif").src='./img/angry.gif'
         btnYes.style.width = "500px";
         btnNo.style.display='none';
         count=0;
         break;

   }
});