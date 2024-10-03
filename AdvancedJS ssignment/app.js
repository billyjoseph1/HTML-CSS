document.addEventListener("DOMContentLoaded", function () {
  let events = [];
  let favorites = new Set(); // Using a Set to store favorite event IDs

  function fetchEvents() {
    fetch("http://localhost:3000/ppp")
      .then((response) => response.json())
      .then((data) => {
        events = data;
        displayEvents(data);
      })
      .catch((error) => console.error("Error loading the events:", error));
  }

  function displayEvents(events) {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = ""; // Clear existing events
    events.forEach((event) => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
          <img src="${event.imageUrl}" alt="${event.title}" loading="lazy">
          <h2>${event.title}</h2>
          <p>Date: ${event.date}</p>
          <p>Location: ${event.location}</p>
          <p>Price: $${event.price}</p>
          <button onclick="toggleFavorite(${event.id})">${
        favorites.has(event.id) ? "Remove from Favorites" : "Add to Favorites"}</button>
        `;
      eventList.appendChild(card);
    });
  }

events.forEach(event => {
    const isFavorite = favorites.has(event.id);
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
        <img src="${event.imageUrl}" alt="${event.title}" loading="lazy">
        <h2>${event.title}</h2>
        <p>Date: ${event.date}</p>
        <p>Location: ${event.location}</p>
        <p>Price: $${event.price}</p>
    `;

    const button = document.createElement("button");
    button.textContent = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';
    button.addEventListener('click', () => toggleFavorite(event.id));
    card.appendChild(button);

    eventList.appendChild(card);
});

  function filterEventsByPrice(priceLimit) {
    const filteredEvents = events.filter((event) => event.price <= priceLimit);
    displayEvents(filteredEvents);
  }

  function filterEventsByDate(date) {
    const filteredEvents = events.filter(
      (event) =>
        new Date(event.date).toDateString() === new Date(date).toDateString()
    );
    displayEvents(filteredEvents);
  }

  function filterEventsByLocation(location) {
    const filteredEvents = events.filter((event) =>
      event.location.toLowerCase().includes(location.toLowerCase())
    );
    displayEvents(filteredEvents);
  }

  function toggleFavorite(eventId) {
    if (favorites.has(eventId)) {
      favorites.delete(eventId);
    } else {
      favorites.add(eventId);
    }
    displayEvents(events); // Refresh the list to update favorite status
  }

  // Expose some of our functions to the global scope to make them callable from HTML
  window.filterEventsByPrice = filterEventsByPrice;
  window.filterEventsByDate = filterEventsByDate;
  window.filterEventsByLocation = filterEventsByLocation;
  window.toggleFavorite = toggleFavorite;

  fetchEvents();
});
