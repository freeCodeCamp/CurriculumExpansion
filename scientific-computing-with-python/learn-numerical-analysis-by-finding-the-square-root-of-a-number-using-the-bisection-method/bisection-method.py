def square_root_bisection(N, tolerance=1e-7, max_iterations=100):
  if N < 0:
      return None  # Square root of negative number is not defined in real numbers
  if N == 1:
      return 1  # Shortcut for square root of 1
  low = 0
  high = max(1, N)  # Ensures the interval covers the root for N < 1 and N > 1
  root = None

  for _ in range(max_iterations):
      mid = (low + high) / 2
      square_mid = mid**2

      if abs(square_mid - N) < tolerance:
          root = mid
          break
      elif square_mid < N:
          low = mid
      else:
          high = mid

  if root is None:
      print("Failed to converge within the maximum number of iterations.")
  return root


# Example usage
N = 81
root = square_root_bisection(N)
print(f"The square root of {N} is approximately {root}")
