function newUser(name, age, country) {

    var name = name || 'Vicktor';
    var age = age || '22';
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

function newAdmin(name = 'Manuel', age = 22, country = 'Venezuela') 
{
console.log(name, age, country); 
}

newAdmin();
newAdmin('Ana', 28, 'Peru' );



