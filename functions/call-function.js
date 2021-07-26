const animal = {
    name: 'emily',
    type: 'poodle',
    info: function () {
        console.log(`${this.name} is a ${this.type}`)
    }
}

const dog = {
    type: 'bulldog',
    name: 'gustav'
}

const canary = {
    type: 'canary',
    name: 'tweety'
}

function bird(sound) {
    console.log(`${this.name} is a ${this.type} and she ${sound}`);
}

animal.info();
animal.info.call(dog);
bird.call(canary, 'chirps');
