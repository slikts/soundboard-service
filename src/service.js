const play = require("./play");

const service = () => {
  process.stdin.on("readable", () => {
    const chunk = process.stdin.read();

    if (!chunk) {
      return;
    }

    const { action, payload } = JSON.parse(chunk);

    if (action === "play") {
      play(payload);
    } else {
      throw Error("Unknown action");
    }
  });
};

module.exports = service;
