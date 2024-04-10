const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')

// Add open class
menuToggle.onclick= function(){
    navigation.classList.toggle('open')
}

const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item) =>
    // Remove active class from all list items
    item.classList.remove('active'))
    // Add active class to the clicked list item
    this.classList.add('active')
}
// Add event listener to all list items
list.forEach((item) =>
item.addEventListener('click', activeLink))