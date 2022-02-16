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
// five.next = four;

// var hasCycle = function (head) {
//   const nodeSet = new Set();
//   let on = head;
//   while (on !== null) {
//     if (nodeSet.has(on)) {
//       return true;
//     } else {
//       nodeSet.add(on);
//     }
//     on = on.next;
//   }
//   return false;
// };

var hasCycle = function (on, nodeSet = new Set()) {
  if (nodeSet.has(on)) {
    return true;
  }
  if (on === null) {
    return false;
  }
  nodeSet.add(on);
  return hasCycle(on.next, nodeSet);
};

console.log(hasCycle(one));
