import sqlite3

class ContactDatabase(object):
    def __init__(self, filename="example-contactbook.db"):
        self.dbfilename = filename
        db = sqlite3.connect(self.dbfilename)
        c = db.cursor()
        c.execute(
        "CREATE TABLE IF NOT EXISTS contacts \
            ( name          TEXT PRIMARY KEY, \
              email         TEXT, \
              phone         TEXT \
              )"
            )
        db.commit()
        c.close()

    def add_contact(self, name='', email='', phone=''):
        try:
            db = sqlite3.connect(self.dbfilename)
            c = db.cursor()
            c.execute('INSERT INTO contacts(name, email, phone) \
                        VALUES(?,?,?)', (name, email, phone))
            db.commit()
            print("contact added.")
        except:
            print("Error while adding contact.")
        finally:
            c.close()

    def update_contact(self, name_to_update, name='', email='', phone=''):
        try:
            db = sqlite3.connect(self.dbfilename)
            c = db.cursor()
            c.execute('UPDATE contacts set name=?, email=?, phone=? \
                        WHERE name=?', (name, email, phone, name_to_update))
            db.commit()
            if c.rowcount == 0:
                raise Exception
            print("Contact updated.")
        except:
            print("Error updating contact.")
        finally:
            c.close()

    def delete_contact(self, name):
        try:
            db = sqlite3.connect(self.dbfilename)
            c = db.cursor()
            c.execute('DELETE FROM contacts where name=?', (name,))
            db.commit()
            if c.rowcount == 0:
                raise Exception
            print("Contact deleted.")
        except:
            print("Error deleting contact.")
        finally:
            c.close()

    def delete_all_contacts(self):
        try:
            db = sqlite3.connect(self.dbfilename)
            c = db.cursor()
            c.execute('DELETE FROM contacts')
            db.commit()
            print("All contacts deleted.")
        except:
            print("Error deleting contacts.")
        finally:
            c.close()

    def list_all_contacts(self):
        try:
            db = sqlite3.connect(self.dbfilename)
            c = db.cursor()
            c.execute('SELECT * from contacts')
            contacts = c.fetchall()
            print("Contacts retrieved.")
            return contacts
        except:
            print("Error while retrieving contacts.")
        finally:
            c.close()

    def get_contact(self, name):
        try:
            db = sqlite3.connect(self.dbfilename)
            c = db.cursor()
            c.execute('SELECT * from contacts WHERE name=?', (name,))
            contacts = c.fetchall()
            if len(contacts) == 0:
                raise Exception
            print("Contact retrieved.")
            return contacts[0]
        except:
            print("Error retrieving contact.")
        finally:
            c.close()


class Application(object):

    def __init__(self, file_name):
        self.database = ContactDatabase(file_name)

    def add(self):
        name, email, phone = self.get_info()
        self.database.add_contact(name=name, email=email, phone=phone)

    def viewall(self):
        contacts = self.database.list_all_contacts()
        for contact in contacts:
            self.print_contact(contact)

    def search(self):
        name = input("Enter the name: ")
        contact = self.database.get_contact(name)
        if contact:
            self.print_contact(contact)

    def print_contact(self, contact):
            print()
            print(f"Name: {contact[0]}")
            print(f"Email: {contact[1]}")
            print(f"Phone: {contact[2]}")

    def get_info(self):
        name = input("Name: ")
        email = input("Email: ")
        phone = input("Phone: ")
        return name, email, phone

    def update(self):
        name_to_update = input("Enter the name to update: ")
        print("Enter updated information.")
        name, email, phone = self.get_info()
        self.database.update_contact(name_to_update=name_to_update, name=name, email=email, phone=phone)

    def delete(self):
        name = input("Enter the name to delete: ")
        self.database.delete_contact(name=name)

    def reset(self):
        self.database.delete_all_contacts()

    def __str__(self):
        return '''
1. Add a new contact
2. View all contacts
3. Find contact
4. Update contact
5. Delete contact
6. Reset all contacts
7. Exit
'''


def main():
    contactbook = Application("contactbook.db")
    choice = ''
    while choice != '7':
        print(contactbook)
        choice = input('Choose: ')
        if choice == '1':
            contactbook.add()
        elif choice == '2':
            contactbook.viewall()
        elif choice == '3':
            contactbook.search()
        elif choice == '4':
            contactbook.update()
        elif choice == '5':
            contactbook.delete()
        elif choice == '6':
            contactbook.reset()
        elif choice == '7':
            print("Exiting.")
        else:
            print("Invalid choice.")

if __name__ == '__main__':
    main()
