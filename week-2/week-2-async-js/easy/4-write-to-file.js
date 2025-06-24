const fs = require('fs').promises;

async function writeToFile(filename, content) {
    try {
        await fs.writeFile(filename, content, "utf-8");
        console.log("File has been written successfully");
    } catch (error) {
        console.error("Error writing the file: ", error);
    }
}

writeToFile("beyza.txt", "I love her");