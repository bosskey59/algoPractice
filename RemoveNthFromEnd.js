/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const five = new ListNode(5);
const four = new ListNode(4, five);
const three = new ListNode(3, four);
const two = new ListNode(2, three);
const one = new ListNode(1, two);

var removeNthFromEnd = function (head, n) {
  let on = head;
  const nodes = [];
  while (on !== null) {
    nodes.push(on);
    on = on.next;
  }
  let removingIndex = nodes.length - n;
  const replacementLocation = nodes[removingIndex + 1] || null;
  // if the

  if (nodes.length > 1) {
    nodes[removingIndex - 1]
      ? (nodes[removingIndex - 1].next = replacementLocation)
      : (head = replacementLocation);
  } else {
    head = null;
  }
  //   console.log(nodes, replacementLocation);

  return head;
};

const changed = removeNthFromEnd(one, 2);
let on = changed;
while (on !== null) {
  console.log(on.val);
  on = on.next;
}
