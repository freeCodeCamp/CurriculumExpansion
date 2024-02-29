def square_root_bisection(square_target, tolerance=1e-7, max_iterations=100):
    if square_target < 0:
        # Square root of negative number is not defined in real numbers
        raise ValueError(
            'Square root of negative number is not defined in real numbers')
    if square_target == 1:
        return 1  # Shortcut for square root of 1
    low = 0
    # Ensures the interval covers the root for N < 1 and N > 1
    high = max(1, square_target)
    root = None

    for _ in range(max_iterations):
        mid = (low + high) / 2
        square_mid = mid**2

        if abs(square_mid - square_target) < tolerance:
            root = mid
            break
        elif square_mid < square_target:
            low = mid
        else:
            high = mid

    if root is None:
        print(f"Failed to converge within {max_iterations} iterations.")
    else:
        print(f"The square root of {square_target} is approximately {root}")
    return root


# Example usage
N = 81
root = square_root_bisection(N)
