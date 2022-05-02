var photoCardContainer = document.getElementById("photo-card-container")

var evilUserSuppliedValue = "<img src=x onerror=\"alert('Haxed!')\" />"
// photoCardContainer.innerHTML += "<section class='photo-card'>" + evilUserSuppliedValue + "</section>"

/*
    <section class="photo-card">
        <div class="img-container">
          <img class="person-photo-img" src="{photoUrl}" />
        </div>
        <div class="caption">
          {caption}
        </div>
    </section>
 */
function createPhotoCard(photoUrl, caption) {
    var photoCardSection = document.createElement('section')
    photoCardSection.classList.add('photo-card')
    photoCardSection.classList.add('another-class')
    photoCardSection.classList.add('a-third-class')
    photoCardSection.classList.remove('a-third-class')

    var imgContainerDiv = document.createElement('div')
    imgContainerDiv.classList.add('img-container')
    photoCardSection.appendChild(imgContainerDiv)

    var img = document.createElement('img')
    img.classList.add('person-photo-img')
    img.src = photoUrl
    imgContainerDiv.appendChild(img)

    var captionDiv = document.createElement('div')
    captionDiv.classList.add('caption')
    captionDiv.textContent = caption
    photoCardSection.appendChild(captionDiv)

    console.log("== photoCardSection:", photoCardSection)

    photoCardContainer.appendChild(photoCardSection)
}

createPhotoCard("http://placekitten.com/480/480?image=1", "Luke as a kitty")
createPhotoCard("http://placekitten.com/480/480?image=2", evilUserSuppliedValue)
