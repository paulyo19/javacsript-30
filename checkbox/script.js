const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes)

let lastChecked;

function handleCheck(e) {
    // console.log(e)
    // CHECK IF THEY HAD THE SHIFT KEY DOWN AND CHECK IF THEY ARE CHECKING IT
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // GO AHEAD AND DO WHAT WE PLEASE
        // LOOP OVER EVERY SINGLE CHECKBOX
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('checking inbetween')
            }
            if (inBetween) {
                checkbox.checked = true
            }
        })

    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

