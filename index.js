	//repeatedMultiplication will make sure we do not repeat the same numbers again and again
	let repeatedMultiplication=new Array(30);
	var repeatedMultiplicationCount=0;
	for(var i=0;i<31;++i){
		repeatedMultiplication[i]=new Array(10);
		for(var j=0;j<10;++j){
			repeatedMultiplication[i][j]=false;
		}
	}

	let repeatedSquare=[];
	var repeatedSquareCount=0;
	for(var i=0;i<31;++i){
		repeatedSquare[i]=false;
	}

	let repeatedCube=[];
	var repeatedCubeCount=0;
	for(var i=0;i<31;++i){
		repeatedCube[i]=false;
	}

	var a,b;
	function generate(){
		a=0;
		b=0;
		while(a<12||a==20||a==30){
			a= Math.round((Math.random()*100)%30);
		}
		while(b==0){
			b= Math.round((Math.random()*100)%10);
		}
		while(repeatedMultiplication[a][b]==true){
			generate();
		}
		document.getElementById('num1').innerHTML=a;
		document.getElementById('num2').innerHTML=b;
		document.getElementById('num3').innerHTML="A*B";
		repeatedMultiplication[a][b]=true;
		repeatedMultiplicationCount=repeatedMultiplicationCount+1;
		if(repeatedMultiplicationCount>=300){
			alert("The number of multiplication is complete and further will only repeat");
		}
	}
	function multiply(){
		document.getElementById('num3').innerHTML=a*b;
	}
	var c;
	function generateSquare(){
		c=0;
		while(c<12||c==20||c==30||c==40||repeatedSquare[c]==true){
			c= Math.round((Math.random()*100)%40);
		}
		document.getElementById('num4').innerHTML=c;
		document.getElementById('num5').innerHTML="A*A";
		repeatedSquare[c]=true;
		repeatedSquareCount=repeatedSquareCount+1;	
		if(repeatedSquareCount>40){
			alert("The number of squares is complete and further will only repeat");
		}
	}
	function squareOfNumber(){
		document.getElementById('num5').innerHTML=c*c;	
	}
	var d;
	function generateCube(){
		d=0;
		while(repeatedCube[d]==true){
			d= Math.round((Math.random()*100)%30);
		}
		document.getElementById('num6').innerHTML=d;
		document.getElementById('num7').innerHTML="A*A*A";	
		repeatedCube[d]=true;
		repeatedCubeCount=repeatedCubeCount+1;
		if(repeatedCubeCount>30){
			alert("The number of squares is complete and further will only repeat");
		}
	}
	function cubeOfNumber(){
		document.getElementById('num7').innerHTML=d*d*d;	
	}