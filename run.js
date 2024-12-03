const { spawn } = require("child_process");

const autoBeg = spawn("node", ["autoBeg.js"]);
const autoWork = spawn("node", ["autoWork.js"]);

function startAutoBeg() {
  autoBeg.stdout.on("data", (data) => console.log(`:${data}`));
}
function startAutoWork() {
  autoWork.stdout.on("data", (data) => console.log(`:${data}`));
}
