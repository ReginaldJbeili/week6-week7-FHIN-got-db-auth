const showTable = () => {
    let xhr = new XMLHttpRequest();
    const url = "/table";
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
        let tableData = JSON.parse(xhr.responseText);
         populateInventoryTable(tableData)
          console.log(tableData);
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
};


const populateInventoryTable = tableData => {
    const tableBody = document.querySelector(".characters_table tbody");
    
    tableData.forEach((character,index)=>{
        let newCharacterRow = document.createElement('tr');

        // Add select box
        let newCheckbox = document.createElement('td');
        let checkbox = cb = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = checkbox;
        checkbox.value = character.id;
        newCheckbox.appendChild(checkbox)
        newCharacterRow.appendChild(newCheckbox)

        // Add name element
        let newCharacterName = document.createElement('td');
        newCharacterName.innerText = character.name;
        newCharacterRow.appendChild(newCharacterName)

        // Add Weapon element
        let newWeapon = document.createElement('td');
        newWeapon.innerText = character.weapon;
        newCharacterRow.appendChild(newWeapon);

        // Add house element
        let newHouse = document.createElement('td');
        newHouse.innerHTML = character.house;
        newCharacterRow.appendChild(newHouse);
        
        // Add row to table
        tableBody.appendChild(newCharacterRow);
    })
}


//submit button
let submitSelectionButton = document.querySelector("#submit-char")
submitSelectionButton.addEventListener("click", function() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkedBoxes.id);
    // if("number checked " + checkedBoxes.length !==3) {
    //     alert("Please select 3 people to join your clan")
    // } else {
    //     alert(checkedBoxes.each(function() {
    //         alert(checkedBoxes.id);
    //     }));
    }
);




window.onload = showTable();
