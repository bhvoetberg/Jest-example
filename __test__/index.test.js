
// test('Check of dit werkt', () =>{
//     console.log("Ik wordt getest");
//
// })
function add(num1, num2) {
    return num1 + num2;
}


test('The add function adds two numbers and returns the sum.', () => {
    //Arrange
    const number1 = 5;
    const number2 = 7;

    //Act
    const sum = add(number1, number2);

    //Assert
    expect(sum).toBe(12);

})

function findByName(names, user) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].name === user) {
            return names[i];
        }
    }
    return null;
}


test('findByName will return object from array for specified name. ', () => {
    //Arrange
    const userNames = [
        {name: "Piet", id:1},
        {name: "Klaas", id:2},
        {name: "Henk", id:3}
    ];

    const userToFind = "Klaas";

    //Act
    const result = findByName(userNames, userToFind);

    //Assert
    expect(result).toEqual({name: "Klaas", id: 2});
})

test('findByName will return 0 if user is not found. ', () => {
    //Arrange
    const userNames = [
        {name: "Piet", id:1},
        {name: "Klaas", id:2},
        {name: "Henk", id:3}
    ];

    const userToFind = "Beppie";

    //Act
    const result = findByName(userNames, userToFind);

    //Assert
    expect(result).toBeNull();
})
