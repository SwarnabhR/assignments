const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const cleanedData = data.replace(/\s+/g, ' ').trim()
    fs.writeFile('test.txt', cleanedData, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(cleanedData);
    });
})