// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.
//  Definition for singly-linked list.
class myListNode {
  val: number;
  next: myListNode | null;
  constructor(val?: number, next?: myListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: myListNode | null): boolean {
  if (!head) return false;
  let current = head;
  let count = 0;
  while (current && count < 10000) {
    if (!current.next) {
      return false;
    }
    current = current.next;
    count++;
  }
  return true;
}
