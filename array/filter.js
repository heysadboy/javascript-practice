const members = [
    {
        id: 1,
        age: 24,
        name: "Tom"
    },
    {
        id: 2,
        age: 29,
        name: "Harry"
    },
    {
        id: 3,
        age: 30,
        name: "Jane"
    },
    {
        id: 4,
        age: 12,
        name: "Ben"
    },
    {
        id: 5,
        age: 35,
        name: "Gwen"
    },
    {
        id: 6,
        age: 21,
        name: "Stan"
    },

]

var filteredMembers = members.filter((member) => {
    if (member.age > 24) {
        return true;
    }
});

console.log(filteredMembers);