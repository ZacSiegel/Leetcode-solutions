class Solution:
    def minimumSum(self, num: int) -> int:
        nums = list(str(num))
        nums.sort()
        nums1 = nums[0] + nums[2]
        nums2 = nums[1] + nums[3]
            
        return int(nums1)+int(nums2)
