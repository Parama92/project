const fs = require("fs").promises;
const { fetchNextBatch } = require("../services/stackshare");
const { delayInMillis } = require("../utils");

async function dumpCompaniesUsingSlack(cursor) {
  const batch = await fetchNextBatch(cursor);
  const { companyStacksUsing } = batch.data.tool;
  const { pageInfo, edges } = companyStacksUsing;
  const { hasNextPage, endCursor } = pageInfo;

  try {
    // File path
    const filePath = "stackDump.json";

    // Write to file
    await fs.appendFile(filePath, JSON.stringify(edges));

    console.log("Text has been written to", filePath);
  } catch (err) {
    console.error("Error writing to file:", err);
  }

  console.log({ hasNextPage, endCursor });
  if (hasNextPage && endCursor) {
    await delayInMillis(5000);
    dumpCompaniesUsingSlack(endCursor);
  } else {
    console.log(hasNextPage && endCursor);
  }
}

module.exports = { dumpCompaniesUsingSlack };
