import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public void flatten(TreeNode root) {
        while (root != null) {
            TreeNode node = root.left;
            if (node != null) {
                while (node != null && node.right != null) {
                    node = node.right;
                }

                node.right = root.right;
                root.right = root.left;
                root.left = null;
            }
            root = root.right;
        }
    }


    public static void main(String[] args) {
        // System.out.println(new Solution().numTrees(4));
    }
}
