/**
 * Implement preceding value in a LinkedList
 * Your function should receive a value and returns the preceding value in the linked list.
 */

class LinkedList {
  constructor() {
    this.head = null;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.prototype.insert = function (value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  let end = this.head;
  while (end.next !== null) {
    end = end.next;
  }

  end.next = newNode;
  return this.head;
};

LinkedList.prototype.getPrecedingValue = function (value) {
  let node = this.head;

  while (node) {
    if (node.value === value) {
      return node.next?.value || null;
    }
    node = node.next;
  }

  return null;
};

const list = new LinkedList();

list.insert(2);
list.insert(3);
list.insert(4);

console.log(list.getPrecedingValue(3));
