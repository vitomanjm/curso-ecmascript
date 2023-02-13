// the sign # makes a function private  
// when adding it at the beggining of a function´s name

class user {
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }


#speak() // the speak function is now private
{
    return 'Hello';
}

greeting()
{
    return `${this.speak()} ${this.name}`;
}

get #uAge() //the getter uAge function is now private
{
    return this.age;
}

set #uAge(n)
{   //the setter uAge function is now private
    this.age = n;
}

ages = () => {
    return this.#uAge;
}

}

const bebeloper1 = new user('David', 15);

console.log(bebeloper1.ages());
console.log(bebeloper1.uAge = 20);