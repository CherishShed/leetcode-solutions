// // Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// //  Definition for singly-linked list.
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   if (head?.val === null) return null;
//   if (head?.val === val) {
//     return removeElements(head.next, val);
//   }
//   return head!.next;
//   // head.filter((value) => {
//   //   return value === val;
//   // });
// }

// [1, 2, 6, 3, 4, 5, 6].map((value) => {});
// removeElements();
