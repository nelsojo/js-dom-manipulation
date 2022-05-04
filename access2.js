//grabing elements:

//we first need an entry point into DOM

console.log("document ==--->", document)
console.log("document.body ==--->", document.body)
body=document.body
//Going down into the DOM == Accessing child nodes
//accessing a child node from the body
var bodyChild = document.body.childNodes
console.log("body.childNodes==--->", bodyChild)

//access a specific child
//the value at first index, 1, should be header area
var bodyChild_First = document.body.childNodes[1]
console.log("1st child of body==--->", bodyChild_First)

//Note:
//the value at Zero index, 0, is a text area
var bodyChild_Zero = document.body.childNodes[0]
console.log("0th child of body ==--->", bodyChild_Zero)

var FirstChild_bodyChild = bodyChild_First.childNodes[1]
console.log("1st child of body's 1st child ==--->", FirstChild_bodyChild)

//Going up the DOM == Accessing parent nodes

var firstChildParent = bodyChild_First.parentNode
console.log("Parent of 1st child ==--->", firstChildParent)

var zeroChildParent = bodyChild_Zero.parentNode
console.log("Parent of 0th child ==--->", zeroChildParent)

var grandChildParent = FirstChild_bodyChild.parentNode
console.log("Parent of grand child ==--->", grandChildParent)

var GreatParent = grandChildParent.parentNode
console.log("The begining ==--->", GreatParent)

header = grandChildParent

//accessing sibling nodes (more like aunts and uncles)
console.log("The header ==--->", header)
console.log("Next header Node ==--->", header.nextSibling)
console.log("Next x2 header Node ==--->", header.nextSibling.nextSibling)

console.log("Previous header Node ==--->", header.previousSibling)
console.log("Previous x2 header Node ==--->", header.previousSibling.previousSibling)


//self access (pointless  b)
console.log("self access The header ==--->", header.nextSibling.previousSibling)

//itterate through nodes in the DOM
var currNode = body
while (currNode) {
    currNode = currNode.firstChild
    console.log("A Node ==--->", currNode)
}

var currNode2 = header
while (currNode2) {
    currNode2 = currNode2.nextSibling
    console.log("A Node ==--->", currNode2)
}

//Precise way to get elements in the DOM
//element access methods:
//id select:

var photoCardContainer = document.getElementById("photo-card-container")
console.log("photoCardContainer ==--->", photoCardContainer)

//class select:
var photoCards = document.getElementsByClassName("photo-card")
console.log("photoCards ==--->", photoCards)

//loop through cards
for (var i=0; i<photoCards.length; i++){
    console.log("photoCards"+" "+[i]+" "+"==--->", photoCards[i])
}

//getting elements by tag name, like links for example

var links = document.getElementsByTagName('a')
console.log("links ==--->", links)

//accessing a very specific element

var rightNavItem = document.querySelector('.navitem.right')
console.log("rightNavItem ==--->", rightNavItem)

var allNavItems = document.querySelectorAll('li.navitem')
console.log("allNavItems ==--->", allNavItems)

//doing stuff with the content
var firstPhotoCard = photoCards[0]
console.log("firstPhotoCard.innerHTML ==--->", firstPhotoCard.innerHTML)
console.log("firstPhotoCard.textContent ==--->", firstPhotoCard.textContent)
console.log("firstPhotoCard.classList ==--->", firstPhotoCard.classList)

var firstLink = links[0]
console.log("firstLink.href ==--->", firstLink.href)
firstLink.href = "http://oregonstate.edu"



