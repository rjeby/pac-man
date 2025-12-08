export type ListNode<T> = Node<T> | null;

class Node<T> {
  value: T;
  next: ListNode<T>;

  constructor(value: T, next: ListNode<T>) {
    this.value = value;
    this.next = next;
  }
}

export class Queue<T> {
  head: ListNode<T>;
  tail: ListNode<T>;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  shift() {
    if (!this.head) {
      throw new Error("Shifting Empty Queue");
    }
    this.length--;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    this.head = this.head.next;
  }

  push(value: T) {
    const tl = new Node(value, null);
    this.length++;
    if (!this.tail) {
      this.head = tl;
      this.tail = tl;
      return;
    }
    this.tail.next = tl;
    this.tail = tl;
  }

  getFront() {
    if (!this.head) {
      throw new Error("Empty Queue");
    }
    return this.head.value;
  }
}
