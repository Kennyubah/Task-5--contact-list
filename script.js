let contactsJson = [
    {
        name: "Kenechukwu Okeke",
        email: "kenechukwu@email.com",
        phoneNumber: "123456789"
    },
    {
        name: "Sarah Tomisin",
        email: "sarah@email.com",
        phoneNumber: "487463789"
    },
    {
        name: "Michael Okolo",
        email: "michael@email.com",
        phoneNumber: "4958378574"
    }
];

function displayContacts() {

    let tableBody =
        document.getElementById("contactTableBody");

    tableBody.innerHTML = "";

    contactsJson.forEach(contact => {

        let row = `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.phoneNumber}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

function addContact() {

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let phone =
        document.getElementById("phone").value;

    if (!name || !email || !phone) {
        alert("Please fill all fields.");
        return;
    }

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    contactsJson.push({
        name: name,
        email: email,
        phoneNumber: phone
    });

    displayContacts();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

function removeContact() {
    let removeName = document
        .getElementById("removeName")
        .value
        .trim()
        .toLowerCase();

    if (!removeName) {
        alert("Please enter the name of the contact to remove.");
        return;
    }

    let originalLength = contactsJson.length;

    contactsJson = contactsJson.filter(contact =>
        contact.name.trim().toLowerCase() !== removeName
    );

    if (contactsJson.length === originalLength) {
        alert("No contact found with that name.");
    } else {
        alert("Contact removed successfully.");
    }

    displayContacts();

    document.getElementById("removeName").value = "";
}
displayContacts();