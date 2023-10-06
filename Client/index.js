document.addEventListener("DOMContentLoaded", () => {

    // Initialize the calendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        dateClick: function(info) {
            fetchApiContentForDate(info.dateStr);  // Fetch data based on selected date
        }
    });
    calendar.render();

    // Event listener for form submission
    document.getElementById("api-form").addEventListener("submit", (e) => {
        e.preventDefault();

        // Example: send data to API
        const dataToSend = document.getElementById("dataField").value;
        console.log("Submitting data to API: ", dataToSend);
        // Use fetch or XMLHttpRequest here to send 'dataToSend' to your API

        // Optionally, you can then refresh the calendar or specific date events
        // For this example, we're simply refetching the entire calendar for simplicity
        calendar.refetchEvents();
    });
});

function fetchApiContentForDate(dateStr) {
    // Replace with your API call using fetch or XMLHttpRequest
    console.log(`Fetching content from API for date: ${dateStr}`);
    
    // Placeholder: Fetching data based on the selected date from your API.
    // Adjust this part to fit your API structure and requirements.
    // fetch(`/api/data?date=${dateStr}`)
    // .then(response => response.json())
    // .then(data => {
    //     // Handle and display the data here
    //     // You might want to add the data as an event to the calendar or display it in another format
    // });
}
