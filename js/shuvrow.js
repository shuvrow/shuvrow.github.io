var welcomeString = "Working on It!! Wait  a little longer!!!";
var count=0;
var msg="<span class='fa fa-paperclip text-primary'></span>";
welcomeString=welcomeString.split(" ");


var appendMyApologies=setInterval(function(){
    if(count<welcomeString.length)
    {
        showMsg(welcomeString[count]);
        count++;
    }}, 1000);

function showMsg(msgg)
{
    msg +=msgg+' ';
    $('.mainContent').html(msg);
}

$('.sideView').append("<img src='images/working.gif' class='working'>");

$('#aboutMe').click(function(){
    onAboutMe();

});
$('.typeOfWork').click(function(){
    onTypeOfWork();
    var content=$('.myDayToDayLife').html();
    $('.mainContent').html(content);
    $('.working').css('display','none');
    $('.sideView').append("<img src='images/idea.gif' class='working'>");

});
$('#nameBack').click(function(){

    onBackToPoorMe();
});

function onAboutMe(){
    $('.aboutShuvrow').css('display','block');
    $('.learnMore').css('display','block');
}
function onTypeOfWork(){
    showContent();
    clearInterval(appendMyApologies);
    $('.mainContent').html('');
    $('.mainContent').css('margin-top','50px');
}
function onBackToPoorMe(){
    hideContent();
    $('.sideView > .working').css('display','none');
    $('.sideView').append("<img src='images/working.gif' class='working'>");
}

function showContent(){
    $('.sideMenu').css('display','none');
    $('.pastMe').css('display','block');
    $('.workExperiences').css('display','block');
    $('.trainings').css('display','block');
    $('.contribution').css('display','block');
    $('.otherActivity').css('display','block');
    $('#nameBack').css('visibility','visible');
}

function hideContent(){
    $('.sideMenu').css('display','block');
    $('.pastMe').css('display','none');
    $('.workExperiences').css('display','none');
    $('.trainings').css('display','none');
    $('.contribution').css('display','none');
    $('.otherActivity').css('display','none');
    $('#nameBack').css('visibility','hidden');
}

$.getScript('js/userInformations.js');
