def dfs_n_queens(n):
   
    results = []

    def is_safe(queens, row, col):
        for r, c in enumerate(queens):
            if c == col or abs(row - r) == abs(col - c):
                return False
        return True

    def dfs(queens):
        row = len(queens)
        if row == n:
            results.append(queens[:])
            return
        for col in range(n):
            if is_safe(queens, row, col):
                queens.append(col)
                dfs(queens)
                queens.pop()

    dfs([])
    return results

if __name__ == "__main__":
    # 5-Queens
    solutions_5 = dfs_n_queens(5)
    print(solutions_5)

    