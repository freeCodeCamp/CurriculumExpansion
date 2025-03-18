def multiplication_table(n, limit=12):  
  print(f"Multiplication Table for {n}:")  
  for i in range(1, limit + 1):  
    print(f"{n} × {i} = {n * i}")  

num = int(input("Enter a number: "))  
multiplication_table(num)  
