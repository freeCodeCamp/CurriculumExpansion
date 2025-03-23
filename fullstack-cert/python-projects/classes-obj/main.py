import datetime

class Email:
    def __init__(self, sender, receiver, subject, body):
        self.sender = sender
        self.receiver = receiver
        self.subject = subject
        self.body = body
        self.timestamp = datetime.datetime.now()
        self.read = False

    def mark_as_read(self):
        self.read = True

    def display_summary(self):
        print(str(self))

    def display_full_email(self):
        self.mark_as_read()
        print("\n--- Email ---")
        print(f"From: {self.sender.name}")
        print(f"To: {self.receiver.name}")
        print(f"Subject: {self.subject}")
        print(f"Received: {self.timestamp.strftime('%Y-%m-%d %H:%M')}")
        print("Body:")
        print(self.body)
        print("------------\n")

    def __str__(self):
        status = "Read" if self.read else "Unread"
        return f"[{status}] From: {self.sender.name} | Subject: {self.subject} | Time: {self.timestamp.strftime('%Y-%m-%d %H:%M')}"


class Inbox:
    def __init__(self):
        self.emails = []

    def receive_email(self, email):
        self.emails.append(email)

    def list_emails(self):
        if not self.emails:
            print("Your inbox is empty.\n")
            return
        print("\nYour Emails:")
        for i, email in enumerate(self.emails, start=1):
            print(f"{i}. {str(email)}")
        print()

    def read_email(self, index):
        if not self.emails:
            print("Inbox is empty.\n")
        elif 0 <= index < len(self.emails):
            self.emails[index].display_full_email()
        else:
            print("Invalid email number.\n")

    def delete_email(self, index):
        if not self.emails:
            print("Inbox is empty.\n")
        elif 0 <= index < len(self.emails):
            del self.emails[index]
            print("Email deleted.\n")
        else:
            print("Invalid email number.\n")

class User:
    def __init__(self, name):
        self.name = name
        self.inbox = Inbox()

    def send_email(self, receiver, subject, body):
        email = Email(sender=self, receiver=receiver, subject=subject, body=body)
        receiver.inbox.receive_email(email)
        print(f"Email sent from {self.name} to {receiver.name}!\n")

    def check_inbox(self):
        print(f"\n{self.name}'s Inbox:")
        self.inbox.list_emails()
    
    def read_email(self, index):
        self.inbox.read_email(index)

    def delete_email(self, index):
        self.inbox.delete_email(index)

def main():
    user1 = User("Alice")
    user2 = User("Bob")

    users = {"1": user1, "2": user2}

    while True:
        print("\nEmail Simulator")
        print("Choose your user:")
        print("1. Alice")
        print("2. Bob")
        print("3. Exit")

        choice = input("Enter choice (1-3): ")

        if choice in users:
            current_user = users[choice]

            print(f"\nWelcome, {current_user.name}!")
            print("1. Check Inbox")
            print("2. Read an Email")
            print("3. Delete an Email")
            print("4. Send an Email")
            print("5. Back to User Menu")

            action = input("Choose an action (1-5): ")

            if action == "1":
                current_user.check_inbox()
            elif action == "2":
                if not current_user.inbox.emails:
                    print("Your inbox is empty.\n")
                else:
                    current_user.check_inbox()
                    idx = int(input("Enter email number to read: ")) - 1
                    current_user.read_email(idx)

            elif action == "3":
                if not current_user.inbox.emails:
                    print("Your inbox is empty.\n")
                else:
                    current_user.check_inbox()
                    idx = int(input("Enter email number to delete: ")) - 1
                    current_user.delete_email(idx)

            elif action == "4":
                to_user = user2 if current_user == user1 else user1
                subject = input("Subject: ")
                body = input("Body: ")
                current_user.send_email(to_user, subject, body)
            elif action == "5":
                continue
            else:
                print("Invalid action.\n")
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice.\n")

if __name__ == "__main__":
    main()
