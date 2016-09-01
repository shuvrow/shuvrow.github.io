/**
 * Created by bappu on 9/1/16.
 */

var welcomeString='Working on It!! Wait  a little longer!!!';
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
    $('#nameBack').css('display','block');
    $('.working').css('display','none');
    $('.sideView').append("<img src='images/idea.gif' class='working'>");

});
$('.mainContent').on('click','#nameBack',function(){

    onBackToPoorMe();
});
function onAboutMe(){
    $('.aboutShuvrow').css('display','block');
    $('.learnMore').css('display','block');
}
function onTypeOfWork(){
    $('.sideMenu').css('visibility','hidden');
    $('.pastMe').css('display','block');
    $('.futureMe').css('visibility','visible');
    clearInterval(appendMyApologies);
    $('.mainContent').html('');
    $('.mainContent').css('margin-top','50px');
}
function onBackToPoorMe(){
    $('.sideMenu').css('visibility','visible');
    $('.pastMe').css('display','none');
    $('.futureMe').css('visibility','hidden');
    $('.mainContent > #nameBack').css('display','none');
    $('.sideView > .working').css('display','none');
    $('.sideView').append("<img src='images/working.gif' class='working'>");
}