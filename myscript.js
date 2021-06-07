const timeout_test = () => {
    document.getElementById("choice").innerHTML = "Timeout Test";
    document.getElementById("action").innerHTML = "<b>Hello!</b> will appear after 3 seconds!";
    const text = "Hello!";
    setTimeout(set_text, 3000, text);
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