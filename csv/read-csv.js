const fs = require('fs');

const process_data = (data) => {
    let lines = data.split('\n');
    let headers = lines[0].split(';');
    let result = [];

    for (let i = 1; i < lines.length; i++) {
        let line = lines[i].split(';');
        if (line != '') {
            let result_item = {};
            for (let j = 0; j < line.length; j++) {
                result_item[headers[j]] = line[j];
            }
            result.push(result_item);
        }
    }

    return result;
};

const read_csv = () => {
    fs.readFile('authors.csv', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        csv_data = process_data(data);
        console.log(csv_data);
    })
};

read_csv();