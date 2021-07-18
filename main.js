document.querySelector("button").addEventListener("click",function(){
	let inp1=document.querySelector("input").value;
	let screen=document.querySelector(".imageScreen");
	screen.innerHTML=``;
	let url=`https://dog.ceo/api/breed/${inp1}/images/random`;
	pushToDOM(url);
})

function pushToDOM(url){
	var dogCall=new XMLHttpRequest();
	dogCall.open("GET",url);
	dogCall.send(); 
	dogCall.addEventListener("load",function(event){
	// console.log(event);
	let data=event.target.response;
	let response=JSON.parse(data);
	// console.log(response);

	if (response.status==="success"){
		let screen=document.querySelector(".imageScreen");
		screen.innerHTML=`<img src=${response.message}>`;
	}

    else{
    	let screen=document.querySelector(".imageScreen");
    	screen.innerHTML=`<h2>Please enter correct breed name</h2>`
    }
	})
}

// let inp2=document.querySelector("input");
// inp2.addEventListener("keyup",function(event){
// 	let inp1=document.querySelector("input").value;
// 	if(event.which===13){
// 		let url=`https://dog.ceo/api/breed/${inp1}/images/random`;
// 		pushToDOM(url);		
// 	}
// })
