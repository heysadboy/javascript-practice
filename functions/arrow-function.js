function test1() {
    console.log(this);
}

const test2 = () => {
    console.log(this);
}

test1();
test2();