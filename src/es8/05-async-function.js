const fnAsync = () => {

    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('ASync!!'), 2000)
        : reject(new Error('Error'));
        

    })
}



const anotherFn = async () => {
    const algo = await fnAsync();
    console.log(algo);
    console.log('Hello World');
    console.log('Hello World');
}

console.log('Before');
anotherFn();
console.log('After');

////////////////


let lista = []

function generador(Arry) {
    let numsRam = 0;
    while (numsRam < 10)
    {
    numsRam ++;
    let nums = numsRam
    
    console.log(nums)

    }

}

generador(lista)