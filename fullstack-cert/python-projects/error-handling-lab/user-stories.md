In this lab, you will process e-commerce orders and handle the errors that come up along the way.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `find_order` with two parameters: `order_id`, and `order_history`.
1. `find_order` should:
   -  return the order from the `order_history` list whose `order_id` matches the `order_id` parameter.
   -  raise a `ValueError` with the message `Order ID {order_id} not found in order history.` if no order matches the given `order_id`.
1. You should have a function named `verify_availability` with two parameters: `order`, and `inventory`.
1. `verify_availability` should:
   -  raise a `ValueError` with the message `Product ID {product_id} is not in the inventory.` if a product in the order is missing from the `inventory`.
   -  raise a `ValueError` with the message `Insufficient stock for product ID {product_id}: requested {quantity}, available {available}.` if the quantity requested for a product is greater than the quantity available in the `inventory`.
   -  not raise anything if every product in the order is available in the requested quantity.
1. You should have a function named `get_discount_rate` with two parameters: `order`, and `discount_codes`.
1. `get_discount_rate` should:
   -  return `0.0` if the order's `discount_code` is `None`.
   -  raise a `ValueError` with the message `Invalid discount code: {discount_code}.` if the order's `discount_code` is not in the `discount_codes` dictionary.
   -  return the rate matching the order's `discount_code` otherwise.
1. You should have a function named `process_order` with an `order_id` parameter.
1. `process_order` should use `find_order`, `verify_availability`, and `get_discount_rate` to process the order matching the given `order_id`, and should never let the `ValueError` they raise reach the caller.
1. When no order in the `order_history` matches the given `order_id`, `process_order` should:
   -  print `Error processing order {order_id}: {error message}`, where `{error message}` is the message of the `ValueError` raised by `find_order`, and print nothing else.
   -  leave the `inventory` and the `discount_codes` unchanged.
1. When the order exists but cannot be fulfilled, because a product is missing from the `inventory`, because the requested quantity is not available, or because the discount code is invalid, `process_order` should:
   -  print `Error processing order {order_id}: {error message}`, where `{error message}` is the message of the `ValueError` raised by `verify_availability` or `get_discount_rate`.
   -  set the order's `status` to `failed`.
   -  leave the `inventory` and the `discount_codes` unchanged.
   -  print `Order {order_id} processing completed. Current status: failed`.
1. When the order can be fulfilled, `process_order` should:
   -  print `Order {order_id} total: ${total}`, with the discount applied and the total rounded to two decimal places.
   -  set the order's `status` to `processed`.
   -  subtract the ordered quantities from the `inventory`.
   -  remove the discount code the order used from the `discount_codes`, so that each code can only be used once.
   -  print `Order {order_id} processing completed. Current status: processed`.


**Note**: You've been provided with an inventory, order history, and discount codes you can use to test your code.