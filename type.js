var easy_words=["the", "of", "and", "a", "to", "inc", "livro", "is" ,"that", "will", "why", "she", "stop", "please", "as", "right", "left", "pause", "one", "need", "star","where", "said", "and", "each", "word", "keyboard", "mouse", "smartphone", "computer", "she", "do", "their", "job", "with", "love", "but","button", "stopwatch", "apple", "pen", "capsule", "door", "knock", "cup", "head", "car", "motor", "wheel", "air", "shoes"];
var count=0;
var correct=0;
var incorrect=0;

$(window).keypress(function(e){
    if(e.which == 32){
        var word=document.getElementById("container1").value;
        if(easy_words[count].trim()==word.trim()){
            $("#"+count).toggleClass("right");
            correct++;
        }
        else{
            $("#"+count).toggleClass("wrong");
            incorrect++;
        }
        count++;
        document.getElementById("container1").value="";
    }
});
document.getElementById("container1").onclick=function(){
    var timeleft=30;
    var wpm;
    var downloadTimer = setInterval(function(){
        document.getElementById("countdown").innerHTML = timeleft;
        timeleft-=1;
        if(timeleft<=-2){
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML="Time-up"
            if(timeleft==-2){
                wpm=correct/0.5;
                document.getElementById("result").innerHTML+="\nCorrectWords:"+correct;
                document.getElementById("result").innerHTML+="\n\nIncorrectWords:"+incorrect;
                document.getElementById("result").innerHTML+="\n\nWPM:"+wpm;
            }
        }
    },1000);
}
$(".restart").click(function(){
    location.reload();
})