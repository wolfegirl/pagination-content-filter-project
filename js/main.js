const recordsPerPage = 10;
let $studentList = $('.student-list').children();
let $studentListLength = $studentList.length;
let pageNumber;
let $pageLinks;
let matchedStudentList = [];

//function to show student list by 10s and page number
const showPage = (pageNumber, showStudentList) => { /* arguments here for page number and student list */
  // first hide all students on the page
  $($studentList).hide();
  // Then loop through all students in our student list argument
  for (let i = 0; i < showStudentList.length; i += 1) {
  // if student should be on this page number - grouping into 10
  if (i < pageNumber * recordsPerPage && i + 1 > (pageNumber - 1) * recordsPerPage) {
    // show the students
    $(showStudentList[i]).show();
    }
  }
}
  // test this function.
  //showPage(2, $studentList);

const appendPageLinks = (appendStudentList) => {
  // determine how many pages for this student list
  let $numberOfPages = Math.ceil(appendStudentList.length / recordsPerPage);
  // create a page link section
  let $pagination = $('<div class="pagination"></div>');
  $('.page').append($pagination);

  let $ul = $('<ul></ul>');
  $('.pagination').append($ul);

  // “for” every page
    for (var i = 1; i <= $numberOfPages; i += 1) {

      //add a page link to the page link section for every page
      let $pageLinks = $($ul).append('<li><a href="#">' + i + '</a></li>');

      //create a default page 1
      if (i === 1) {
      //call the function with argument page 1
      showPage(1, appendStudentList);
      //add active class to default page 1
      $('.pagination ul li a').attr('class', 'active');
      //end default page 1
      } //end if
    } //end the loop

  // remove the old page link section from the site - clean up
  $($pageLinks).remove();

  // append our new page link section to the site
  $('.pagination').append($pageLinks);

  // define what happens when you click a link
  $('.pagination li a').click(function() {
      // create a variable to hold the value of the links (this = pagination links)
      let $aClicked = $(this).text();
      // Use the showPage function to display the page for the link clicked
      showPage($aClicked, appendStudentList);
      //first remove class to start fresh
      $('.active').removeClass('active');
      // mark new pagination links as “active”
      $(this).addClass('active');
    }); //end click function
  } // end appendPageLinks function

//call the appendPageLinks function with $studentList as argument
appendPageLinks($studentList);

//exceeds --------------------------------------->

//create the search box
let $search = $('.page-header').append('<div class="student-search"><input id="searchInput" placeholder="Search for students..."> <button>Search</button></div>');

function searchList() {
    //start with no students in the matched list
    matchedStudentList.length = 0;
    //change the h2 header when a search is made
    $('h2').replaceWith('<h2>Search Results:</h2>');
    // Obtain the value of the search input
    let $searchValue = $('#searchInput').val().toLowerCase();
    //to check and make sure the $searchValue is passing
    console.log($searchValue);
    // remove the previous page link section
    $('.pagination').remove();
    // Loop over the student list, and for each student…
        for (i = 0; i < $studentListLength; i += 1) {
              // ...obtain the student’s name…
              $studentName = $($studentList[i]).find('h3');
              // ...and the student’s email…
              $studentEmail = $($studentList[i]).find('.email');
              // ...if the search value is found inside either email or name…IndexOf() returns -1 if nothing matches, so !== -1 will see if anything at all matches
              if ($studentName.text().indexOf($searchValue) !== -1 || $studentEmail.text().indexOf($searchValue) !== -1){
                // ...add this student to matchedStudentList array
                matchedStudentList.push($($studentName, $($studentEmail)).parents('.student-item'));
                //we need to hide the student list or the search results will follow the list
                $($studentList).hide();
                //hide the no matches section if there is a match
                $('.no-matches').hide();
                //checking to make sure everything is passing
                console.log($studentName);
                console.log($studentEmail);
                console.log(matchedStudentList);
                console.log(matchedStudentList.length);
            } //end if
          } //end for loop

      // If there’s no “matched” students…
      if (matchedStudentList.length === 0){
          // hide the student list
          $($studentList).hide();
          // display a “no student’s found” message
          $('.page').append('<div class="no-matches"><h2>Sorry, no matches.</h2></div>')
      } // end if

      // If over ten students were found…
      if (matchedStudentList.length > 10) {
        // ...call appendPageLinks with the matched students
        appendPageLinks(matchedStudentList);
      } //end if
    // Call showPage to show first ten students of matched list
    showPage(1, matchedStudentList);
  }
//add a click event for the search button
$('button').click(searchList);
