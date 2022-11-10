let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
    myLeads.push(inputBtn.value)
})

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
    ulEl.textContent += myLeads[i] + " "
}
