const elem= document.getElementsByTagName("img");
for(let i=0; i<elem.length;i++){
    if(i%2==0){
        elem[i].classList.add("even")
    } else{
        elem[i].classList.add("odd")
    }
}