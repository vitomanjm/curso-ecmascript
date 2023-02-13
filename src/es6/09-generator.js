function iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['vicktor', 'david', 'Pandis', 'Wee']);

console.log(it.next().value);

//

function* getId() {
    var b = 0;
    while (b < 10) {
      
      b++;
      var id = [b];
      yield id;
}
}

const id = getId()

console.log(id.next().value)

