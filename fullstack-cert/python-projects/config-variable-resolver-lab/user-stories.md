In this lab, you will build a recursive function that resolves references between values in a configuration dictionary.

Many configuration files let a value refer to other values with the `${name}` syntax:

```py
config = {
    'user': 'dario',
    'home': '/users/${user}',
    'projects': '${home}/projects',
    'app_dir': '${projects}/weather-app',
    'log_file': '${app_dir}/logs/${user}.log'
}
```

To get the final value of `log_file`, you need to replace `${app_dir}` and `${user}` with their values. But `app_dir` refers to `projects`, which refers to `home`, which refers to `user`. Resolving `log_file` gives `/users/dario/projects/weather-app/logs/dario.log`.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a recursive function named `resolve` with three parameters: `config`, `key`, and `chain`, where:
   - `config` represents a configuration dictionary.
   - `key` represents the key to resolve.
   - `chain` represents the list of keys that are already being resolved, and has a default value of `None`.
1. The `resolve` function should return the value of `key` in the `config` dictionary with every `${name}` reference replaced by the fully resolved value of `name`. For example, with the configuration above, `resolve(config, 'log_file')` should return `'/users/dario/projects/weather-app/logs/dario.log'`.
1. If the key, or any key it refers to directly or indirectly, does not exist in the configuration, `resolve` should raise a `ValueError` with the message `Undefined key: <key>`, where `<key>` is the missing key.
1. If the key refers to itself, directly or through other keys, `resolve` should raise a `ValueError` with the message `Circular reference: <chain>`, where `<chain>` is the sequence of keys followed from the key passed to `resolve` up to the first repeated key, separated by ` -> `. For example, if `a` refers to `b`, and `b` refers to `a`, `resolve(config, 'a')` should raise a `ValueError` with the message `Circular reference: a -> b -> a`.
1. You should have a function named `resolve_all` with a `config` parameter. It should return a new dictionary with the same keys, where each value is fully resolved. It should raise the same errors as `resolve`.
1. Both `resolve` and `resolve_all` should leave the `config` dictionary unchanged.

**Note:** Assume that every `${` is followed by a key name and a `}`, and that keys and values are strings.
