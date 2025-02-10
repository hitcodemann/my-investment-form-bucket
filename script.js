document.getElementById('investmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // This stops the page from reloading when you click the button

    const name = document.getElementById('name').value; // Get the name from the box
    const salary = document.getElementById('salary').value; // Get the salary
    const expenditure = document.getElementById('expenditure').value; // Get the expenses

    // We'll add the code here later to send the data to AWS
    // For now, let's just show a message:
    document.getElementById('results').innerHTML = "Sending data to AWS..."; 
});
