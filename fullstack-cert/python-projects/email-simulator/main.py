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
            return
        try:
            self.emails[index].display_full_email()
        except IndexError:
            print("Invalid email number.\n")

    def delete_email(self, index):
        if not self.emails:
            print("Inbox is empty.\n")
            return
        try:
            del self.emails[index]
            print("Email deleted.\n")
        except IndexError:
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
    # Create users
    alice = User("Alice")
    bob = User("Bob")

    # Send emails
    alice.send_email(bob, "Hello", "Hi Bob, just saying hello!")
    alice.send_email(bob, "Follow up", "Did you see my last email?")
    bob.send_email(alice, "Re: Hello", "Hi Alice, yes I got your email.")

    # Bob checks inbox
    bob.check_inbox()

    # Bob reads first email
    bob.read_email(0)

    # Bob deletes second email
    bob.delete_email(1)

    # Bob checks inbox again
    bob.check_inbox()

    # Alice checks inbox
    alice.check_inbox()

if __name__ == "__main__":
    main()
