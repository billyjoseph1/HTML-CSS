// app.js
document.addEventListener('DOMContentLoaded', function() {
    function fetchEvents() {
        fetch('events.json')
            .then(response => response.json())
            .then(data => {
                displayEvents(data);
                addFilterOptions();
            })
            .catch(error => console.error('Error loading the events:', error));
    }

    function displayEvents(events) {
        const eventList = document.getElementById('event-list');
        eventList.innerHTML = '';
        events.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <img src="${event.imageUrl}" alt="${event.title}" loading="lazy">
                <h2>${event.title}</h2>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
                <p>Price: $${event.price}</p>
            `;
            eventList.appendChild(card);
        });
    }

    // function addFilterOptions() {
    //     const filterDiv = document.getElementById('filters');
    //     // Implement your filter inputs here
    // }

    fetchEvents();
});
