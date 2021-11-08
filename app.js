function add(num1, num2) {
    return num1 + num2;
}

function findByName(names, user) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].name === user) {
            return names[i];
        }
    }
    return null;
}

module.exports = {
    add: add,
    findByName: findByName,
}