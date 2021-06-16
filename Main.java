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
    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean isValidBST(TreeNode root, long lower, long upper) {
        if (root == null) {
            return true;
        }

        return root.val > lower &&
            root.val < upper &&
            isValidBST(root.left, lower, root.val) &&
            isValidBST(root.right, root.val, upper);
    }


    public static void main(String[] args) {
        // System.out.println(new Solution().longestConsecutive( new int[] {100,4,200,1,3,2}));
    }
}
