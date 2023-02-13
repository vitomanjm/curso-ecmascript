const anotherFunction = () => {
    return new Promise((resolved, reject) => {
        if(false) {
            resolved('Hello');
        } 
        else {
            reject('Didnt work');
        }
    } )
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'))