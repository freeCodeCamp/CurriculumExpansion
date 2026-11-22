def resolve(config, key, chain=None):
    if chain is None:
        chain = []

    if key in chain:
        raise ValueError('Circular reference: ' + ' -> '.join(chain + [key]))
    if key not in config:
        raise ValueError(f'Undefined key: {key}')

    value = config[key]
    result = ''
    start = value.find('${')

    while start != -1:
        end = value.find('}', start)
        name = value[start + 2:end]
        result += value[:start] + resolve(config, name, chain + [key])
        value = value[end + 1:]
        start = value.find('${')
    return result + value


def resolve_all(config):
    return {key: resolve(config, key) for key in config}