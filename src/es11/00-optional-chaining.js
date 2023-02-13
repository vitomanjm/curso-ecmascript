const users = {
    vmjm: {
        country: 'VZLA',
        age: 23,
        role: 'Student',
    },

    mari: {
        country: 'CO',
        age: 22,
        role: 'Brit on the beach',
    },

    tom: {
        country: 'USA',
        age: 18,      
    }
}

console.log(users.mari.role)

console.log(users?.tom?.role)