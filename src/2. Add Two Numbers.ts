// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  let sumList: ListNode = new ListNode(l1?.val + l2?.val, null);
  let currentNode1 = l1.next;
  let currentNode2 = l2.next;
  let carry = 0;
  while (currentNode1?.next || currentNode2?.next) {
    let node1 = 0;
    let node2 = 0;
    if (currentNode1) {
      node1 = currentNode1?.val;
      currentNode1 = currentNode1?.next;
    }
    if (currentNode2) {
      node2 = currentNode2?.val;
      currentNode2 = currentNode2?.next;
    }
    let current = sumList;

    while (current?.next) {
      current = current.next;
    }
    let sum = node1 + node2 + carry;
    if (sum > 9) {
      carry = Math.floor(sum / 10);

      sum = sum % 10;
    }
    current!.next = new ListNode(sum, null);
  }
  return sumList;
}
