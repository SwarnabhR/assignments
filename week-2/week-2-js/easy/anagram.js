function isAnagram(str1, str2) {
    // Normalize: remove spaces and convert to lowercase
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    // Check lengths first
    if (str1.length !== str2.length) return false;

    // Sort and compare
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}


module.exports = isAnagram;
