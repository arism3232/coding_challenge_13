// Task2- Adding Employee Cards Dynamically
function addEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
    const heading = document.createElement('h3');
    heading.textContent = name;
    const paragraph = document.createElement('h3');
    paragraph.textContent = position;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);
    document.getElementById('employeeContainer').appendChild(card);
    removeButton.addEventListener('click', function(event) {
        // Task4- Implementing Removal of Employee Cards with Event Bubbling
        if (event.target.className === 'employee-card') {
            console.log('Employee Card has been selected')
        }
        event.stopPropagation
        card.remove();
    });
    // Task5- Inline Editing of Employee Details
    editButton.addEventListener('click', function() {
        const nameInput = document.createElement('input');
        nameInput.value = heading.textContent;
        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent;
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(position);
        card.appendChild(saveButton);
        card.appendChild(removeButton);
        saveButton.addEventListener('click', function() {
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;
            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton);
        });
    });
};
addEmployeeCard('Ed', 'Tester');
addEmployeeCard('Edd', 'Diagnostics');
addEmployeeCard('Eddy', 'Manager');

// Task3- Converting Nodelists to Arrays for Bulk Updates
function bulkUpdateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards);
    cardArray.forEach(card => {
        card.style.backgroundColor = 'tomato';
    });
};
bulkUpdateEmployeeCards();