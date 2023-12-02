class hero{
  constructor(name, age, type, atackpower){
    this.name = name
    this.age = age
    this.type = type
    this.atackpower = atackpower
  }
 

  atack(){
    console.log(`${this.name} tem ${this.age}, é ${this.type} e atacou usando ${this.atackpower}`)
  }
}

let primeiroHeroi = new hero("zelda", "16 anos", "mago", "magia")
let segundoHeroi = new hero("lara", "20 anos", "guerreira", "arco")
let terceiroHeroi = new hero("Aloy", "22 anos", "monge", "artes marciais")
let quartoHeroi = new hero("Sasuke", "24 anos", "ninja", "shuriken")


primeiroHeroi.atack()
segundoHeroi.atack()
terceiroHeroi.atack()
quartoHeroi.atack()