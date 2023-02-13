const anotherFunction = () => {
    return new Promise((resolved, reject) => {
        if(true) {
            resolved('Hello');
        } 
        else {
            reject('Didnt work');
        }
    } )
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));