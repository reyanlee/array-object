/*1*/ var myPenguin = {name:"Peso", origin:"Octonauts", notes:"The Octonauts' ship's medic"};

/*2*/ console.log("Hello, I'm a penguin and my name is " + myPenguin.name + "!");

/*3*/ myPenguin.canFly = false;

/*4*/ myPenguin.chirp = function() {
	return "CHIRP CHIRP! Is this what penguins sound like?";
};
chirp = myPenguin.chirp();
console.log(chirp);

/*5*/ myPenguin.sayHello = function() {
	return "Hello, I'm a penguin and my name is " + this.name + "!";
};

/*6*/ console.log(myPenguin.sayHello());

/*7*/ myPenguin.name = "Penguin McPenguinFace";
console.log(myPenguin.sayHello());

/*8*/ myPenguin.fly = function() {
	if (this.canFly === true) {
		return "I can fly!";
	} else {
		return "No flying for me!";
	}
};

/*9*/ console.log(myPenguin.fly());

/*10*/ myPenguin.canFly = true;

/*11*/ console.log(myPenguin.fly());

/*12*/ var i;
for (i in myPenguin) {
	console.log(i);
};

/*13*/ var x;
for (x in myPenguin) {
	console.log(myPenguin[x]);
};