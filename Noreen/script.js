const pics = document.querySelectorAll('.pic')
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', function() {
    var searchTerm = searchInput.value; 
    if (searchTerm.trim() !== "") {
        alert("You are search for:" + searchTerm);
    } else {
        alert("Please enter a search term.");
    }
});

pics.forEach(pic => {
    pic.addEventListener('click', () => {
        removeActiveClasses()
        pic.classList.add('active')
    })
})

function removeActiveClasses() {
    pics.forEach(pic => {
        pic.classList.remove('active')
    })
}
