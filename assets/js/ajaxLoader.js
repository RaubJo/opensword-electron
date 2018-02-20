//WebSword
var parsedPost;
var path;

var BIB_TXT_PATH;
var BIB_TXT;

function Show() {
  $('#bibleContent').empty();
  $('#bibleContent').append(BIB_TXT.responseText);
	$('#bibleContent').hide();
	$('#bibleContent').fadeIn();
}

function loadBibText(book,chapter){
  BIB_TXT_PATH = 'bible/' + book + '/' + chapter + '.txt';
  BIB_TXT = $.ajax(BIB_TXT_PATH);
  setTimeout(Show,500);
}


