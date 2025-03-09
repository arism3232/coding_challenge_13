// Task2- Adding Employee Cards Dynamically
function addEmployeeCard(name, position) { // Writing a function that uses createElement to build an employee card. 
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card'); // Creating new employee-card as div.
    const heading = document.createElement('h3');
    heading.textContent = name; // Including heading for the employee name.
    const paragraph = document.createElement('h3');
    paragraph.textContent = position; // Including paragraph for employee position.
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'; // Includng Remove button for deleting card.
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit'; // Adding an edit button for Task5.
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton); // Appending heading, postion, edit and Remove button to the card.
    document.getElementById('employeeContainer').appendChild(card); // Appending the employee card to emplyeeContainer using appendChild.
    // Task4- Implementing Removal of Employee Cards with Event Bubbling
    removeButton.addEventListener('click', function(event) { // Adding event listener for the remove button.
        console.log('Button has been selected')
        event.stopPropagation // Using stopPropagation to prevent from bubbling.
        card.remove(); // Removing employee card.
    });
    // Task5- Inline Editing of Employee Details
    editButton.addEventListener('click', function() { // Adding event listener for the edit button situated in Task2.
        const nameInput = document.createElement('input');
        nameInput.value = heading.textContent; // Pre-populating input fields with existing employee name.
        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent; // Pre-populating input fields with existing employee position.
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save'; // Creating Save button to uupdate with new values.
        card.appendChild(positionInput); // Ensuring updated details revert back.
        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(position);
        card.appendChild(saveButton);  
        card.appendChild(removeButton); // Appending nameInput, postion, saveButton, and removeButton.
        saveButton.addEventListener('click', function() { // Adding eventlistener for the save button.
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;
            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton); 
            card.appendChild(removeButton) ;// Reflecting updated details in the card.
        });
    });
};
addEmployeeCard('Ed', 'Tester');
addEmployeeCard('Edd', 'Diagnostics');
addEmployeeCard('Eddy', 'Manager'); // Test Employees for the dashboard.

// Task3- Converting Nodelists to Arrays for Bulk Updates
function bulkUpdateEmployeeCards() { // Selecting all employee cards. 
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards); // Converting nodelist to array.
    cardArray.forEach(card => {
        card.style.backgroundColor = 'tomato'; // Using array method to update color of card.
    });
};
bulkUpdateEmployeeCards(); // Activating bulk update.