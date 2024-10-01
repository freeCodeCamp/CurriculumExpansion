const permuteString = (str, prefix = '', result = []) => {
    if (str.length === 0) {
        result.push(prefix);
        return result;
    }
    for (let i = 0; i < str.length; i++) {
        const rem = str.slice(0, i) + str.slice(i + 1);
        permuteString(rem, prefix + str[i], result);
    }
    return result;
};