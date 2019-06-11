//option variables arrays
var pop= ["The Most by Miley Cyrus", "3 Nights by Dominic Fike", "ME! by Taylor Swift"]
var rb= ["All Year by 11:11","My Bad by Khalid","Hard Place by H.E.R."]
var indie= ["Bags by Clairo","Honeypie by Johnny Utah","Weekend Friend by Goth Babe"]
var alt= ["We Fell in Love in October by Girl in Red","Dreams Tonite by Alvvays","Your Best American Girl by Mitski"]
var bedpop=["How Was Your Day? by Mellow Fellow","Cooks by Still Woozy","Drowsy by Banes World"]

//option variable text
var popTxt= document.querySelector('#pop-text')
var rbTxt= document.querySelector('#rb-text')
var indieTxt= document.querySelector('#indie-text')
var altTxt= document.querySelector('#alt-text')
var bedpopTxt= document.querySelector('#bedpop-text')

//option buttons
var popButton= document.querySelector('#pop-btn')
var rbButton= document.querySelector('#rb-btn')
var indieButton= document.querySelector('#indie-btn')
var altButton= document.querySelector('#alt-btn')
var bedpopButton= document.querySelector('#bedpop-btn')

//text to put into the result on button click
popButton.addEventListener('click', generateText('pop'))
rbButton.addEventListener('click', generateText('rb'))
indieButton.addEventListener('click', generateText('indie'))
altButton.addEventListener('click', generateText('alternative'))
bedpopButton.addEventListener('click', generateText('bedpop'))

//function to generate the text to display for result
function generateText(result) {
  return i => {
    console.log(`${result} clicked`)
    var random = Math.floor(Math.random() * 3)
    var text;

    if (result === 'pop') {
      text = pop[random]
      popTxt.innerText = text
    } else if (result === 'rb') {
      text = rb[random]
      rbTxt.innerText = text;
    } else if (result === 'indie') {
      text = indie[random]
      indieTxt.innerText = text;
    }  else if (result === 'alternative') {
      text = alt[random]
      altTxt.innerText = text;
    }  else {
      text = bedpop[random]
      bedpopTxt.innerText = text;
    }
  }
}
