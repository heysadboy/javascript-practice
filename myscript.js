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

const set_text = (text) => {
    document.getElementById("output").innerHTML = text;
};

const call_back = (print_name, text) => {
    print_name(text);
};