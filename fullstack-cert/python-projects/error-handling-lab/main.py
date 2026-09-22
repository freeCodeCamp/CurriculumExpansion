inventory = {
    1001: {'product': 'Laptop', 'quantity': 15, 'price': 999.99},
    1002: {'product': 'Wireless Mouse', 'quantity': 50, 'price': 19.99},
    1003: {'product': 'Mechanical Keyboard', 'quantity': 30, 'price': 79.99},
    1004: {'product': 'USB-C Hub', 'quantity': 25, 'price': 34.99},
    1005: {'product': 'Monitor 27"', 'quantity': 12, 'price': 249.99},
    1006: {'product': 'Webcam HD', 'quantity': 40, 'price': 29.99},
    1007: {'product': 'External SSD 1TB', 'quantity': 20, 'price': 89.99},
    1008: {'product': 'Noise Cancelling Headphones', 'quantity': 18, 'price': 149.99},
    1009: {'product': 'Smartphone', 'quantity': 10, 'price': 699.99},
    1010: {'product': 'Bluetooth Speaker', 'quantity': 35, 'price': 44.99},
}

order_history = [
    {
        'order_id': 1,
        'products': [
            {'product_id': 1001, 'quantity': 1},
            {'product_id': 1002, 'quantity': 2},
        ],
        'discount_code': 'fCC2026',
        'status': 'queued',
    },
    {
        'order_id': 2,
        'products': [
            {'product_id': 1003, 'quantity': 1},
            {'product_id': 1004, 'quantity': 1},
        ],
        'discount_code': None,
        'status': 'queued',
    },
    {
        'order_id': 3,
        'products': [
            {'product_id': 1005, 'quantity': 2},
            {'product_id': 1006, 'quantity': 1},
        ],
        'discount_code': 'InvalidCode',
        'status': 'queued',
    },
    {
        'order_id': 4,
        'products': [
            {'product_id': 1006, 'quantity': 100},
            {'product_id': 1008, 'quantity': 1},
        ],
        'discount_code': None,
        'status': 'queued',
    },
    {
        'order_id': 5,
        'products': [
            {'product_id': 1009, 'quantity': 11},
            {'product_id': 1010, 'quantity': 1},
        ],
        'discount_code': None,
        'status': 'queued',
    },
    {
        'order_id': 6,
        'products': [
            {'product_id': 9999, 'quantity': 1},  # Invalid product ID
            {'product_id': 1002, 'quantity': 1},
        ],
        'discount_code': None,
        'status': 'queued',
    },
]

discount_codes = {
    'fCC2026': 0.10,
    'CAMPERBOT': 0.15,
}

def find_order(order_id, order_history):
    for order in order_history:
        if order['order_id'] == order_id:
            return order
    raise ValueError(f'Order ID {order_id} not found in order history.')

def set_order_status(order, status):
    order['status'] = status

def get_discount_rate(order, discount_codes):
    discount_code = order['discount_code']
    if discount_code is None:
        return 0.0
    if discount_code not in discount_codes:
        raise ValueError(f'Invalid discount code: {discount_code}')
    return discount_codes[discount_code]

def consume_discount_code(order, discount_codes):
    discount_code = order['discount_code']
    if discount_code is not None:
        del discount_codes[discount_code]

def verify_availability(order, inventory):
    products = order['products']
    for product in products:
        product_id = product['product_id']
        quantity = product['quantity']
        if product_id not in inventory:
            raise ValueError(f'Product ID {product_id} is not in the inventory.')
        available = inventory[product_id]['quantity']
        if available < quantity:
            raise ValueError(
                f'Insufficient stock for product ID {product_id}: '
                f'requested {quantity}, available {available}.'
            )

def calculate_total(order, inventory):
    products = order['products']
    total = 0.0
    for product in products:
        product_id = product['product_id']
        price = inventory[product_id]['price']
        quantity = product['quantity']
        total += price * quantity
    return total

def reserve_stock(order, inventory):
    products = order['products']
    for product in products:
        product_id = product['product_id']
        inventory[product_id]['quantity'] -= product['quantity']

def process_order(order_id):
    # Finding the order is its own step: every later step needs the order,
    # so there is nothing useful to do if this fails.
    try:
        order = find_order(order_id, order_history)
    except ValueError as e:
        print(f'Error processing order {order_id}: {e}')
        return

    # Every call below only validates and calculates. Nothing here changes
    # the inventory or the discount codes, so a failure leaves the shared
    # data exactly as it was.
    try:
        verify_availability(order, inventory)
        discount_rate = get_discount_rate(order, discount_codes)
        total = calculate_total(order, inventory)
    except ValueError as e:
        set_order_status(order, 'failed')
        print(f'Error processing order {order_id}: {e}')
    else:
        # All the checks passed, so it is now safe to commit the changes.
        reserve_stock(order, inventory)
        consume_discount_code(order, discount_codes)
        set_order_status(order, 'processed')
        print(f'Order {order_id} total: ${total * (1 - discount_rate):.2f}')

    print(f'Order {order_id} processing completed. Current status: {order["status"]}')


process_order(1)  # Valid order with a valid discount code
process_order(2)  # Valid order without a discount code
process_order(3)  # Valid order with an invalid discount code
process_order(4)  # Valid order with insufficient stock
process_order(5)  # Valid order with insufficient stock
process_order(6)  # Valid order with a product ID not in inventory
process_order(7)  # Invalid order ID (not in order_history)
