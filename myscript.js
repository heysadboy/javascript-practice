const timeout_test = () => {
    document.getElementById("choice").innerHTML = "Timeout Test";
    document.getElementById("action").innerHTML = "<b>Hello!</b> will appear after 3 seconds!";
    const text = "Hello!";
    setTimeout(set_text, 3000, text);

    test();
};

const callback_test = () => {
    document.getElementById("choice").innerHTML = "Callback Test";
    document.getElementById("action").innerHTML = "Name will appear after 3 seconds!";
    let name = prompt("Enter you name");
    const print_name = (text) => {
        document.getElementById("output").innerHTML = text;
    }
    setTimeout(call_back, 3000, print_name, name)
};

const promise_test = () => {
    document.getElementById("choice").innerHTML = "Promise Test";
    document.getElementById("action").innerHTML = "Testing promise";

    const promise = new Promise((resolve, reject) => {
        resolve("Promise is resolved!")
        setTimeout(() => {
            reject("Error after 3 seconds")
        }, 3000);
    });

    promise.then(
        text => {
            set_text(text);
        },
        error => {
            set_text(error);
        }
    ).catch(
        error => {
            set_text(error);
        }
    )
};

const async_promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Async Promise test") }, 4000);
});

const async_await_test = async () => {
    document.getElementById("choice").innerHTML = "Async/Await Test";
    document.getElementById("action").innerHTML = "Text will appear after 4 seconds!";
    let result = await async_promise;
    set_text(result);
};

const setinterval_test = () => {
    document.getElementById("choice").innerHTML = "Set Interval Test";
    document.getElementById("action").innerHTML = "Countdown from 5 to 1";

    let count = 5;
    const countdown = () => {
        set_text(count);
        count -= 1;
        if (count === -1) {
            set_text("Hurray!")
            clearInterval(interval);
        }
    };
    let interval = setInterval(countdown, 1000);
};

const set_text = (text) => {
    document.getElementById("output").innerHTML = text;
};

const set_error = () => {
    document.getElementById("output").innerHTML = "Error!";
};

const call_back = (print_name, text) => {
    print_name(text);
};

const process_data = (data) => {
    let lines = data.split('\n');
    let headers = lines[0].split(';');
    let result = [];

    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].split(';');
        let result_item = {};
        for (let j = 0; j < line.length; j++) {
            result_item[headers[j]] = line[j];
        }
        result.push(result_item);
    }

    return result;
};

const read_csv = () => {
    fetch('authors.csv')
        .then(data => data.text())
        .then(response => console.log(process_data(response)));
};

const test = () => {
    let A = [
        "done",
        "enod",
        "chunli",
        "ilnuhc",
        "oden"
    ]

    let map = new Map();

    for (let i in A) {
        temp = [...A[i]].sort().join("");
        if (!map.has(temp)) {
            map.set(temp, A[i]);
        }
    }
    let ans = [];
    for (let value of map.values()) {
        ans.push(value)
    }

    console.log(ans);
};



