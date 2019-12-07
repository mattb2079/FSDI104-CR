class Character{
    constructor(name, energy, id){
        this.name = name;
        this.energy = energy;
        this.id = id;
    }
    display = function(){
        document.getElementById(this.id).innerHTML = `<p> Name: ${this.name} </p> <p> Energy: ${this.energy}</p>`;
    }

    attack = function(opponent, item){
        if(opponent.energy > 0 && this.energy > 0){

            let newEnergy = opponent.energy - item.iHitPoints;
            opponent.energy = newEnergy;
            opponent.display();
            document.getElementById("console").innerHTML = `<p> ${this.name} is attacking ${opponent.name} with a ${item.iName }</p> ${item.img}`;
            console.log(opponent);

            if (opponent.energy <= 0){
                document.getElementById(opponent.id).innerHTML = `<p> You died </>`;
                document.getElementById("console").innerHTML = `<p> ${opponent.name} was killed! ${this.name} wins! GAME OVER`;
            }
        }
    }
}

const character1 = new Character("Yoshi", 100, "c1");
const character2 = new Character("Toad", 100, "c2");

character1.display();
character2.display();

class Item{
    constructor(iName, iHitPoints, img){
        this.iName = iName;
        this.iHitPoints = iHitPoints;
        this.img = img;
    }
}

const item1 = new Item("Goomba", 20, "<img class = 'imgItem' src = 'img/goomba.png'>");
const item2 = new Item("Banana", 5, "<img class = 'imgItem' src = 'img/banana.png'>");
const item3 = new Item("Green Shell", 10, "<img class = 'imgItem' src = 'img/green-shell.png'>");

const items = [item1, item2, item3];

function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}

// reset function --- global

const reset = function(){
    character1.energy = 100;
    character2.energy = 100;
    character1.display();
    character2.display();
    document.getElementById("console").innerHTML = `<p></p>`;
}