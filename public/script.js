
async function getData() {
    const response = await fetch('/api/dining')
    const dining = await response.json()
    console.table(dining)
    

    const body = document.querySelector('.body')
    dining.data.forEach(element => {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${element.hall_id}</td>
            <td>${element.hall_name}</td>
            <td>${element.hall_address}</td>
            `
        body.append(row)
    });
    
}
 
 getData();
