price = 20

def apply_discount(price, discount):
    # Validation steps
    if not isinstance(price, (int, float)):
        return "The price should be a number"
    if not isinstance(discount, (int, float)):
        return "The discount should be a number"
    if price < 0:
        return "The price should be at least 0"
    if discount < 0 or discount > 100:
        return "The discount should be between 0 and 100"

    discount_amount = price * discount / 100
    final_price = price - discount_amount
    return final_price
