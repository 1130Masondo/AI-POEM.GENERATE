
function toggleMeaning() {
    const meaning = document.getElementById('meaning');
    if (meaning.classList.contains('hidden')) {
        meaning.classList.remove('hidden');
    } else {
        meaning.classList.add('hidden');
    }
}