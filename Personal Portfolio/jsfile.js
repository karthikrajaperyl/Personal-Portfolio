const sections=document.querySelectorAll('section');
const navli=document.querySelectorAll('nav  .navbar-nav li ');

window.addEventListener('scroll',function(){
	let current='' ;	
	for(var j=0;j<sections.length;j++){
		const sectionHeight=sections[j].clientHeight;
		
		if(pageYOffset>=sectionHeight){
			current=sections[j].getAttribute('id');
		}
	}
    console.log(current);
	
		
	
	for(var i=0;i<navli.length;i++){
		console.log(1);
	if(navli[i]===current){
		navli.add('active');
	}
	}
});