const students = [
    { RollNo:1,Name: "Alice Smith", email: "alice@example.com", course: "Computer Science", joined: "2022-01-15" },
    { RollNo:2,Name: "Bob Johnson", email: "bob@example.com", course: "Mathematics", joined: "2022-02-10" },
    {RollNo:3, Name: "Charlie Brown", email: "charlie@example.com", course: "Physics", joined: "2022-03-05" },
];

function displayStudents() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    students.forEach(student => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = student.RollNo;
        row.insertCell(1).innerText = student.Name;
        row.insertCell(2).innerText = student.email;
       
    });
}



// Display students on page load
displayStudents();
