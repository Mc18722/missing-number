def find_missing_number(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum

nums = [3, 0, 1]
missing_number = find_missing_number(nums)
print(f"Die fehlende Zahl ist: {missing_number}")
