const getTheTitles = function(books) {
    return books.reduce((arr, item) => [...arr, item.title],[]);
};

// Do not edit below this line
module.exports = getTheTitles;
