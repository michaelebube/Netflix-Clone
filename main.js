const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//Select tab content item
function selectItem(e) {
    removeBorder()
    removeShow()
    // Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //Add Show Class
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(function(item) {item.classList.remove('tab-border')})
}

function removeShow() {
    tabContentItems.forEach(function(item) {item.classList.remove('show')});
}


//Listen for tabclick
tabItems.forEach(item => item.addEventListener('click', selectItem))