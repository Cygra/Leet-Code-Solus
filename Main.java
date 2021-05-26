class Solution {
  public int[] countBits(int n) {
    int[] bits = new int[n + 1];
    bits[0] = 0;
    for (int i = 1; i <= n; i++) {
      if ((i & 1) == 0) {
        // 偶数
        bits[i] = bits[i >> 1];
      } else {
        // 奇数
        bits[i] = bits[i - 1] + 1;
      }
    }
    return bits;
  }

  public static void main(String[] args) {
    Solution s = new Solution();
    System.out.print(s.countBits(5));
  }
}
