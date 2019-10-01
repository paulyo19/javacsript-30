const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes)

let lastChecked;

function handleCheck(e) {
    // console.log(e)
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

