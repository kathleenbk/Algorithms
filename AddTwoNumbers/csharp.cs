/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        ListNode result = new ListNode();
        ListNode head = result;
        int sum = 0;

        while (l1 != null)
        {
            sum += l1.val;
            l1 = l1.next;
        }

        while (l2 != null)
        {
            sum+=l2.val;
            l2 = l2.next;
        }

        
    }
}