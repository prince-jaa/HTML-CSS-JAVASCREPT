var nam = document.querySelector("button");
var istatus = document.querySelector("h5");

var switchs = 0;
nam.addEventListener("click",function(){
        if(switchs == 0){
        nam.innerHTML = "Remove Friends";
        nam.style.backgroundColor = "cyan"
        istatus.innerHTML = "Friends";
        istatus.style.color = "green"
        switchs = 1;
        }
        else{
            nam.innerHTML = "Add friends";
            istatus.innerHTML = "Strangers";
            istatus.style.color = "red"
            nam.style.backgroundColor = "gray"

            switchs = 0;
        }
})