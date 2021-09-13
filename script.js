'use strict';


const panels=document.querySelectorAll('.panel');
//const container=document.querySelector('.container');

function removeclass(){
	panels.forEach(panel =>{
		panel.classList.remove('active');
});
}


 panels.forEach(panel =>{
	panel.addEventListener('click',()=>{
		removeclass();
		panel.classList.add('active');
	});
}); 

/*
 container.addEventListener('click',(e)=>{
	console.log('clicked');
	console.log(e.target.parentElement.children);
	/* [...e.target.parentElement.children].forEach(panel=>
	{
		panel.classList.remove('active');
	});
	e.target.classList.add('active'); 
}); */


 
