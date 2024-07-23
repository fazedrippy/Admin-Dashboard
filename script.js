const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

// script.js

// Function to toggle the notification panel
function toggleNotificationPanel() {
    const panel = document.getElementById('notification-panel');
    // Toggle visibility
    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

// Close notification panel if clicked outside (optional)
document.addEventListener('click', function(event) {
    const panel = document.getElementById('notification-panel');
    const icon = document.querySelector('.notification-icon-container');

    if (!icon.contains(event.target) && !panel.contains(event.target)) {
        panel.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const gradeSelect = document.getElementById('grade-select');
    const selectedGradeDisplay = document.getElementById('selected-grade');

    gradeSelect.addEventListener('change', () => {
        const selectedGrade = gradeSelect.options[gradeSelect.selectedIndex].text;
        selectedGradeDisplay.innerHTML = `<p>Selected Grade: ${selectedGrade}</p>`;
    });
});

function previewImage(event) {
    var preview = document.getElementById('preview');
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.style.display = 'block';
}