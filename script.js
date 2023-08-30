const button = document.getElementById('button')
button.setAttribute('click', 'submit')

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
searchBar.addEventListener('keyup', (e) => {
    let input = e.target.value;
    let matches = filterFruits(input);
    resetDropdown();
    populateDropdown(matches);
});

// Event listener for dropdown list items
dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchBar.value = e.target.innerText;
        resetDropdown();
        initiateSearch();
    }
});

// Event listener to hide dropdown on focus out
searchBar.addEventListener('focusout', () => {
    resetDropdown();
});
function search(str) {
    let results = [];
    // TODO
    return results;
}

function searchHandler(e) {
    // TODO
}

function showSuggestions(results, inputVal) {
    // TODO
}

function useSuggestion(e) {
    // TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// Function to fetch suggestions based on input
function fetchSuggestions(query) {
    const regex = new RegExp(query, 'i');
    return fruit.filter(f => f.match(regex));
}

// Handle input event to show suggestions
document.getElementById('fruit').addEventListener('input', function() {
    const inputVal = this.value;
    if (inputVal) {
        const suggestions = fetchSuggestions(inputVal);
        const datalist = document.getElementById('fruitSuggestions');
        datalist.innerHTML = '';  // clear previous suggestions
        suggestions.forEach(suggestion => {
            const option = document.createElement('option');
            option.value = suggestion;
            datalist.appendChild(option);
        });
    }
});

// Handle form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Search initiated for:', document.getElementById('fruit').value);
});
