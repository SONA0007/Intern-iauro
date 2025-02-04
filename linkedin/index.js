// JavaScript for LinkedIn Clone

// Example function to handle dropdown for account details
function toggleDropdown() {
    const dropdown = document.getElementById('account-dropdown');
    dropdown.classList.toggle('show');
}

// Event listener for account dropdown
document.getElementById('account-icon').addEventListener('click', toggleDropdown);
