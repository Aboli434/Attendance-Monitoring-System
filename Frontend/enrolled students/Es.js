document.addEventListener("DOMContentLoaded", function() {
    const students = [
        { name: "John Doe", PRNNO: "1234578M" },
        { name: "Jane Smith", PRNNO: "6789045H" },
        { name: "Michael Johnson", PRNNO: "1234578M" },
        { name: "Emily Davis", PRNNO: "1234578M" },
        { name: "Chris Evans", PRNNO: "6789045H" },
        { name: "Natalie Portman", PRNNO: "6789045H"},
        { name: "Tom Hardy", PRNNO: "1234578M" },
        { name: "Scarlett Johansson",PRNNO: "26789045H" },
        { name: "Daniel Craig", PRNNO: "1234578M" },
        { name: "Emma Watson",PRNNO: "26789045H" }
    ];

    const studentTableBody = document.querySelector("#student-table tbody");

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.PRNNO}</td>
           
        `;
        studentTableBody.appendChild(row);
    });
});

