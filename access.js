console.log("== document:", document)
console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)

var header = body.childNodes[1]
console.log("== header:", header)
console.log("== header.parentNode:", header.parentNode)
console.log("== header.nextSibling:", header.nextSibling)
console.log("== header.previousSibling:", header.previousSibling)

var currNode = header
while (currNode) {
    currNode = currNode.nextSibling
}

var photoCardContainer = document.getElementById("photo-card-container")
console.log("== photoCardContainer:", photoCardContainer)

var photoCards = document.getElementsByClassName("photo-card")
console.log("== photoCards:", photoCards)
for (var i = 0; i < photoCards.length; i++) {
    console.log("  - photoCards[" + i + "]:", photoCards[i])
}

var links = document.getElementsByTagName('a')
console.log("== links:", links)

var rightNavItem = document.querySelector('.navitem.right')
console.log("== rightNavItem:", rightNavItem)

var allNavItems = document.querySelectorAll('li.navitem')
console.log("== allNavItems:", allNavItems)

var firstPhotoCard = photoCards[0]
console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML)
console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent)
console.log("== firstPhotoCard.classList:", firstPhotoCard.classList)

var firstLink = links[0]
console.log("== firstLink.href:", firstLink.href)
firstLink.href = "https://web.engr.oregonstate.edu/~hessro/teaching/cs290-sp22"
