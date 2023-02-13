// enhanced object literals

function newUser (user, age, country, uId) {
    return {
        user: user,
        age: age,
        country: country,
        id: uId,
    }
}

console.log(newUser("vitomanjm", 22, "Vzla", 1));