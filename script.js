//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Words to ignore for sorting
const ignoreWords = ["a", "an", "the"];

// Function to remove ignore words from a string
const removeIgnoreWords = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .filter(word => !ignoreWords.includes(word))
        .join(' ');
};

// Function to sort bands
const sortBands = (bands) => {
    return bands.slice().sort((a, b) => {
        const strA = removeIgnoreWords(a);
        const strB = removeIgnoreWords(b);
        return strA.localeCompare(strB);
    });
};

// Get sorted bands
const sortedBands = sortBands(bands);

// Log the sorted bands to the console
console.log(sortedBands);
