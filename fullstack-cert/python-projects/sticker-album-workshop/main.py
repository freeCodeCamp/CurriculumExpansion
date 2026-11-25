album = {
    'Ocean': {1, 2, 3, 4},
    'Forest': {5, 6, 7, 8},
    'Desert': {9, 10, 11, 12},
}


def all_stickers(album):
    stickers = set()
    for page_stickers in album.values():
        stickers |= page_stickers
    return stickers


daisy = {'name': 'Daisy', 'stickers': set(), 'spares': []}
jack = {'name': 'Jack', 'stickers': set(), 'spares': []}


def open_packs(collector, *packs):
    count_before = len(collector['stickers'])

    for pack in packs:
        for sticker in pack:
            if sticker in collector['stickers']:
                collector['spares'].append(sticker)
            else:
                collector['stickers'].add(sticker)

    new_count = len(collector['stickers']) - count_before
    print(f"{collector['name']} opened {len(packs)} packs and got {new_count} new stickers")


def missing_stickers(collector, album):
    return all_stickers(album) - collector['stickers']


def progress(collector, album):
    stickers = all_stickers(album)

    if collector['stickers'] == stickers:
        print(f"{collector['name']} completed the album!")
    else:
        count = len(collector['stickers'])
        missing = sorted(missing_stickers(collector, album))
        print(f"{collector['name']} has {count}/{len(stickers)} stickers, missing {missing}")


def completed_pages(collector, album):
    pages = [
        page
        for page, page_stickers in album.items()
        if page_stickers.issubset(collector['stickers'])
    ]
    print(f"{collector['name']}'s completed pages: {pages}")


def trade(first, second, album):
    first_missing = missing_stickers(first, album)
    second_missing = missing_stickers(second, album)

    first_gives = set(first['spares']) & second_missing
    second_gives = set(second['spares']) & first_missing

    if not first_gives and not second_gives:
        print('No trade possible')
        return

    second['stickers'] |= first_gives
    first['stickers'] |= second_gives

    for sticker in first_gives:
        first['spares'].remove(sticker)
    for sticker in second_gives:
        second['spares'].remove(sticker)

    print(f"{first['name']} gave {sorted(first_gives)}, {second['name']} gave {sorted(second_gives)}")


open_packs(daisy, [1, 2, 3, 3, 5], [5, 6, 7, 8, 3])
open_packs(jack, [4, 9, 10, 11, 11], [3, 8, 12, 4, 1])

# print(daisy['stickers'] & jack['stickers']) -> stickers both have
# print(daisy['stickers'] | jack['stickers']) -> all 12 stickers, together they could complete the album
# print(daisy['stickers'] ^ jack['stickers']) -> stickers only one of them has
# print(daisy['stickers'] - jack['stickers']) -> stickers Daisy has and Jack doesn't
# print(all_stickers(album) - daisy['stickers']) -> Daisy's missing stickers, becomes missing_stickers()
# print(set(daisy['spares']) & missing_stickers(jack, album)) -> spares Daisy can give Jack, becomes part of trade()
# print(missing_stickers(jack, album).isdisjoint(daisy['spares'])) -> False, Daisy has spares Jack needs
# jack['stickers'].remove(2) -> KeyError, Jack doesn't have sticker 2
# jack['stickers'].discard(2) -> no error, nothing happens

progress(daisy, album)
progress(jack, album)
completed_pages(daisy, album)
completed_pages(jack, album)

trade(daisy, jack, album)
trade(daisy, jack, album)

open_packs(daisy, [9, 10, 2], [12, 6, 7])
progress(daisy, album)
progress(jack, album)
