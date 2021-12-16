/* <table>
    <thead>
        <tr>
            <th>name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>haktan</td>
        </tr>
    </tbody>
</table> */


let elementGen = t => document.createElement(t)

let table = elementGen('table') // parent1
let tHead = elementGen('thead') // sub-parent1
let tBody = elementGen('tbody') //sub-parent2
let trOfthead = elementGen('tr')
let th = elementGen('th')
let trOfbody = elementGen('tr')
let td = elementGen('td')
td.innerHTML = 'haktan'
th.innerHTML = 'name'


let img = elementGen('img')
let oneDiv = elementGen('div')




th.innerText='name'
table.appendChild(tHead)
trOfthead.appendChild(th)
tHead.appendChild(trOfthead)


table.appendChild(tBody)
td.innerText= 'haktan'
trOfbody.appendChild(td)
tBody.appendChild(trOfbody)

table.appendChild(img)



table.className = "table table-dark"
document.querySelector('.container').appendChild(table)

// console.log(table.appendChild(tHead),table.appendChild(tBody) )
