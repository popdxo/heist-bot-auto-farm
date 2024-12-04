const { spawn } = require("child_process");

function autoBegStart() {
  const autoBeg = spawn("node", ["autoBeg.js"]);
  autoBeg.stdout.on("data", (data) => {
    console.log(`AutoBeg: ${data}`);
  });
  autoBeg.on("error", (error) => {
    console.log(`AutoBeg error: ${error.message} (report this error: 1)`);
  });
  autoBeg.stderr.on("data", (data) => {
    setTimeout(autoBegStart, 10 * 1000);
    console.error(
      `AutoBeg stderr: ${data} (error: 2 please help me fix this error)`,
    );
    console.log("Restarting autoBeg in 10 seconds");
  });
  autoBeg.on("close", (code) => {
    console.log(
      `AutoBeg process exited with code: ${code} (report this error: 3)`,
    );
  });
}

function autoWorkStart() {
  const autoWork = spawn("node", ["autoWork.js"]);
  autoWork.stdout.on("data", (data) => {
    console.log(`AutoWork: ${data}`);
  });
  autoWork.on("error", (error) => {
    console.log(`AutoWork error: ${error.message} (report this error: 1)`);
    console.log("Restarting autoWork in 10 seconds");
  });
  autoWork.stderr.on("data", (data) => {
    setTimeout(autoWorkStart, 10 * 1000);
    console.error(
      `AutoWork stderr: ${data} (error: 2 please help me fix this error)`,
    );
    console.log("Restarting autoWork in 10 seconds");
  });
  autoWork.on("close", (code) => {
    console.log(
      `AutoWork process exited with code: ${code} (report this error: 3)`,
    );
  });
}

autoBegStart();
autoWorkStart();
