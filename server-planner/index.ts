import http from "http";
import os from "os";
import { StringDecoder } from "string_decoder";
import { Server } from "./interfaces/server";

// const serverType: Server = { CPU: 2, RAM: 32, HDD: 100 };

const port = process.env.PORT || 3000;

const defaults: {
  virtualMachines: Server[];
  serverType: Server;
} = {
  virtualMachines: [
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 2, RAM: 32, HDD: 100 },
  ],
  serverType: Object.freeze({
    CPU: os.cpus().length,
    RAM: os.totalmem() / 1024 / 1024 / 1024,
    HDD: 100,
  }),
};

function calculate(serverType: Server, virtualMachines: Server[]) {
  let count = 0;
  let server = { ...serverType };

  virtualMachines.forEach((vm) => {
    if (server.CPU >= vm.CPU && server.RAM >= vm.RAM && server.HDD >= vm.HDD) {
      server.CPU -= vm.CPU;
      server.RAM -= vm.RAM;
      server.HDD -= vm.HDD;

      count++;
    }
  });

  return count;
}

const server = http.createServer((req, res) => {
  const method = req.method?.toUpperCase();
  const decoder = new StringDecoder("utf-8");
  let buffer = "";

  req.on("data", (data) => (buffer += decoder.write(data)));
  req.on("end", () => {
    buffer += decoder.end();
    const payload: {
      serverType: Server;
      virtualMachines: Server[];
    } = JSON.parse(buffer);

    switch (method) {
      case "POST":
        const serverType = payload.serverType || defaults.serverType;
        const virtualMachines =
          payload.virtualMachines || defaults.virtualMachines;
        const serversRequired = calculate(serverType, virtualMachines);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(
          JSON.stringify({ serversRequired, virtualMachines, serverType })
        );

      default:
        res.end();
    }
  });
});

server.listen(port, () => console.log(`Server started on port ${port}`));

["exit", "SIGUSR1", "SIGUSR2", "SIGINT"].forEach((signal) =>
  process.on(signal, () => {
    server.close();
  })
);
