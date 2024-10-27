
const previousEvents = [
    { name: 'Event Name 1', date: 'January 15, 2024', description: 'A brief description of what happened at the event.' },
    { name: 'Event Name 2', date: 'March 10, 2024', description: 'A brief description of what happened at the event.' }
];

const upcomingEvents = [
    { name: 'Event Name 3', date: 'February 20, 2024', description: 'A brief description of what to expect at the event.' },
    { name: 'Event Name 4', date: 'April 25, 2024', description: 'A brief description of what to expect at the event.' }
];

function displayEvents(events, sectionId) {
    const section = document.getElementById(sectionId);
    const row = section.querySelector('.row');
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="event-card">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Description: ${event.description}</p>
            </div>
        `;
        row.appendChild(card);
    });
}

window.onload = () => {
    displayEvents(previousEvents, 'previous-events');
    displayEvents(upcomingEvents, 'upcoming-events');
};
