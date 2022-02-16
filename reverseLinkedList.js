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

// var reverseList = function (head) {
//   let on = head;
//   const nodes = [];
//   while (on != null) {
//     nodes.unshift(on);
//     on = on.next;
//   }
//   // console.log(nodes);

//   const newHead = nodes[0] || [];
//   for (let i = 0; i < nodes.length; i++) {
//     const nextNode = nodes[i + 1] || null;
//     // console.log(nextNode);
//     nodes[i].next = nextNode;
//   }
//   return newHead;
// };

// var reverseList = function (head) {
//   let on = head;
//   let prev = null;
//   while (on != null) {
//     //   store next node as temp
//     const temp = on.next;

//     //   set next to prev
//     on.next = prev;

//     //set prev to current node
//     prev = on;

//     // move on the next node
//     on = temp;
//   }
//   return prev;
// };

var reverseList = function (head) {
  let on = head;
  let prev = null;
  console.log(prev);
  if (on === null) {
    return prev;
  }
  const temp = on.next;
  on.next = prev;
  prev = on;
  //   console.log(on.val);
  return reverseList(temp);
};

console.log(reverseList(one));
