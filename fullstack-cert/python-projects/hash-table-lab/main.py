class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, string):
        hashed = 0
        for char in string:
            hashed += ord(char)  
        return hashed

    def add(self, key, val):
        the_hash = self.hash(key)
        if the_hash not in self.collection:
            self.collection[the_hash] = {}
        self.collection[the_hash][key] = val

    def remove(self, key):
        the_hash = self.hash(key)
        if the_hash in self.collection and key in self.collection[the_hash]:
            del self.collection[the_hash][key]
            if not self.collection[the_hash]: 
                del self.collection[the_hash]

    def lookup(self, key):
        the_hash = self.hash(key)
        if the_hash in self.collection and key in self.collection[the_hash]:
            return self.collection[the_hash][key]
        return None
