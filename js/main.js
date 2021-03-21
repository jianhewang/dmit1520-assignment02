// Enter your JavaScript for the solution here...
window.addEventListener('load', function(e){
    // delcare const for filter input
    const filterBar = document.querySelector('#filter');
    // declare const for reset button
    const resetBtn = document.querySelector('.reset');
    // declare const for all p elements with image hashtags as array
    const tagsArr = Array.from(document.querySelectorAll('p.tags'));


    // reset button event listener
    resetBtn.addEventListener('click', reset);

    // reset function
    function reset(e) {
        resetBtn.classList.add('hidden');
        filterBar.value = "";

        // reset all thumbnail search results
        tagsArr.forEach(function(value){
            const thumbnail = value.parentElement;

            if (thumbnail.classList.contains('hidden')) {
                thumbnail.classList.remove('hidden');
            }
        })
    }

    // filter search event listener
    filterBar.addEventListener('input', onFilterItems);

    // filter search function
    function onFilterItems(e){
        resetBtn.classList.remove('hidden');
        const filterItem = e.currentTarget.value.trim();

        // dynamically display filtered thumbnails
        if (filterItem === ''){
            reset();
        }
        else{
            filterMatchingItems(filterItem);
        }
    }

    // filter matching function
    function filterMatchingItems(filterItem) {
        tagsArr.forEach(function(value){
            const tag = value.textContent.toLocaleLowerCase();
            const thumbnail = value.parentElement;

            // hide or display filtered thumbnails
            if(!tag.includes(filterItem.toLocaleLowerCase())){
                thumbnail.classList.add('hidden');
            }
            else {
                thumbnail.classList.remove('hidden');
            }
        })
    }
})
