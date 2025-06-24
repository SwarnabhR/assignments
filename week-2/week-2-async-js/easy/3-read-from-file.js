const fs = require('fs');
fs.readFile("beyza.txt", "utf-8", (err, data) => {
    if (err) {
        if (err.code === "ENOENT") {
            console.error("Error! File not found");
        } else {
            console.error("Error reading the file: ", err);
        }
        return;
    }
    console.log("File Content: ", data);
});

const expensiveOperation = () => {
        let sum = 0;
        for (let i = 0; i < 1000000000; i++){
                sum += i;
            }
    console.log("Expensive operation done!");
}
expensiveOperation();

console.log("End of the operation!");