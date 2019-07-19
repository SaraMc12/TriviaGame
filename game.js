//setup variables for questions, answers, right guess, wrong guess and the answer
// var questions
var timer = 10;
var question = [
    {
        prompt: "What did the girls always do together when they had a bad day?",
        responses: ["(A)Quilt", "(B) Eat Cheesecake", "(C)Get Druuuunk"],
        answer: 1,
         gif: "./images/giphy (1).gif"
    },
    {
        prompt: "What were the names of the Golden Girls?",
        responses: ["(A)Gilda, Lucy, Sheela, and Beth", "(B)Blanch, Rose, Dorthy and Sophia", "(C)Meanie, Grumbles, Stupid and Easy"],
        answer: 1,
        gif: "./images/giphy (4).gif"
    },
     {
     prompt: "What happened to Roses Boyfriend Myles",
    responses:["He turned out to be a goat all along","They got married on the series finalie","She ended it after him and Blanch slept together", "He went into hiding becasue the mob was after him"],
    answer:3,
     gif:"./images/giphy (2).gif"
     },
     {
     prompt: "Where did the Golden Girls take place",
    responses: ["St.Olaf", "LA", "Miami", "Westeros"],
    answer: 2,
     gif: "./images/giphy (5).gif"
     }

];
var correct = 0;
var incorrect = 0;
var unAnswer=0;

var indexQuestion = 0
var score = 0;
var intervalID;
var settimeoutID;
document.querySelector('#submit').style.display = 'none';
// start the game (onclick on the id+"start")


var test = document.getElementById("questionArray");
  
  
// this handler will be executed only once when the cursor moves over the unordered list
test.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "purple";
    
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// test.addEventListener("click", function( event ) {  
//  // alert("clicked")
//     // alert(document.getElementById("questionArray").innerHTML)
//     showresults()

//  }, false);



// this handler will be executed every time the cursor is moved over a different list item
test.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// after the last question show results
function showquestions() {

    document.querySelector('#questions').style.display = '';
    document.querySelector('#displayTime').style.display = '';
    document.querySelector('#questionArray').style.display = '';
   

    

    document.getElementById("questions").innerHTML = question[indexQuestion].prompt
    document.getElementById("questionArray").innerHTML = ""
    for (var i = 0; i < question[indexQuestion].responses.length; i++) {
        var elem = document.createElement("p")
        var text = document.createTextNode(question[indexQuestion].responses[i])
        elem.appendChild(text)
        elem.classList.add("userClick")
        elem.setAttribute("index", i)
        document.getElementById("questionArray").appendChild(elem)

    }
  }
    // document.querySelector(".userClick").addEventListener("click", function(e){
    document.addEventListener("click", function(userCLick){
        
        // console.log(e);
        if(userCLick.target && userCLick.target.className === "userClick"){
          console.log("clicked response")
          // get the index 
          console.log(userCLick.target)
          var index = userCLick.target.getAttribute("index")
          console.log("index response: ", index)
          //compare the index with the response in the question array
          if (question[indexQuestion].answer === parseInt(index)){
              alert("correct")
              correct++
          }
          else{
              alert("incorrect")
              incorrect++
          }

        
          if (indexQuestion > question.length){
              showresults()
          }
          else{
          showquestions()
          }
      }
    })

function countDown(){
 timer--
 showquestions();
 document.querySelector("#displayTime").innerHTML="time: " + timer
 if(timer===0)
 {
   
    showresults(); 

    
 }
}

function displayAnswer(){
    
}
function showresults(){
    clearInterval(intervalID)
    timer=10;
  // alert("Time is up!!")
  document.querySelector('#answer').style.display = '';
  document.querySelector('#gif').style.display = '';

    document.querySelector('#questions').style.display = 'none';
    document.querySelector('#displayTime').style.display = 'none';
    document.querySelector('#questionArray').style.display = 'none';
    var answerIndex= question[indexQuestion].answer;
    document.querySelector("#answer").innerHTML=question[indexQuestion].responses[answerIndex]
    
    var gifPath=question[indexQuestion].gif
    document.querySelector('#answer').style.display = '';
    document.querySelector("#gif").innerHTML="<img src='"+gifPath+"'>";
    indexQuestion++; 

    settimeoutID = setTimeout(start,5000)

}


// alert("Final Score" + score + "/" + question.length);
function start() {
    document.querySelector('#answer').style.display = 'none';
     document.querySelector('#gif').style.display = 'none';

     if(indexQuestion === question.length){
        document.querySelector('#results').style.display = '';
        // document.querySelector('#results').innerHTML = '<p>correct', '<p>incorrect';
        document.querySelector('#results').innerHTML = `<p>Correct: ${correct} Incorrect: ${incorrect}</p>`;

     }else{
        console.log("start clicked")
        // hyde the start button
      
    
        intervalID= setInterval(countDown,1000)
      
        document.querySelector('#start').style.display = 'none';
    
     }
  
}


