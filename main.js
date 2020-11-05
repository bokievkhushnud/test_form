//  Decleaing variables that we need to use in JS

const license_1 = document.getElementById('1')
const license_2 = document.getElementById('2')
const license_3 = document.getElementById('3')
const licen = document.querySelectorAll('input[name="license"]')
const selectItem= document.getElementById('options')
const license_num = document.getElementById("license_num")
const price = document.getElementById("price")
const arr = [13, 22, 34];

// Function for changin the price and license type after each change 
function update(n) {
    let x = document.getElementById("options").selectedIndex;
    num = document.getElementsByTagName("option")[x].value;
    for (rb of licen) {
        if (rb.checked) {
            n = arr[rb.id - 1] * num
            license_num.innerText = rb.id
            price.innerText = n
            console.log(document.getElementById(""+arr[rb.id-1]).classList.toggle('new'))
        }
        else if(!(rb.checked=0)){
            console.log(document.getElementById(""+arr[rb.id-1]).classList.remove("new"))
        }
    }
}

// Adding eventListener in order to update after each change
license_1.addEventListener('click', update);
license_2.addEventListener('click', update);
license_3.addEventListener('click', update);
selectItem.addEventListener('change',update)