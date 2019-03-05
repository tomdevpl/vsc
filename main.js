    // Get input element
    let filterInput = document.getElementById('filterInput');
    // Add event listener
    filterInput.addEventListener('keyup', filterEvent);

    // function eventlistener
    function filterEvent() {
      // Get value of input
      let filterValue = filterInput.value.toUpperCase();
      // Get names ul
      let ul = document.getElementById('names');
      // Get lis from ul
      let li = ul.querySelectorAll('li.collection-item');
      // Loop through colletionitem lis
      for (let i = 0; i < li.length; i++) {
        let span = li[i].querySelectorAll('span')[0];
        let span2 = li[i].querySelectorAll('span')[1];
        // If matched
        if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1 || span2.innerHTML.toUpperCase().indexOf(filterValue) >
          -1) {
          li[i].style.display = '';
        } else {
          li[i].style.display = 'none';
        }
      }
    }