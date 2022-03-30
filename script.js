'use strict';
let bt1=document.querySelector('.bt');
bt1.addEventListener('click',function(){
	document.getElementById('choose').style.display='flex';
	bt1.style.display='none';
});
let qw=[];
let an=[];

let fn = function(mass,x){
	for (let key in mass){
	x.push(mass[key]);
}
}
fn(objAn,an);
fn(objQw,qw);

let male=document.querySelector('.male');
male.addEventListener('click',function(){
	document.getElementById('choose').style.display='none';
	document.querySelector('.section1').style.display='block';
	let counter=0;
let a=0;
let b=0;
let c=0;
let lb=document.querySelectorAll('.lb');
let sp=document.querySelector('.sp');
let imp=document.querySelectorAll('.q');
let finalResult=document.querySelector('.result');
let submit1=document.querySelector('.submit');



let p=document.querySelector('.p1');
let next1=document.querySelector('.next');
sp.textContent=`${counter+1}/${qw.length}`;


next1.addEventListener('click',function(){

	document.querySelector('.p1').textContent=qw[counter];
	
	for(let i=0;i<an[counter].length;i++){
    lb[i].textContent=an[counter][i];

    if (imp[i].checked){
    	if('a'===imp[i].value){
            a++;
    	}
    	if('b'===imp[i].value){
    		b++;
    	}
    	 if('c'===imp[i].value){
    		c++;
    	}
    }

	}
	counter++;
	

sp.textContent=`${counter+1}/30`;

for(let t=0; t<imp.length;t++){
imp[t].checked=false;
}

if (counter==qw.length-1){
	next1.textContent = "Результат";
}
else if (counter==qw.length){
	document.querySelector('.section2').style.display='block';

    const time=1000;
    const step=1;
    let menFinal=a*15+b*5-c*5;
    let menres=Math.round(100-((menFinal*100)/180));
    if (menFinal<=180){
    function outNum(num,elem){
	let e=document.querySelector('#res');
	let n=0;
	let t=Math.round(time/(num/step));
	let interval = setInterval(()=>{
		n=n+step;
		if(n==num){
			clearInterval(interval);
		}
e.textContent=`У вас на: ${n}% мужской склад ума.`;
document.querySelector('.points').textContent=`Вы набрали: ${menFinal} пунктов`;
document.querySelector('.description').textContent='Преимущественно мужской склад ума обычно зарабатывает себе меньше 150 пунктов. Чем ближе к 0, тем более вероятен высокий уровень тестостерона. Такие люди обладают сильной логикой, аналитическими способностями и красноречием. Чем ближе они к 0, тем лучше они предсказывают стоимость, тем более точные выводы делают на основании статистических данных и почти полностью свободны от влияния эмоций на выводы.'

	},t);
	
	
};
outNum(menres,'#res');
}
else {
	function outNum(num,elem){
	let e=document.querySelector('#res');
	let n=0;
	let t=Math.round(time/(num/step));
	let interval = setInterval(()=>{
		n=n+step;
		if(n==num){
			clearInterval(interval);
		}
     e.textContent=`ОЙ, похоже у вас женский склад ума, вы набрали: ${n}`;
     document.querySelector('.description').textContent='Чем больше пунктов выше 180 у мужчины, тем больше вероятность проявления гомосексуальных наклонностей.'
	},t);
	
	
};
outNum(menFinal,'#res');
};
sp.classList.add('active');
next1.classList.add('active');
document.querySelector('.bt3').classList.add('dsb');
document.querySelector('.section1').style.display='none';;
document.querySelector('.again').style.display='block';

}



})
});
let female=document.querySelector('.female');
female.addEventListener('click',function(){
	document.getElementById('choose').style.display='none';
	document.querySelector('.section1').style.display='block';
	let counter=0;
let a=0;
let b=0;
let c=0;
let lb=document.querySelectorAll('.lb');
let sp=document.querySelector('.sp');
let imp=document.querySelectorAll('.q');
let finalResult=document.querySelector('.result');
let submit1=document.querySelector('.submit');



let p=document.querySelector('.p1');
let next1=document.querySelector('.next');
sp.textContent=`${counter+1}/${qw.length}`;

next1.addEventListener('click',function(){

	document.querySelector('.p1').textContent=qw[counter];
	
	for(let i=0;i<an[counter].length;i++){
    lb[i].textContent=an[counter][i];
    if (imp[i].checked){
    	if('a'===imp[i].value){
            a++;
    	}
    	if('b'===imp[i].value){
    		b++;
    	}
    	 if('c'===imp[i].value){
    		c++;
    	}

    }

	}
	counter++;

sp.textContent=`${counter+1}/30`;

for(let t=0; t<imp.length;t++){
imp[t].checked=false;
}

if (counter==qw.length-1){
	next1.textContent = "Результат";
}
else if (counter==qw.length){
	document.querySelector('.section2').style.display='block';
const time=1000;
const step=1;
let feFiRe=a*10+b*5-c*5;
if (feFiRe>=150){
let feres=Math.round((((feFiRe-150))/150)*100)
function outNum(num,elem){
	let e=document.querySelector('#res');
	let n=0;
	let t=Math.round(time/(num/step));
	let interval = setInterval(()=>{
		n=n+step;
		if(n==num){
			clearInterval(interval);
		}
e.textContent=`У вас на: ${n}% женский склад ума.`;
document.querySelector('.points').textContent=`Вы набрали: ${feFiRe} пунктов`;
document.querySelector('.description').style.fontSize='17px'
document.querySelector('.description').textContent='Преимущественно женский склад ума зарабатывает от 150 до 300 пунктов. Чем ближе к 300, тем больше женского в программе мозга, тем больше вероятность проявления неординарных творческих, артистических, музыкальных способностей. Такие люди принимают решения, основываясь на интуиции, на внутренних немотивированных ощущениях, и хорошо выявляют наличия проблем, когда имеется минимум данных. Они хорошо справляются с проблемами, требующими решения, основанного на творческих способностях и интуиции.'

	},t);
	
};
outNum(feres,'#res');
}
else {
	function outNum(num,elem){
	let e=document.querySelector('#res');
	let n=0;
	let t=Math.round(time/(num/step));
	let interval = setInterval(()=>{
		n=n+step;
		if(n==num){
			clearInterval(interval);
		}
     e.textContent=`ОЙ, похоже у вас мужской склад ума, вы набрали: ${n} пунктов`;
     document.querySelector('.description').textContent='Чем меньше количество пунктов у женщины, тем выше вероятность проявления лесбийских наклонностей. Чисто женский ум набирает более 180 пунктов'
	},t);
	
	
};
outNum(feFiRe,'#res');
};

sp.classList.add('active');
next1.classList.add('active');
document.querySelector('.bt3').classList.add('dsb');
document.querySelector('.section1').style.display='none';
document.querySelector('.again').style.display='block';

}



})
})


