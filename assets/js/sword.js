/* global $*/
/* global top*/
//Global Variables
var BKLS_WIDTH;
var BKLS_HEIGHT;
var CHLS_WIDTH;
var SELECTED_BOOK = 1;
var SELECTED_CHAPTER = 1;
var SELECTED_VERSE = 1;
var BIB_TXT;
var BIB_TXT_PATH;
var BIB_TXT_HEIGHT;
var CMT_TXT_PATH;
var CMT_TXT;
var DIC_TXT_PATH;
var DIC_TXT;
var BOOKS = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
var BOOK_NAME;
var CURRENT_LOADED_CHAPTER;

//Update Dimension(s) Manager
function updateWindow() {
    $("#interface").css('height',($("html").height()*.97));
    BKLS_WIDTH = $("#booksWrapper").width();
    BKLS_HEIGHT = $('#booklist').css('height', '100%');
    CHLS_WIDTH = $("#chapterList").css('height','100%');
    $("#bibleContent").css('height','100%');
    $("#selected").css("width",$("#selWrap").width());
}

//Global Listeners
window.addEventListener('resize', function(e){
      e.preventDefault();
      updateWindow();
    })

//Setup
$(window).ready(function () {
    BKLS_HEIGHT = $(window).height() * .40;
    BIB_TXT_HEIGHT = $("window").height() * .41;
    $("#booklist").css("height",BKLS_HEIGHT);
    $("#chapterList").css("height",BKLS_HEIGHT);
    $('#bibleContent').css('height',BIB_TXT_HEIGHT);
    $("#selected").css("width",$("#selWrap").width());
    updateWindow();
  $("#booklist").menu({
        draggable: false,
        resizable: false
    });
  $("#bibleContent").menu({
    menus: "ol",
    draggable: false,
    resizable: false
  });
    $("#booklist").menu();//Init #booklist Menu

    loadDefaults();
});

//Chapter List Population Function. The toggle is to trigger the destruction of the $().menu(); to institute a new one. Destruction should only happen if there is a pre-existing list hence the call on line 149.
function chapterPop(chapters,toggle){
    if(toggle == 1){
        $("#chapterList").menu("destroy");
    }else{};
    $("#chapterList").empty();
    for(var i = 1;i <= chapters;i++){
        var text = '<li><div onclick="selectChap('+i+')">'+i+'</div></li>';
        $("#chapterList").append(text);
    }
    $("#chapterList").menu({
        draggable: false,
        resizable: false,
        width: BKLS_WIDTH,
        height: BKLS_HEIGHT
    });
    $("#chapterList").menu();

}

function loadChapterList() {
    switch(SELECTED_BOOK){
        case '1': chapterPop(50,1); break;//Genesis
        case '2': chapterPop(40,1); break;//Exodus
        case '3': chapterPop(27,1); break;//Leviticus
        case '4': chapterPop(36,1); break;//Numbers
        case '5': chapterPop(34,1); break;
        case '6': chapterPop(24,1); break;
        case '7': chapterPop(21,1); break;
        case '8': chapterPop(4,1); break;
        case '9': chapterPop(31,1); break;
        case '10': chapterPop(24,1); break;
        case '11': chapterPop(22,1); break;
        case '12': chapterPop(25,1); break;
        case '13': chapterPop(29,1); break;
        case '14': chapterPop(36,1); break;
        case '15': chapterPop(10,1); break;
        case '16': chapterPop(13,1); break;
        case '17': chapterPop(10,1); break;
        case '18': chapterPop(42,1); break;
        case '19': chapterPop(150,1); break;
        case '20': chapterPop(31,1); break;
        case '21': chapterPop(12,1); break;
        case '22': chapterPop(8,1); break;
        case '23': chapterPop(66,1); break;
        case '24': chapterPop(52,1); break;
        case '25': chapterPop(5,1); break;
        case '26': chapterPop(48,1); break;
        case '27': chapterPop(12,1); break;
        case '28': chapterPop(14,1); break;
        case '29': chapterPop(3,1); break;
        case '30': chapterPop(9,1); break;
        case '31': chapterPop(1,1); break;
        case '32': chapterPop(4,1); break;
        case '33': chapterPop(7,1); break;
        case '34': chapterPop(3,1); break;
        case '35': chapterPop(3,1); break;
        case '36': chapterPop(3,1); break;
        case '37': chapterPop(2,1); break;
        case '38': chapterPop(14,1); break;
        case '39': chapterPop(4,1); break;
        case '40': chapterPop(28,1); break;
        case '41': chapterPop(16,1); break;
        case '42': chapterPop(24,1); break;
        case '43': chapterPop(21,1); break;
        case '44': chapterPop(28,1); break;
        case '45': chapterPop(16,1); break;
        case '46': chapterPop(16,1); break;
        case '47': chapterPop(13,1); break;
        case '48': chapterPop(6,1); break;
        case '49': chapterPop(6,1); break;
        case '50': chapterPop(4,1); break;
        case '51': chapterPop(4,1); break;
        case '52': chapterPop(5,1); break;
        case '53': chapterPop(3,1); break;
        case '54': chapterPop(6,1); break;
        case '55': chapterPop(4,1); break;
        case '56': chapterPop(3,1); break;
        case '57': chapterPop(1,1); break;
        case '58': chapterPop(13,1); break;
        case '59': chapterPop(5,1); break;
        case '60': chapterPop(5,1); break;
        case '61': chapterPop(3,1); break;
        case '62': chapterPop(5,1); break;
        case '63': chapterPop(1,1); break;
        case '64': chapterPop(1,1); break;
        case '65': chapterPop(1,1); break;
        case '66': chapterPop(22,1); break;
    }
}


function selectBook(book){
    SELECTED_BOOK = book;
    loadChapterList();
}

function setReferenceText() {
    BOOK_NAME = BOOKS[SELECTED_BOOK-1];
    document.getElementById("selected").value = BOOK_NAME + " " + SELECTED_CHAPTER + ":" + SELECTED_VERSE;

}

function selectChap(chapter){
    SELECTED_CHAPTER = chapter;
    loadBibText(SELECTED_BOOK,SELECTED_CHAPTER);
}

function Show() {
    noFile(BIB_TXT,1);
  $('#bibleContent').empty();
  $('#bibleContent').append(BIB_TXT.responseText);
  $('#bibleContent').hide();
  $('#bibleContent').fadeIn();
}

function Show_CMT() {
    noFile(CMT_TXT,2);
    $('#cmtContent').empty();
    $('#cmtContent').append(CMT_TXT.responseText);
    $('#cmtContent').hide();
    $('#cmtContent').fadeIn();
}

function Show_DIC() {
    noFile(DIC_TXT,3);
    $('#dicContent').empty();
    $('#dicContent').append(DIC_TXT.responseText);
    $('#dicContent').hide();
    $('#dicContent').fadeIn();
}

function loadBibText(book,chapter){//gets the chapter *.txt file and calls Show() and __highlightFirstVerse()
  BIB_TXT_PATH = '../modules/bible/' + book + '/' + chapter + '.txt';
  BIB_TXT = $.ajax(BIB_TXT_PATH);
  console.log(BIB_TXT_PATH);
  setTimeout(Show,500);
  setTimeout(__highlightFirstVerse,750);
}

function loadCmtText(rsc, book, chapter) {
    if(rsc == ''){//Sets the default resources to the treasury of scriptural knowledge
        rsc = 'tsk';
    }
    CMT_TXT_PATH = '../modules/cmt/' + rsc + '/' + book + '/' + chapter + '.txt';
    CMT_TXT = $.ajax(CMT_TXT_PATH);
    console.log(CMT_TXT_PATH);
    setTimeout(Show_CMT, 500);
}

function loadDicText(lang,refNum) {
    if(lang == 0){
        DIC_TXT_PATH = '../modules/dic/h/' + refNum + '.txt';
    }
    else if(lang == 1){
        DIC_TXT_PATH = '../modules/dic/g/' + refNum + '.txt';
    }
    DIC_TXT = $.ajax(DIC_TXT_PATH);
    setTimeout(Show_DIC,500);
}

function noFile(text,i){
    if(text == " " || text == ""){
        if(i == 1){
            BIB_TXT = "<p> This text has not been added yet. Sorry.</p>";
        }
        else if(i == 2){
            CMT_TXT = "<p> This text has not been added yet. Sorry.</p>";
        }
        else if(i == 3){
            DIC_TXT = "<p> This text has not been added yet. Sorry.</p>";
        }
    }
}

function __initHighlight(){
    //This is what highlights the selected verse when clicked. It has to go after the loadDefaults() is called or there will be nothing to work with.
    //ui-state-highlight has been modified to keep the text black for better contrast.
    $("#loadedChapter li").on('click',function () {
        var thisList = $("#loadedChapter li");
        for(var i = 0;i <= thisList.length;i++){
            if($($(thisList).get(i)).hasClass("ui-state-highlight")){
                $($(thisList).get(i)).removeClass("ui-state-highlight");
                $($(thisList).get(i)).removeClass("ui-corner-all");

            }
            else{};
        }
        $(this).addClass("ui-state-highlight");
        $(this).addClass("ui-corner-all");
        SELECTED_VERSE = $("#loadedChapter li").index(this) + 1 ;
        setReferenceText();
    });
}

function __highlightFirstVerse(){//This is what applies ui-state-highlight to the first verse of the selected chapter
    $($("#loadedChapter li").get(0)).addClass("ui-state-highlight");
    $($("#loadedChapter li").get(0)).addClass("ui-corner-all");
    SELECTED_VERSE = 1;
    setReferenceText();
    __initHighlight();
}

function loadDefaults(){
    chapterPop(50,0);// I needed to populate the chapter selection list without destruction so that loadChapterList() would work properly.
    loadBibText('1','1');//Loads Genesis 1 as the initial text.
    loadDicText(0,1);//Loads the first Hebrew Word
    loadCmtText('',1,1);
    setTimeout(__initHighlight,500);//Initializes the on('click') listener for highlighting
    setTimeout(__highlightFirstVerse,750);//Highlights the first verse of the selected chapter.
}
