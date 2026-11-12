class Category:
    statement_width = 30

    def __init__(self, name):
        self.name = name
        self.ledger = []
        self.balance = 0

    def __len__(self):
        return len(self.ledger)

    def __getitem__(self, index):
        return self.ledger[index]

    def __iter__(self):
        return iter(self.ledger)

    def __str__(self):
        width = self.statement_width
        description_width = width - 7
        title = self.name[:width]
        first_line = f'{title:*^{width}}\n'
        lines = ''
        total = f'Total: {self.get_balance():.2f}'

        for n in range(len(self)):
            description = self[n]['description'][:description_width]
            amount = f"{self[n]['amount']:.2f}"[:7]
            lines += f'{description:<{description_width}}{amount:>7}\n'

        return f'{first_line}{lines}{total:<{width}}'

    def deposit(self, amount, description=''):
        self.ledger.append({
            'amount': float(amount),
            'description': description
        })
        self.balance += float(amount)

    def withdraw(self, amount, description=''):
        if self.check_funds(amount):
            self.ledger.append({
                'amount': -float(amount),
                'description': description
            })
            self.balance -= float(amount)
            return True
        else:
            return False

    def get_balance(self):
        return self.balance

    def transfer(self, amount, category):
        if self.check_funds(amount):
            # withdraw
            self.ledger.append({
                'amount': -float(amount),
                'description': f'Transfer to {category.name}'
            })
            self.balance -= float(amount)

            # deposit
            category.deposit(amount, f'Transfer from {self.name}')
            return True
        else:
            return False

    def check_funds(self, amount):
        if float(amount) > self.balance:
            return False
        else:
            return True


def create_spend_summary(categories):
    spending = {
        category.name: sum(
            -entry['amount']
            for entry in category
            if entry['amount'] < 0
        )
        for category in categories
    }
    total = sum(spending.values())

    return {
        name: round(amount / total * 100, 2) if total else 0.0
        for name, amount in spending.items()
    }
