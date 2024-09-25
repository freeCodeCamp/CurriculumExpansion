const permuteString = (str, prefix = '') => {
    if (str.length === 0) {
        return prefix;
    }
    for (let i = 0; i < str.length; i++) {
        const rem = str.slice(0, i) + str.slice(i + 1);
        permuteString(rem, prefix + str[i]);
    }
};