class Planet:
    def __init__(self, name, planet_type, star):
        if not name or not planet_type or not star:
            print("Error: Name, planet type, and star cannot be empty")
            return
        self.name = name
        self.planet_type = planet_type
        self.star = star   # The star the planet orbits

    def orbit(self):
        return f'{self.name} is orbiting around {self.star}...'

    def __str__(self):
        return f'Planet: {self.name} | Type: {self.planet_type} | Star: {self.star}'
        

# Test the Planet class
if __name__ == "__main__":
    planet_1 = Planet('Earth', 'terrestrial', 'Sun')
    planet_2 = Planet('Jupiter', 'gas giant', 'Sun')
    planet_3 = Planet('Kepler-452b', 'super-Earth', 'Kepler-452')

    print(planet_1.orbit()) # Earth is orbiting around Sun...
    print(planet_1) # Planet: Earth | Type: terrestrial | Star: Sun

    print(planet_2.orbit()) # Jupiter is orbiting around Sun...
    print(planet_2) # Planet: Jupiter | Type: gas giant | Star: Sun

    print(planet_3.orbit()) # Kepler-452b is orbiting around Kepler-452...
    print(planet_3) # Planet: Kepler-452b | Type: super-Earth | Star: Kepler-452