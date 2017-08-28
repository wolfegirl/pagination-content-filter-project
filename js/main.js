let recordsPerPage = 10;
let $search = $('.page-header').append(' <div class="student-search"><input placeholder="Search for students..."> <button>Search</button></div>');
//let $studentItem = $('.student-item');
let $studentList = $('.student-list').children();
let $countPages = $studentList.length;
let pageNumber;
let $pageLinks;

const showPage = (pageNumber, $studentList) => { /* arguments here for page number and student list */
  // first hide all students on the page
  $($studentList).hide();
  // Then loop through all students in our student list argument
  for (let i = 0; i < $countPages; i += 1) {
  // if student should be on this page number
  if (i < pageNumber * recordsPerPage && i + 1 > (pageNumber - 1) * recordsPerPage) {
    // show the students
    $($studentList[i]).show();
    }
  }
}
// set the default page
//showPage(2, $studentList);


const appendPageLinks = ($studentList) => {
  // determine how many pages for this student list
  let $numberOfPages = Math.ceil($countPages / recordsPerPage);
  // create a page link section
  let $pagination = $('<div class="pagination"></div>');
  $('.page').append($pagination);

  let $ul = $('<ul></ul>');
  $('.pagination').append($ul);

  // “for” every page
  for (var i = 1; i <= $numberOfPages; i += 1) {
    // add a page link to the page link section
    let $pageLinks = $($ul).append('<li><a href="#">' + i + '</a></li>');
  }


  // remove the old page link section from the site - clean up
        $($pageLinks).click(function(){
            $($pageLinks).remove();
            // append our new page link section to the site
            $($pageLinks).append();
        });

  // define what happens when you click a link
  $($pageLinks).click(function(event) {
  // Use the showPage function to display the page for the link clicked
  showPage(event.this, $studentList);
  // mark that link as “active”
  $(this).addClass('active');
  });
}

appendPageLinks($studentList);

 // function searchList() {
 //     // Obtain the value of the search input
 //     let $searchValue = $(search).attr(input).val();
 //
 //     // remove the previous page link section
 //     $('.previousPage').on('sticky-end', function() {
 //     $('.email-text').remove();
 //     });
 //
 //
 //     // Loop over the student list, and for each student…
 // // ...obtain the student’s name…
 // // ...and the student’s email…
 // // ...if the search value is found inside either email or name…
 //     		// ...add this student to list of “matched” student
 //     // If there’s no “matched” students…
 //            // ...display a “no student’s found” message
 //     // If over ten students were found…
 //            // ...call appendPageLinks with the matched students
 //    // Call showPage to show first ten students of matched list
 //
 //    // Reset form fields
 //    $('searchValue').val("Search for students...");
 //
 // }
