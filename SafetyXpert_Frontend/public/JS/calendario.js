const monthAndYear = document.getElementById("monthAndYear");
const dates = document.getElementById("dates");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentDate = new Date(); // Fecha actual
const today = new Date(); // Guardar la fecha actual para resaltarla

function renderCalendar() {
    currentDate.setDate(1);
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Nombres de los meses
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    monthAndYear.innerText = `${monthNames[month]} ${year}`;

    // Calcular el primer día del mes y el número de días en el mes
    const firstDay = currentDate.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Limpiar el calendario anterior
    dates.innerHTML = "";

    // Rellenar los días vacíos antes del primer día del mes
    for (let i = 0; i < firstDay; i++) {
        dates.innerHTML += `<div class="date"></div>`;
    }

    // Rellenar los días del mes
    for (let i = 1; i <= daysInMonth; i++) {
        // Comprobar si es la fecha actual
        const isToday = today.getDate() === i && today.getMonth() === month && today.getFullYear() === year;
        const dateClass = isToday ? "date today" : "date"; // Resaltar la fecha actual
        dates.innerHTML += `<div class="${dateClass}" data-date="${i}">${i}</div>`;
    }

    // Añadir eventos de clic a las fechas (opcional)
    document.querySelectorAll('.date').forEach(dateElement => {
        dateElement.addEventListener('click', () => {
            // Aquí puedes añadir más funcionalidad si lo deseas
        });
    });
}

// Navegar hacia el mes anterior
prev.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

// Navegar hacia el siguiente mes
next.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Renderizar el calendario inicial
renderCalendar();