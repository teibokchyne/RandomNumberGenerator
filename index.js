	//repeatedMultiplication will make sure we do not repeat the same numbers again and again

	let repeatedMultiplication = [];
	for(let i=0;i<31;++i){
		repeatedMultiplication[i]=0;
	}

	let repeatedSquare= [] ;
	let repeatedSquareCount=0;
	for(let i=0;i<31;++i){
		repeatedSquare[i]=false;
	}

	let repeatedCube=[];
	let repeatedCubeCount=0;
	for(let i=0;i<31;++i){
		repeatedCube[i]=false;
	}
	//Multiplication upto 30
	let a,b;
	try{
		function generate(){
			
			let count=30;
			while(--count){
				a= Math.round((Math.random()*100)%30);
				repeatedMultiplication[a]++;
				if(repeatedMultiplication[a]<10){
					break;
				}
			}
			if(count==0){
				alert("The number of is complete and further will only repeat\nRefresh page please");
			}
			while(true){
				b= Math.round((Math.random()*100)%10);
				if(b!=0){
					break;
				}
			}
			document.getElementById('num1').innerHTML=a;
			document.getElementById('num2').innerHTML=b;
			document.getElementById('num3').innerHTML="A*B";
			
		}
	}
	catch( e ){
		alert("Refresh page please");
	}
	function multiply(){
		document.getElementById('num3').innerHTML=a*b;
	}

	//Generate square
	let c=0;
	try{
		function generateSquare(){
			if(repeatedSquareCount>40){
				alert("The number of squares is complete and further will only repeat\nRefresh page please");
			}
			
			c= Math.round((Math.random()*100)%40);
			document.getElementById('num4').innerHTML=c;
			document.getElementById('num5').innerHTML="A*A";
			if(repeatedSquare[c]==false){
				repeatedSquare[c]=true;
					
			}else{
				repeatedSquareCount=repeatedSquareCount+1;
			}
		}
	}
	catch( e ){
		alert("Refresh page please");
	}
	function squareOfNumber(){
		document.getElementById('num5').innerHTML=c*c;	
	}
	//Generate cubes
	var d;
	try{
		function generateCube(){
			if(repeatedCubeCount>30){
				alert("The number of squares is complete and further will only repeat\nRefresh page please");
			}
			d=1;
			while(repeatedCube[d]==true){
				d= Math.round((Math.random()*100)%30);
			}
			document.getElementById('num6').innerHTML=d;
			document.getElementById('num7').innerHTML="A*A*A";	
			repeatedCube[d]=true;
			repeatedCubeCount=repeatedCubeCount+1;

		}
	}
	catch( e ){
		alert("Refresh page please");
	}
	function cubeOfNumber(){
		document.getElementById('num7').innerHTML=d*d*d;	
	}
	