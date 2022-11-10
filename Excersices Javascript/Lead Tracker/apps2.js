const inputEl = document.querySelector('.input-el');
const btn = document.querySelector('.input-btn');
const ulEl = document.querySelector('.ul-el');
let myLeads = [];


btn.addEventListener('click', () => {
   myLeads.push(inputEl.value);
   inputEl.value = '';
   renderLeads();
})

function renderLeads() {
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++) {
        // (first way)
        listItems +=`
        <li>
            <a target = "_blank" href = ${myLeads[i]}>
                ${myLeads[i]}
            </a>
        </li>`;
        // (second way. best practise)
        // const li = document.createElement("li")
        // li.innerHTML = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems
}

