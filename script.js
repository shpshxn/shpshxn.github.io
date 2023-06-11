document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var fromCity = document.getElementById("fromInput").value;
    var toCity = document.getElementById("toInput").value;
    var date = document.getElementById("dateInput").value;

    // Simulated API call or data retrieval
    var tickets = getTicketsFromAPI(fromCity, toCity, date);

    // Display the results
    displayTickets(tickets);
});

function getTicketsFromAPI(from, to, date) {
    // Simulated data
    var tickets = [
        { from: "Київ", to: "Харків", place: "автовокзал", date: "2023-06-12", time:"13:00", price: 200 },
        { from: "Київ", to: "Одеса", place: "автовокзал", date: "2023-06-12", time:"13:00", price: 150 },
        { from: "Львів", to: "Харків", place: "автовокзал", date: "2023-06-12", time:"13:00", price: 180 },
        { from: "Львів", to: "Харків", place: "автовокзал", date: "2023-06-12", time:"18:00", price: 160 },
        
        { from: "Львів", to: "Харків", place: "автовокзал", date: "2023-06-12", time:"15:00", price: 130 },
        { from: "Львів", to: "Одеса", place: "автовокзал", date: "2023-06-12", time:"13:00", price: 130 }
        // Add more ticket data
    ];

    // Filter the tickets based on the selected cities and date
    var filteredTickets = tickets.filter(function(ticket) {
        return ticket.from === from && ticket.to === to && ticket.date === date;
    });

    return filteredTickets;
}

function displayTickets(tickets) {
    var resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ""; // Очищуємо контейнер результатів

    if (tickets.length > 0) {
        // Якщо є квитки, відображаємо їх
        for (var i = 0; i < tickets.length; i++) {
            var ticket = tickets[i];

            var ticketCard = document.createElement("div");
            ticketCard.className = "ticket-card";

            var ticketInfo = document.createElement("h3");
            ticketInfo.textContent = ticket.from + " - " + ticket.to;

            var ticketPlace = document.createElement("p");
            ticketPlace.textContent = "Місце відправлення: " + ticket.place;

            var ticketDateTime = document.createElement("p");
            ticketDateTime.textContent = "Дата та час відправлення: " + ticket.date + " " + ticket.time;

            var ticketPrice = document.createElement("p");
            ticketPrice.textContent = "Ціна: " + ticket.price + " грн";

            var buyButton = document.createElement("button");
            buyButton.textContent = "купити";
            buyButton.className = "buy-button";
            buyButton.addEventListener("click", function() {
                // Дії при натисканні кнопки "Купити"
                buyTicket(ticket);
            });

            ticketCard.appendChild(ticketInfo);
            ticketCard.appendChild(ticketPlace);
            ticketCard.appendChild(ticketDateTime);
            ticketCard.appendChild(ticketPrice);
            ticketCard.appendChild(buyButton);

            resultsContainer.appendChild(ticketCard);
        }
    } else {
        // Якщо немає доступних квитків, відображаємо повідомлення
        var noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "На жаль, немає доступних квитків для вибраного напрямку та дати.";
        resultsContainer.appendChild(noResultsMessage);
    }

    // Показуємо розділ з результатами
    document.getElementById("resultsSection").style.display = "block";
}

function buyTicket(ticket) {
    // Логіка покупки квитка
    console.log("Куплено квиток:", ticket);
}
