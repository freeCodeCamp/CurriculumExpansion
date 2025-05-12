from abc import ABC, abstractmethod

class PaymentMethod(ABC):
    @abstractmethod
    def authorize(self) -> bool:
        pass

    @abstractmethod
    def capture(self, amount: float) -> bool:
        pass

class CreditCardPayment(PaymentMethod):
    def __init__(self, card_number: str, cvv: str, balance: float):
        self.card_number = card_number
        self.cvv = cvv
        self.balance = balance
    
    def authorize(self):
        print(f"Authorizing credit card {self.card_number}...")
        return True
    
    def capture(self, amount: float):
        if amount > self.balance:
            print(f"Insufficient balance for credit card {self.card_number}.")
            return False
        self.balance -= amount
        print(f"Successfully transacted ${amount} on credit card {self.card_number}.")
        return True
    
    def refund(self, amount: float):
        self.balance += amount
        print(f"Refunded {amount} to credit card {self.card_number}. New balance: {self.balance}")
        return True
    
class CryptoPayment(PaymentMethod):
    def __init__(self, wallet_address: str, balance: float):
        self.wallet_address = wallet_address
        self.balance = balance
    
    def authorize(self):
        print(f"Authorizing crypto payment from wallet {self.wallet_address}...")
        return True
    
    def capture(self, amount: float):
        if amount > self.balance:
            print(f"Insufficient balance for crypto wallet {self.wallet_address}.")
        self.balance -= amount
        print(f"Captured {amount} from crypto wallet {self.wallet_address}. Remaining balance: {self.balance}")
        return True
    
    def refund(self, amount: float):
        self.balance += amount
        print(f"Refunded {amount} to crypto wallet {self.wallet_address}. New balance: {self.balance}")
        return True
    
class PaymentProcessor:
    def __init__(self):
        self.transactions = []

    def add_transaction(self, payment: PaymentMethod, amount: float):
        self.transactions.append((payment, amount))

    def process_all(self):
        for payment, amount in self.transactions:
            print(f"Processing transaction for ${amount}")
            if not payment.authorize():
                print("Authorization failed.")
                continue
            if amount > payment.balance:
                print("Transaction failed: Insufficient balance.\n")
                continue
            payment.capture(amount)
            print(f"Transaction of {amount} successful.")

# Usage
if __name__ == "__main__":
    cc = CreditCardPayment("1234-5678-9012-3456", "123", 1000)
    btc = CryptoPayment("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", 0.5)

    processor = PaymentProcessor()
    processor.add_transaction(cc, 200)
    processor.add_transaction(btc, 0.1)
    processor.process_all()