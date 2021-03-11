# Woven Finance Backend Assessment

## Instructions

**TASK 1: `(has-word.js)`**

Your input is an array containing unsorted words. Suggest an efficient solution for implementing hasWord(word) which receives a word and returns true if it is in the array and false otherwise. You are not allowed to use JS Objects (maps) in your solution but can use Arrays. Solution time complexity is more important than its space complexity.

**TASK 2: `(linked-list.js)`**

Implement preceding value in a LinkedList — Your function should receive a value and returns the preceding value in the linked list.

**TASK 3: `(/server-planner)`**

#### Server Planner Service

Write an API that calculates the server hardware for a data-center (to host virtual machines).
Your API should return the number of servers that are required to host a non-empty collection of virtual machines.

This means you should implement the following operation (in UML definition): +calculate(serverType: Server, virtualMachines: VirtualMachine[1..*]): int
All servers are of the same type.

This type defines the hardware resources each server provides: CPU, RAM, HDD.
Each virtual machine is defined by the virtual hardware resources it needs (on a server): CPU, RAM, HDD.
The algorithm for the virtual machine distribution should implement a 'first fit' strategy.

This means there is no resource optimization or 'look back': Virtual machines are always allocated on the current or the next server (in case of limited resources).
If a virtual machine is too 'big' for a new server, skip it.

---

Example:

    - Server type = {CPU: 2, RAM: 32, HDD: 100}

    - Virtual Machines = [{CPU: 1, RAM: 16, HDD: 10}, {CPU: 1, RAM: 16, HDD: 10}, {CPU: 2, RAM: 32, HDD: 100}]

    - Result = 2

## How to run 🚀

**Test 1:**

```shell
node has-word.js
```

**Test 2:**

```shell
node linked-list.js
```

**Test 3:**

```shell
cd server-planner
```
```shell
npm install
npm run start
```

If you're using Docker,
```shell
docker-compose up --build
```

The server will run on port 3001. To test, send a POST request to http://localhost:3001.

If the request has no payload, the application will use the default virtual machines and server type data.

The default server type depends on your machine's resources (CPU and RAM). HDD remains 100.

You can also send a custom payload along with the POST request in this format:

```json
{
  "serverType": { "CPU": 2, "RAM": 32, "HDD": 100},
  "virtualMachines": [
    { "CPU": 1, "RAM": 16, "HDD": 10 },
    { "CPU": 1, "RAM": 16, "HDD": 10 },
    { "CPU": 2, "RAM": 32, "HDD": 100 }
  ]
}
```
