


function adult() {

event.preventDefault();
const alter =document.getElementById("alter").value;
const result=document.getElementById("result");

if (alter >= 30){
    result.innerHTML = "du bist schon kapput rauh wann du willst"
}

 else if (alter >=20){

    result.innerHTML = "du kannst normal Shisha Rauchen, aber nicht jeden tag";
}

 else if( alter >=18){
    result.innerHTML="ja, du kannst Shisha rauchen aber ganz venig du bist noch jung";
}
else{
    result.innerHTML = "Du darfst noch nicht Shisha rauchen";
}

}


