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
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(removeButton);
    document.getElementById('employeeContainer').appendChild(card);
    removeButton.addEventListener('click', function() {
        card.remove();
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