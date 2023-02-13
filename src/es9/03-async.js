async function* anotherGenerator(){
    yield  Promise.resolve(1);
    yield  Promise.resolve(2);
    yield  Promise.resolve(3);

}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

async function arraysOfNames(array) {
    for await (let value of array)
    {
        console.log(value);
    }
}

const names = arraysOfNames(['Best program ever', 'Practice is the key', 'You should know better', 'Sure, you think this is going to be easy'])