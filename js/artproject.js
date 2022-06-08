// Code Reference: Week 9 Exercise

console.log("Script running!");

let myName = "Kari Wang";
console.log(myName);

function getVowelCount (aString) {
    let lowerCaseString = aString.toLowerCase();
    let modifiedString = lowerCaseString.replaceAll("a","");
    modifiedString = modifiedString.replaceAll("e","");
    modifiedString = modifiedString.replaceAll("i","");
    modifiedString = modifiedString.replaceAll("o","");
    modifiedString = modifiedString.replaceAll("u","");
    modifiedString = modifiedString.replaceAll("y","");
    let myString = lowerCaseString.length - modifiedString.length;
    return myString;
}

let numVowelsInName = getVowelCount(myName);
console.log(numVowelsInName);

$('#EarringHairclips').css('display','none');
$('#btnBraceletNecklace').addClass('active');

let button = $('.btn-group');

button.on('click', function(event) { 
    $('#BraceletNecklace, #EarringHairclips').toggle("fast"); 
    $('#bntBraceletNecklace, #btnEarringHairclips').toggleClass('active'); 
})

$('img').css({'cursor': 'pointer'});

$('img').attr('data-bs-toggle', 'modal'); 
$('img').attr('data-bs-target', '#theModal');

$('#theModal').on('show.bs.modal', function(event) {
    let imageClicked = $(event.relatedTarget);
    $('#modalImage').attr("src", imageClicked.attr('src'));
    $('#modalImage').attr("alt", imageClicked.attr('alt'));
});
