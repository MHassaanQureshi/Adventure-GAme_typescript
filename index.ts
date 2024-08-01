#! /usr/bin/env node
import inquirer from "inquirer";

console.log("WELCOME TO ADVENTURE GAME")

class playerName {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease(){
        let health = this.health - 25
        this.health = health
    }
    healthIncrease(){
        this.health = + 100
    }
}

class opponentName{
    name: string;
    health: number = 100;
    static select: string;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease(){
        let health = this.health - 25
        this.health = health
    }
}

let player_Name = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter character",
        
    }
])
console.log(player_Name.name)
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your opponent",
        choices: ["Skeleton", "Assassin" , "Zombie"]
    }
])

let p1 = new playerName(player_Name.name)
let o1 = new opponentName(opponent.select)

do{
    if (opponent.select == "Skeleton"){
         let move = await inquirer.prompt([
        {
            type: "list",
            name: "opt",
            message: "Select your opponent",
            choices: ["Attack", "Drink Portion" , "Run For Your Life...!"]
        }
    ]);
    if(move.opt == "Attack"){
       let num = Math.floor(Math.random() * 2)
       if (num > 0){
        p1.healthDecrease()
        console.log(`${p1.name} fuel is ${p1.health}`)
        console.log(`${o1.name} fuel is ${o1.health}`)
    
        if(p1.health <= 0){
            console.log("You Loose Better Luck Next Time....!");
            process.exit()
    }
       }
       if(num <= 0){
        o1.healthDecrease()
        console.log(`${p1.name} fuel is ${p1.health}`)
        console.log(`${o1.name} fuel is ${o1.health}`)
        if(o1.health <= 0){
            console.log("You Win...!")
            process.exit()
        
    }
       }
    
    }
    if(move.opt == "Drink Portion"){
        p1.healthIncrease()
        console.log(`Your Drink Health Portion Your Fuel is ${p1.health} `)
    
    }
    if(move.opt == "Run For Your Life...!"){
        console.log("You Loose Better Luck Next Time");
        process.exit()
    }}

    //Assassain
    if (opponent.select == "Assassin"){
        let move = await inquirer.prompt([
       {
           type: "list",
           name: "opt",
           message: "Select your opponent",
           choices: ["Attack", "Drink Portion" , "Run For Your Life...!"]
       }
    ]);
    if(move.opt == "Attack"){
      let num = Math.floor(Math.random() * 2)
      if (num > 0){
       p1.healthDecrease()
       console.log(`${p1.name} fuel is ${p1.health}`)
       console.log(`${o1.name} fuel is ${o1.health}`)
    
       if(p1.health<= 0){
           console.log("You Loose Better Luck Next Time....!");
           process.exit()
    }
      }
      if(num <= 0){
       o1.healthDecrease()
       console.log(`${p1.name} fuel is ${p1.health}`)
       console.log(`${o1.name} fuel is ${o1.health}`)
       if(o1.health<= 0){
           console.log("You Win...!")
           process.exit()
       
    }
      }
    
    }
    if(move.opt == "Drink Portion"){
       p1.healthIncrease()
       console.log(`Your Drink Health Portion Your Fuel is ${p1.health} `)
    
    }
    if(move.opt == "Run For Your Life...!"){
       console.log("You Loose Better Luck Next Time");
       process.exit()
    }}

   //Zombie
   if (opponent.select == "Zombie"){
    let move = await inquirer.prompt([
   {
       type: "list",
       name: "opt",
       message: "Select your opponent",
       choices: ["Attack", "Drink Portion" , "Run For Your Life...!"]
   }
]);
if(move.opt == "Attack"){
  let num = Math.floor(Math.random() * 2)
  if (num > 0){
   p1.healthDecrease()
   console.log(`${p1.name} fuel is ${p1.health}`)
   console.log(`${o1.name} fuel is ${o1.health}`)

   if(p1.health <= 0){
       console.log("You Loose Better Luck Next Time....!");
       process.exit()
}
  }
  if(num <= 0){
   o1.healthDecrease()
   console.log(`${p1.name} fuel is ${p1.health}`)
   console.log(`${o1.name} fuel is ${o1.health}`)
   if(o1.health <= 0){
       console.log("You Win...!")
       process.exit()
   
}
  }

}
if(move.opt == "Drink Portion"){
   p1.healthIncrease()
   console.log(`Your Drink Health Portion Your Fuel is ${p1.health} `)

}
if(move.opt == "Run For Your Life...!"){
   console.log("You Loose Better Luck Next Time");
   process.exit()
}}

}
 while(true)