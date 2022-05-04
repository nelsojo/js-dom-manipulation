//How NOT to create DOM content. This will make a site
//vulnerable to cross site scripting attacks
/*
var photoCardContainer = document.getElementById("photo-card-container")
var evilUserSuppliedValue = "<section class ='photo-card'>Very Safe Content</section>"
photoCardContainer.innerHTML += evilUserSuppliedValue

var photoCardContainer2 = document.getElementById("photo-card-container")
var evilUserSuppliedValue2 = "More Very Safe Content"
photoCardContainer2.innerHTML += "<section class ='photo-card'>" + evilUserSuppliedValue2+ "</section>" 

//this content inserts innerhtml to pop up a alert. This could be user supplied 
//var photoCardContainer3 = document.getElementById("photo-card-container")
//var veryEvilUserValue = "<img src=x onerror=\"alert('This page has been HAXORED!!!!')\" />"
//photoCardContainer3.innerHTML += "<section class ='photo-card'>" + veryEvilUserValue + "</section>"
 */

//how to create DOM content

//this function will generate new content, a photCard
//Notice the functions have 2 main pieces of info to create them 
//Below is the html info that describes a photocard

//<section class="photo-card">
//     <div class="img-container">
//       <img class="person-photo-img" src={photoURL}
//    </div>
//    <div class="caption">
//      {caption}
//    </div>
//  </section>
var photoCardContainer = document.getElementById("photo-card-container")

function createPhotoCard(photoURL, caption){

    // 1) Create a section
    var photoCardSection = document.createElement('section')
    console.log("==section", photoCardSection)

    // 2) Add needed classes to the newly created section
        // a) Just the the section class 'photo-card' is needed
    photoCardSection.classList.add('photo-card')
    photoCardSection.classList.add('another-class')
    photoCardSection.classList.remove('another-class')

    // 3) create a image div and create it's classes
    var imageContainerDiv = document.createElement('div')
    imageContainerDiv.classList.add('img-container')

    // 4) make section a parent of div
    photoCardSection.appendChild(imageContainerDiv)

    // 5) create an image element
     var imgElement = document.createElement('img')
     imgElement.classList.add('person-photo-img')
     imgElement.src = photoURL

    // 6) Make div a parent of image
    imageContainerDiv.appendChild(imgElement)

    // 7) create a caption
    var captionDiv = document.createElement('div')
    captionDiv.classList.add('caption')
    captionDiv.textContent = caption

    // 8) make section a parent of div
    photoCardSection.appendChild(captionDiv)


    //add the content to the site
    photoCardContainer.appendChild(photoCardSection)
}

createPhotoCard("http://placekitten.com/480/480?image=1", "Luke as a Kitty")