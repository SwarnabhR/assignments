const fs = require('fs');

const cleanFile = (filePath) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading the file");
            return;
        }
        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanedContent, "utf-8", (err) => {
            if (err) {
                console.error("Error writing the file: ", err);
                return;
            }
            console.log("File cleaned successfully.");
        })
    })
}

const filePath = "beyza.txt";
cleanFile(filePath);