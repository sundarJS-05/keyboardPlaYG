
let insert = document.querySelector('#insert')

window.addEventListener('keydown', (event)=>{
    insert.innerHTML=`
    <div class='colour'>

    <table>

  <tr>
    <td> Key</td>
    <td> Key code</td>
    <td>  Code</td>
  </tr>

    <tr>
    <th> ${event.key} </th>
    <th> ${event.keyCode} </th>
    <th> ${event.code} </th>
  </tr>

</table>

    </div>
    
    `
} )