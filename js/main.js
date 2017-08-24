let recordsPerPage = 10;
let searchValue = $('.page-header').append(' <div class="student-search"><input placeholder="Search for students..."> <button>Search</button></div>');
let studentItem = $('.student-item');
let studentList = $('.student-list').children();


const showPage = (pageNumber, studentList) => { /* arguments here for page number and student list */
  // first hide all students on the page
  $(studentList).hide();
  // Then loop through all students in our student list argument
  for (let i = 0; i < studentList.length; i += 1) {
  // if student should be on this page number
  if (i < pageNumber * recordsPerPage && i + 1 > (pageNumber - 1) * recordsPerPage) {
    // show the students
    $(studentList[i]).show();
    }
  }
}
const appendPageLinks = (studentList) => {
  // determine how many pages for this student list
  let numberOfPages = Math.ceil(studentList / recordsPerPage);
  // create a page link section
  let pageLinks = $('.page').append('<div class="pagination"></div>');
  // “for” every page
  for (var i = 1; i < numberOfPages; i += 1) {
      // add a page link to the page link section
      $(pageLinks).append('li' + '<a href="#">' + i + '</a>');
  // remove the old page link section from the site
  $(pageLinks).remove();
  // append our new page link section to the site
  $(pageLinks).append();
  // define what happens when you click a link
  $('.pagination').attr('href').on('click', function() {
      // Use the showPage function to display the page for the link clicked
      showPage(1, studentList);
      // mark that link as “active”
      $(pageLinks a).addClass('active');
     });
   }
}
appendPageLinks();

 function searchList() {
     // Obtain the value of the search input
     $(searchValue).val();

     // remove the previous page link section
     $('.previousPage').on('sticky-end', function() {
     $('.email-text').remove();
     });


     // Loop over the student list, and for each student…
 // ...obtain the student’s name…
 // ...and the student’s email…
 // ...if the search value is found inside either email or name…
     		// ...add this student to list of “matched” student
     // If there’s no “matched” students…
            // ...display a “no student’s found” message
     // If over ten students were found…
            // ...call appendPageLinks with the matched students
    // Call showPage to show first ten students of matched list

    // Reset form fields
    $('searchValue').val("Search for students...");

 }
