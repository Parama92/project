const fs = require("fs").promises;

async function writeReview(content) {
  try {
    // File path
    const filePath = "reviewDump.txt";

    // Write to file
    await fs.appendFile(filePath, content);

    console.log("Text has been written to", filePath);
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

module.exports = {
  writeReview,
};
