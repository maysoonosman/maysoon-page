// Function to show the selected section and hide others
function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
function submitform() {
    document.getElementById("myForm").submit();
}