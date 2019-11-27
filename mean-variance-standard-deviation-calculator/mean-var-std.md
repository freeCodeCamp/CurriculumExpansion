# Certification Project: Mean-Variance-Standard Deviation Calculator

Create a function named `mean_var_std()` that uses Numpy to output the mean, 
variance, and standard deviation of a 3 x 3 matrix. The input of the function
should be a list containing 9 digits. The function should convert the list
into a 3 x 3 Numpy array, and then print the mean, variance, and standard
deviation along both axis and for the flattened matrix.

For example:
`mean_var_std([0,1,2,3,4,5,6,7,8])`

Should return:
```
Mean
[3. 4. 5.]
[1. 4. 7.]
4.0

Variance
[6. 6. 6.]
[0.66666667 0.66666667 0.66666667]
6.666666666666667

Standard Deviation
[2.44948974 2.44948974 2.44948974]
[0.81649658 0.81649658 0.81649658]
2.581988897471611
```

## Solution Code:
```py
import numpy as np

def mean_var_std(list):
  if len(list) != 9:
    print("List must contain nine numbers.")
    return
  array = np.array(list).reshape((3, 3))
  print("Mean")
  print(np.mean(array, axis = 0))
  print(np.mean(array, axis = 1))
  print(np.mean(array))
  print("\nVariance")
  print(np.var(array, axis = 0))
  print(np.var(array, axis = 1))
  print(np.var(array))
  print("\nStandard Deviation")
  print(np.std(array, axis = 0))
  print(np.std(array, axis = 1))
  print(np.std(array))

mean_var_std([0,1,2,3,4,5,6,7,8])
```