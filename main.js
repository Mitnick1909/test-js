/*
function multiplication(a,b){
     return a*b
}
alert(multiplication(3,5))
*/
/*
let container=document.getElementById('container')
let bouton=document.getElementById('bouton')
bouton.addEventListener('click',function(){
    container.style.backgroundColor='green'
})
*/
/* afficher si le nombre est paire ou pas */
/*
function isEven(Mynombre){
    return Mynombre % 2===0
}
let nombre=12
if(isEven(nombre)){
    console.log('Le nombre '+ nombre + ' est paire')
}

else{
  console.log('le nombre '+ nombre + ' est impaire ')
}
*/

/* Afficher les nombre de 1 à 10 */

/* bouce while
let i=0
while(i<10){
    console.log(i)
    i+=1
}

*/
/* boucle for 
for(let i=0; i<6 ; i+=1){
    console.log(i)
}
*/
/* afficher les jours de la semaine */
let jours_semaine=['lundi','mardi','mercredi','jeudi', 'vendredi', 'samedi','dimanche']
let index=0
let longueur=jours_semaine.length
while(index<longueur){
    console.log(jours_semaine[index])
    index+=1
}