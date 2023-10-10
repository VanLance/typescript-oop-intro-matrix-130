interface Human {
  firstName: string
  lastName: string
  zip?: number
}

type Post = {
  title: string
  body: string
}

interface User extends Human {
  posts: Post[]
  lastPost: Date
}

const user: User = {
  firstName : 'sean',
  lastName : 'currie',
  posts: [{
    title: 'TS OOP',
    body: 'How was my Mario OOP lecture?'
  },{
    title: 'TS OOP2',
    body: 'It was great?'
  },
],
  lastPost: new Date()
}

/* 
Design a flexible OOP system to describe characters in a RPG game

There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms.

- Orges - fights with club and defends with shield
- Peons - fights with club and defends with shield
- Knights - fights with a Sword and defends with Armor
- Archer - fights with Bow and Arrow and has only is tunic to protect them

- All Characters can collect gold and this will always be the same for every new type of character

At the end of this each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club

<b>Hint: </b> To complete this assignment you will need multiple classes and interfaces and an Abstract class

You can use our [Final koopa Walkthrough] example as a guide 
*/