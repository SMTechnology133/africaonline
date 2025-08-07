//This is a global JS module of the free service

//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('show'); 
}); 
//________________________________

$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});
//________________________________

$(document).ready (function(){
$("img").attr("loading", "lazy");
});
//________________________________

//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn1").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 
//________________________________


//custom alert box script
  function showAlert(message) {
    document.getElementById("alertMessage").textContent = message;
    document.getElementById("customAlert").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    // Play the alert sound
    const sound = document.getElementById("alertSound");
    sound.currentTime = 0;
    sound.play();
  }

  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
//end custom alert box script

//________________________________

//script to generate QR Code
  const modal = document.getElementById("qrModal");
  const qrContainer = document.getElementById("qrcode");
  const websiteURL = "https://example.com";

  function showModal() {
    qrContainer.innerHTML = ""; // Clear old QR
    new QRCode(qrContainer, {
      text: websiteURL,
      width: 200,
      height: 200,
      colorDark: "teal",
      colorLight: "orange",
      correctLevel: QRCode.CorrectLevel.H
    });

    modal.classList.remove("hide");
    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");

    // Wait for animation to finish before hiding
    setTimeout(() => {
      modal.style.display = "none";
      qrContainer.innerHTML = "";
    }, 300); // Matches the transition duration
  }

  // Also close modal if clicking outside the modal content
  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  }
  	//end script to generate QR Code

//________________________________

 	//code to share application
 	//universal functione
    function shareWebsite() {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          text: 'Check out this website!',
          url: window.location.href
        })
        .then(() => console.log('Thanks for sharing!'))
        .catch((error) => console.error('Sharing failed:', error));
      } else {
        alert("Your browser doesn't support the Web Share API.");
      }
    }
  //end code to share application

//________________________________

//speech module profiler component 
//speech 0
function profiler0() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("This user interface component is easy to use, created mobile phone first you can edit and run it on your smart phone, alternatively with a little knowledge you can deploy your work on the Internet. You does not need any programming knowledge to use this component, by logically following the instructions provided in this documentation,  you can almost  create profiles on any subject of your interest, from prominent people, celebrities in all fields to animals and plants, it can serve as a classification system of some sort. The component is for purpose of learning web programming,  it is free you can change it, modify it or share it, in accordance  with terms of service. For more details view the documentation file .");
  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice
  // Speak the text
  speechSynthesis.speak(utterance);
}
//end of speech 0

//________________________________

//javascript code to search my website local search of the free service
//List of all the websites
    const sitePages = [
      { title: "Biology", url: "file:///storage/emulated/0/projects/vlibrary/homePage.html" },
      
      { title: "English", url: "file:///storage/emulated/0/projects/vlibrary/africaOnline.html" },
      
      { title: "Mathematics", url: "contact.html" },
      
      { title: "Geography", url: "products.html" },
      
      { title: "Chemistry", url: "services.html" }
    ];
    //End List of all the websites

    function searchSite() {
      const query = document.getElementById("searchBox").value.toLowerCase();
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      const matches = sitePages.filter(page =>
        page.title.toLowerCase().includes(query) || page.url.toLowerCase().includes(query)
      );

      if (matches.length === 0 && query !== "") {
        resultsDiv.innerHTML = "<p>No results found.</p>";
      } else {
        matches.forEach(page => {
          const link = document.createElement("a");
          link.href = page.url;
          link.textContent = page.title;
          resultsDiv.appendChild(link);
        });
      }
    }
    	//end javascript code to search my website local search of the free service
    	
//________________________________
    	
    		//code to enlage images
    const images = document.querySelectorAll('.clickable-image');

    images.forEach(image => {
      image.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from closing immediately
        // Remove 'enlarged' from other images
        images.forEach(img => {
          if (img !== image) img.classList.remove('enlarged');
        });
        // Toggle this image
        image.classList.toggle('enlarged');
      });
    });

    // Close any enlarged image when clicking outside
    document.addEventListener('click', () => {
      images.forEach(img => img.classList.remove('enlarged'));
    });
	//end code to enlage images
    	
//________________________________

//functions to open various pages of the application
//odinary functione
function africaOnlineHome(){
	open("https:///www.salmandascript.github.io/AfricaOnline");
}

//________________________________

//arrow functione
myPresident=()=>{
	open("https:///www.salmandascript.github.io/AfricaOnline");
}

//________________________________

seer=()=>{
	open("https:///www.salmandascript.github.io/seer");
}

//________________________________

newsChannel=()=>{
	open("https:///www.salmandascript.github.io/seer");
}

//________________________________

wikipedia=()=>{
	open("https:///www.salmandascript.github.io/wikipedia");
}

//________________________________

learning=()=>{
	open("file:///storage/emulated/0/projects/learning/learning.html");
}

//________________________________

GPT3000=()=>{
	open("https:///www.salmandascript.github.io/wikipedia");
}

//________________________________

vlibrary=()=>{
	open("https://smtechnology133.github.io/africaonline/homePage.html");
}

//________________________________

vlibrary1=()=>{
	open("https://smtechnology133.github.io/africaonline/vlibrary.html");
}

//________________________________

onlineShoping=()=>{
	open("file:///storage/emulated/0/projects/adverts/adverts.html");
}

primaryLevel=()=>{
	open("https://smtechnology133.github.io/africaonline/EnglishMSCE/subjects.html");
}

juniorLevel=()=>{
	open("https://smtechnology133.github.io/africaonline/EnglishMSCE/subjects.html");
}

seniorLevel=()=>{
	open("https://smtechnology133.github.io/africaonline/EnglishMSCE/subjects.html");
}
//endfunctions to open various pages

//functione to change button background color on click
function color(element) {
  element.style.backgroundColor = "maroon";
}
//end functione to change button background color on click