class Animal {
	constructor(species){
		this.species = species;
	}
	eat() {
		console.log("Nom Nom Nom!");
	}
	speak() {
		console.log(<Animal.species> "makes a sound");
	}
}


class Dog extends Animal{
  constructor(name){
    this.name = name;
    this.species = "Dog";
  }
  
}