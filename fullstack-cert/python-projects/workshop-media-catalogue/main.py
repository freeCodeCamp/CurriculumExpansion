class MediaError(Exception):
    """Custom exception for media-related errors."""

    def __init__(self, message):
        super().__init__(message)
        self.message = message


class Movie:
    """Parent class representing a movie."""

    def __init__(self, title, year, director, duration):
        if not title.strip():
            raise ValueError('Title cannot be empty')
        if year < 1888:  # First movie was made in 1888
            raise ValueError('Year must be 1888 or later')
        if duration <= 0:
            raise ValueError('Duration must be positive')
    if not director or not director.strip(): 
        raise ValueError('Director cannot be empty')
        self.title = title
        self.year = year
        self.director = director
        self.duration = duration

    def __str__(self):
        return f"{self.title} ({self.year}) - {self.duration} min, {self.director}"


class TVSeries(Movie):
    """Child class representing an entire TV series."""

    def __init__(self, title, year, director, duration, seasons, total_episodes):
        super().__init__(title, year, director, duration)

        if seasons < 1:
            raise ValueError('Seasons must be 1 or greater')
        if total_episodes < 1:
            raise ValueError('Total episodes must be 1 or greater')

        self.seasons = seasons
        self.total_episodes = total_episodes

    def __str__(self):
        return f"{self.title} ({self.year}) - {self.seasons} seasons, {self.total_episodes} episodes, {self.duration} min avg, {self.director}"


class MediaCatalogue:
    """A catalogue that can store different types of media items."""

    def __init__(self):
        self.items = []

    def add(self, media_item):
        """Add a media item to the catalogue."""
        if not isinstance(media_item, Movie):
            raise MediaError('Only Movie or TVSeries instances can be added')
        self.items.append(media_item)

    def get_items(self):
        """Get all media items in the catalogue."""
        return self.items.copy()

    def get_movies(self):
        """Get only Movie instances."""
        return [item for item in self.items if type(item) is Movie]

    def get_episodes(self):
        """Get only TVSeries instances."""
        return [item for item in self.items if isinstance(item, TVSeries)]

    def find_by_title(self, title):
        """Find media items by title (case-insensitive)."""
        return [item for item in self.items if title.lower() in item.title.lower()]

    def __str__(self):
        if not self.items:
            return 'Media Catalogue (empty)'

        movies = self.get_movies()
        episodes = self.get_episodes()

        result = f'Media Catalogue ({len(self.items)} items):\n\n'

        if movies:
            result += '=== MOVIES ===\n'
            for i, movie in enumerate(movies, 1):
                result += f"{i}. {movie}\n"
            result += '\n'

        if episodes:
            result += '=== TV SERIES ===\n'
            for i, episode in enumerate(episodes, 1):
                result += f"{i}. {episode}\n"

        return result.rstrip()


catalogue = MediaCatalogue()

try:
    movie1 = Movie('The Matrix', 1999, 'The Wachowskis', 136)
    movie2 = Movie('Inception', 2010, 'Christopher Nolan', 148)

    series1 = TVSeries('Scrubs', 2001, 'Bill Lawrence', 24, 9, 182)
    series2 = TVSeries('Breaking Bad', 2008, 'Vince Gilligan', 47, 5, 62)

    # Add items to catalogue
    catalogue.add(movie1)
    catalogue.add(movie2)
    catalogue.add(series1)
    catalogue.add(series2)

    print(catalogue)

except MediaError as e:
    print(f'Media Error: {e}')
except ValueError as e:
    print(f'Validation Error: {e}')
except Exception as e:
    print(f'Unexpected error: {e}')
