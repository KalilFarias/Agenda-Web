const agendaForm = document.getElementById('agendaForm');
const eventList = document.getElementById('eventList');


function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam de 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

agendaForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;

    if (title && date && time) {

        const formattedDate = formatDate(date);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${formattedDate}</td>
            <td>${time}</td>
            <td><button class="delete-btn">Excluir</button></td>
        `;

        row.querySelector('.delete-btn').addEventListener('click', () => {
            row.remove(); 
        });

        eventList.appendChild(row);

        agendaForm.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
