function convertSuhu(){
	var c,f,hasil,pil;
	x=document.temperatur.temp.value;
	Number(x);
	for(var i=0;i<document.temperatur.pilihan.length;i++){
		if(document.temperatur.pilihan[i].checked==true){
			tempType=document.temperatur.pilihan[i].value;
			break;
		}
	}
	if(tempType=='fahrenheit'){
		hasil=9/5*x+32;
	}
	else if(tempType=='reamur'){
		hasil=4/5*x;
	}
	else if(tempType=='rtoc'){
		hasil=5/4*x;
	}
	else{
		hasil=(x-32)*5/9;
	}
	document.temperatur.resultfield.value=hasil;
}