const animal = {
    type: "bear",
    name: "pooh",
    getType: function() {
        return this.type;
    }
}

const getType = animal.getType;
console.log(getType());

const getBoundType = getType.bind(animal);
console.log(getBoundType());