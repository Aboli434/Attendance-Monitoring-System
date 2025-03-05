document.addEventListener("DOMContentLoaded", function() {
    const students = [
        { name: "John Doe", status: "Present" },
        { name: "Jane Smith", status: "Absent" },
        { name: "Michael Johnson", status: "Present" },
        { name: "Emily Davis", status: "Present" },
        { name: "Chris Evans", status: "Absent" },
        { name: "Natalie Portman", status: "Present" },
        { name: "Tom Hardy", status: "Absent" },
        { name: "Scarlett Johansson", status: "Present" },
        { name: "Daniel Craig", status: "Present" },
        { name: "Emma Watson", status: "Absent" }
    ];

    const attendanceTableBody = document.querySelector("#attendance-table tbody");

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.status}</td>
        `;
        attendanceTableBody.appendChild(row);
    });
});
