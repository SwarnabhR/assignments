const fs = require('fs');

fs.readFile('something.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

for (let i = 0; i < 100000; i++) {
    console.log(i);
}