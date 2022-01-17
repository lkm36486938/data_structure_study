class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // pointer
  }
}

LinkedList.prototype.insertAtBeginning = function(data) {
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  return this.head;
};

LinkedList.prototype.insertAtEnd = function(data) {
  let newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  }

  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

LinkedList.prototype.getAt = function(index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
};

LinkedList.prototype.insertAt = function(data, index) {
  if (!this.head) {
    this.head = new Node(data);
    return;
  }

  if (index === 0) {
    this.head = new Node(data, this.head);
  }

  const previous = this.getAt(index - 1);
  let newNode = new Node(data);
  newNode.next = previous.next;
  previous.next = newNode;
  return this.head;
};

LinkedList.prototype.deleteFirstNode = function() {
  if (!this.head) {
    return;
  }

  this.head = this.head.next;
  return this.head;
};

LinkedList.prototype.deleteLastNode = function() {
  if (!this.head) return null;

  if (!this.head.next) {
    this.head = null;
    return;
  }

  let previous = this.head;
  let tail = this.head.next;
  while (tail.next !== null) {
    previous = tail;
    tail = tail.next;
  }

  previous.next = null;
  return this.head;
};

LinkedList.prototype.deleteAt = function(index) {
  if (!this.head) return;

  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  const previous = this.getAt(index - 1);
  if (!previous || !previous.next) {
    return;
  }

  previous.next = previous.next.next;
  return this.head;
};

LinkedList.prototype.deleteList = function() {
  this.head = null;
};
