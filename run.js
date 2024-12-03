const { spawn } = require("child_process");

function autoBegStart() {
  const autoBeg = spawn("node", ["autoBeg.js"]);
  autoBeg.stdout.on("data", (data) => {
    console.log(`AutoBeg: ${data}`);
  });
  autoBeg.on("error", (error) => {
    console.log(`AutoBeg error: ${error.message}`);
    setTimeout(autoBegStart(), 10 * 1000);
  });
}

function autoWorkStart() {
  const autoWork = spawn("node", ["autoWork.js"]);
  autoWork.stdout.on("data", (data) => {
    console.log(`AutoWork: ${data}`);
  });
  autoWork.on("error", (error) => {
    console.log(`AutoWork error: ${error.message}`);
    setTimeout(autoWorkStart(), 10 * 1000);
  });
}

autoBegStart();
autoWorkStart();
