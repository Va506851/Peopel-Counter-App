const Countel = document.getElementById('count-el');
const Incrementbtn = document.getElementById('Incrementbtn');
const Savebtn = document.getElementById('Savebtn');
const Savetext = document.querySelector('.Previous-enteries')
 let count = 0;
Incrementbtn.addEventListener('click',()=>{
      count += 1
      Countel.textContent = count
 
})
Savebtn.addEventListener('click',()=>{
     
      let text1 = count +  " - " ;
      Savetext.textContent += text1;
     
      Countel.textContent = 0
      count = 0;
      Savetext.classList.add("Previous-enteries")

})