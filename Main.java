import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

import javax.swing.tree.TreeNode;

import java.util.ArrayList;


class Solution {
    public boolean isSymmetric(TreeNode root) {
        Queue<TreeNode> qu = new LinkedList<TreeNode>();
        qu.offer(root.left);
        qu.offer(root.right);
        while (!qu.isEmpty()) {
            TreeNode p = qu.poll();
            TreeNode q = qu.poll();

            if (p == null && q == null) {
            } else if (p == null || q == null || p.val != q.val) {
                return false;
            } else {
                qu.offer(q.left);
                qu.offer(p.right);
                qu.offer(p.left);
                qu.offer(q.right);
            }

        }
        return true;
    }


    public static void main(String[] args) {
        // System.out.println(new Solution().longestConsecutive( new int[] {100,4,200,1,3,2}));
    }
}
