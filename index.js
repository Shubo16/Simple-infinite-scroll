let addNewNote = document.getElementById('Add-new-note-btn');

addNewNote.addEventListener("click", function (event) { 
event.preventDefault();
    displayForm()
})

function displayForm() {
const form = document.createElement("form");
form.setAttribute("id", "note-form");
}

