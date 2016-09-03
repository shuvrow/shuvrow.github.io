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
    $('.workExperiences').css('display','block');
    $('.trainings').css('display','block');
    $('.contribution').css('display','block');
    $('.otherActivity').css('display','block');

    $('.futureMe').css('visibility','visible');
    clearInterval(appendMyApologies);
    $('.mainContent').html('');
    $('.mainContent').css('margin-top','50px');
}
function onBackToPoorMe(){
    $('.sideMenu').css('visibility','visible');
    $('.pastMe').css('display','none');
    $('.workExperiences').css('display','none');
    $('.trainings').css('display','none');
    $('.futureMe').css('visibility','hidden');
    $('.mainContent > #nameBack').css('display','none');
    $('.sideView > .working').css('display','none');
    $('.sideView').append("<img src='images/working.gif' class='working'>");
}



function updateData(infoType){
    $('.pastContent').html('');
    $('.contentTitle').html('');
    $.getJSON("js/project-data.json", function(json) {

        $.each(json,function (index,data){
            if(index=='past' && index==infoType){
                $('.contentTitle').html('<strong>Projects I have Done</strong>');
                $.each(data, function(index2,data1){
                    if(index2=='laravel' || index2=='openCart' || index2=='underGrade' ){
                        if(index2=='underGrade')
                        {
                            $('.pastContent').append('<h2>University Projects</h2>');
                        }
                        else if(index2=='laravel'){
                            $('.pastContent').append('<h2>Laravel Projects</h2>');
                        }
                        else{
                            $('.pastContent').append('<h2>OpenCart Projects</h2>');
                        }
                        $.each(data1, function(index3,data2){
                            $('.pastContent').append("<p><b class='projectTitle'>Project : </b>"+data2.title+
                                "<br><b class='projectDes'>Description : </b>"+data2.description+
                                "<br><b class='projectTool'>Tools <icon class='fa fa-wrench' aria-hidden='true'></icon>: </b>"+data2.tools+
                                "<br><b class='projectStatus'>Status : </b>"+data2.status+"</p>");
                        });
                    }
                });
            }
            else if(index=="experiences" && index==infoType){
                $('.contentTitle').html('<strong>Work Experiences</strong>');
                $.each(data, function(index2,data1){
                    $('.pastContent').append("<p><b class='projectTitle'>Organization Name <icon class='fa fa-bank' aria-hidden='true'></icon>: </b>"+data1.companyName+
                        "<br><b class='projectDes'>Position <icon class='fa fa-binoculars' aria-hidden='true'></icon>: </b>"+data1.position+
                        "<br><b class='projectTool'>Duration <icon class='fa fa-clock-o' aria-hidden='true'></icon>: </b>"+data1.time+
                        "<br><b class='projectStatus'>Responsibilities <icon class='fa fa-wrench' aria-hidden='true'></icon>: </b>"+data1.responsibility+"</p>");
                });
            }
            else if(index=="training" && index==infoType){
                $('.contentTitle').html('<strong>Training Histories</strong>');
                $.each(data, function(index2,data1){
                    $('.pastContent').append("<p><b class='projectTitle'>Training : </b>"+data1.title+
                        "<br><b class='projectDes'>Description : </b>"+data1.description+
                        "<br><b class='projectTool'>Major Topics <icon class='fa fa-wrench' aria-hidden='true'></icon>: </b>"+data1.topics+
                        "<br><b class='projectStatus'>Things Covered : </b>"+data1.learned+
                        "<br><b class='projectStatus'>Status : </b>"+data1.status+"</p>");

                });
            }
            else if(index=="contribution" && index==infoType){
                $('.contentTitle').html('<strong> Open Source Contributions </strong>');
                $.each(data, function(index2,data1){
                    $('.pastContent').append("<p><b class='projectTitle'>Name : </b>"+data1.title+
                        "<br><b class='projectDes'>Description : </b>"+data1.description+
                        "<br><b class='projectTool'>Technologies <icon class='fa fa-wrench' aria-hidden='true'></icon>: </b>"+data1.tools+
                        "<br><b class='projectStatus'>Status : </b>"+data1.status+
                        "<br><b class='projectUrl'>Web Address : </b><a href='"+data1.url+"'>"+data1.title+"</a></p>");

                });
            }
            else if(index=="otherActivity" && index==infoType){
                $('.contentTitle').html('<strong> Online Activities </strong>');
                $.each(data, function(index2,data1){
                    $('.pastContent').append("<p><b class='projectTitle'>Name : </b>"+data1.title+
                        "<br><b class='projectDes'>Description : </b>"+data1.description+
                        "<br><b class='projectTool'>Technologies <icon class='fa fa-wrench' aria-hidden='true'></icon>: </b>"+data1.topics+
                        "<br><b class='projectStatus'>Status : </b>"+data1.status+
                        "<br><b class='projectUrl'>Web Address : </b><a href='"+data1.url+"'>"+data1.title+"</a></p>");
                });
            }


        });
    });
    $('#myModal').modal('show');
}

