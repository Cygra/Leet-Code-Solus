import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

import javax.swing.tree.TreeNode;

import java.util.ArrayList;


class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        LinkedList<TreeNode> s = new LinkedList<>();
        List<Integer> r = new ArrayList<Integer>();
        TreeNode c = root;
        while (c != null || !s.isEmpty()) {
            if (c != null) {
                s.push(c);
                c = c.left;
            } else {
                TreeNode n = s.pop();
                r.add(n.val);
                c = c.right;
            }
        }
        return r;
    }

    public static void main(String[] args) {
        // System.out.println(new Solution().longestConsecutive( new int[] {100,4,200,1,3,2}));
    }
}
