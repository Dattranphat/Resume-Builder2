const resumeContentId = 'print'; // ID of the element containing the resume content
const localStorageKey = 'resumeHTMLContent'; // Key for storing data in localStorage
let maxNewSection = 1; // Initial count based on the default section

// --- CORE FUNCTIONS ---

/**
 * Saves the current HTML content of the resume section to localStorage.
 */
function saveResume() {
    try {
        const resumeSection = document.getElementById(resumeContentId);
        if (resumeSection) {
            // Temporarily remove checked state from checkboxes before saving
            const checkboxes = resumeSection.querySelectorAll('.input-checkbox');
            checkboxes.forEach(cb => cb.checked = false);

            const currentHTML = resumeSection.innerHTML;
            localStorage.setItem(localStorageKey, currentHTML);
            console.log("Resume progress saved to localStorage.");

             // Optional: Add visual feedback for saving
             const saveBtn = document.getElementById('saveProgressBtn');
             if(saveBtn) {
                 const originalIcon = saveBtn.innerHTML;
                 saveBtn.innerHTML = '<i class="fas fa-check"></i>';
                 saveBtn.style.backgroundColor = '#5cb85c'; // Green feedback
                 setTimeout(() => {
                     saveBtn.innerHTML = originalIcon;
                     saveBtn.style.backgroundColor = ''; // Revert style
                 }, 1000); // Revert after 1 second
             }

        } else {
            console.error(`Element with ID '${resumeContentId}' not found.`);
        }
    } catch (error) {
        console.error("Error saving resume to localStorage:", error);
        alert("Could not save resume progress. LocalStorage might be full or disabled.");
    }
}

/**
 * Loads the resume HTML content from localStorage if it exists.
 */
function loadResume() {
    try {
        const savedHTML = localStorage.getItem(localStorageKey);
        const resumeSection = document.getElementById(resumeContentId);

        if (savedHTML && resumeSection) {
            resumeSection.innerHTML = savedHTML;
            console.log("Resume progress loaded from localStorage.");
            // Recalculate maxNewSection after loading
            recalculateMaxSections();
        } else if (resumeSection) {
            console.log("No saved resume found, using default template.");
            // Ensure initial maxNewSection count is correct for default template
             recalculateMaxSections();
        } else {
             console.error(`Element with ID '${resumeContentId}' not found during load.`);
        }
    } catch (error) {
        console.error("Error loading resume from localStorage:", error);
        alert("Could not load saved resume progress.");
    }
}

/**
 * Clears the saved resume data from localStorage and reloads the page.
 */
function clearResume() {
    if (confirm("Are you sure you want to clear all saved progress? This cannot be undone.")) {
        try {
            localStorage.removeItem(localStorageKey);
            console.log("Cleared saved resume progress.");
            window.location.reload(); // Reload to show the default template
        } catch (error) {
            console.error("Error clearing localStorage:", error);
            alert("Could not clear saved progress.");
        }
    }
}

/**
 * Handles the removal of selected items within a given container.
 * @param {Event} event - The click event object.
 * @param {string} itemSelector - The CSS selector for the items to potentially remove (e.g., '.skill', '.edublock').
 * @param {string} containerSelector - The CSS selector for the container holding the items (needed if structure is nested).
 */
function removeSelectedItem(event, itemSelector, containerSelector = null) {
    let itemsRemoved = false;
    // Find the parent container relative to the button clicked
    const parentContainer = event.target.closest('div'); // Assumes button is inside a div container for the section
    if (!parentContainer) return;

    const allCheckboxes = parentContainer.querySelectorAll(`${itemSelector} .input-checkbox`);

    if (allCheckboxes.length === 0) {
        alert("No items available to remove in this section.");
        return;
    }

    // Iterate backwards to avoid issues with index changes during removal
    for (let i = allCheckboxes.length - 1; i >= 0; i--) {
        const checkbox = allCheckboxes[i];
        if (checkbox.checked) {
            // Find the ancestor element matching the itemSelector to remove
            const itemToRemove = checkbox.closest(itemSelector);
            if (itemToRemove) {
                itemToRemove.remove();
                itemsRemoved = true;
            }
        }
    }

    if (!itemsRemoved) {
        alert("Please check the box next to the item(s) you want to remove.");
    } else {
        saveResume(); // Save changes after removal
    }
}

/**
 * Recalculates the count of dynamic 'new sections'.
 */
function recalculateMaxSections() {
    const newSectionsContainer = document.getElementById("newsec");
    if (newSectionsContainer) {
         // Count direct children divs within the #newsec container
        maxNewSection = document.querySelectorAll('#newsec > div').length;
        // Add 1 for the initial section that's not in #newsec
        maxNewSection += document.querySelectorAll('.new-section-container > .new-section-block').length;
        console.log("Recalculated maxNewSection:", maxNewSection);
    } else {
        // Fallback if #newsec isn't found (e.g., during initial load before dynamic content)
        maxNewSection = document.querySelectorAll('.new-section-container > .new-section-block').length;
         console.log("Recalculated maxNewSection (fallback):", maxNewSection);
    }
}


// --- PDF GENERATION ---

function printpdf() {
    const resumeElement = document.getElementById('resume'); // Target the outer container
    const contentToPrint = document.getElementById(resumeContentId); // The actual content section
    if (!resumeElement || !contentToPrint) {
        console.error("Resume element not found for PDF generation.");
        return;
    }

    // Elements to hide during PDF generation
    const elementsToHideSelectors = `#${resumeContentId} button, #${resumeContentId} .input-checkbox, .nav`;
    const elementsToHide = document.querySelectorAll(elementsToHideSelectors);

    // Hide elements
    elementsToHide.forEach(el => el.classList.add('none'));

    const pdfOptions = {
        margin:       [5, 5, 5, 5], // Margins [top, left, bottom, right] in mm
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: false, dpi: 192, letterRendering: true, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF
    html2pdf().from(contentToPrint).set(pdfOptions).save()
        .then(() => {
            // Show elements again after PDF generation/saving
            elementsToHide.forEach(el => el.classList.remove('none'));
            console.log("PDF generated successfully.");
        })
        .catch(err => {
            // Ensure elements are shown even if there's an error
            elementsToHide.forEach(el => el.classList.remove('none'));
            console.error("Error generating PDF:", err);
            alert("An error occurred while generating the PDF.");
        });
}


// --- ADD FUNCTIONS ---

function addedu() {
    const educationContainer = document.getElementById("education");
    if (!educationContainer) return;
    const newEduBlock = document.createElement('div');
    newEduBlock.classList.add('edublock');
    newEduBlock.innerHTML = `
        <span><input type="checkbox" class="input-checkbox"></span>
        <span class="education-head" contenteditable="true">YOUR DEGREE / CERTIFICATION</span>
        <div><span contenteditable="true">Institution Name</span> - <span contenteditable="true">Year</span></div>`;
    educationContainer.appendChild(newEduBlock);
    saveResume();
}

function addskill() {
    const skillsContainer = document.getElementById("skills");
     if (!skillsContainer) return;
    const newSkill = document.createElement('div');
    newSkill.classList.add('skill');
    newSkill.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>   <span contenteditable="true">New Skill</span>`;
    skillsContainer.appendChild(newSkill);
    saveResume();
}

function addLang() {
    const languagesContainer = document.getElementById("languages");
     if (!languagesContainer) return;
    const newLang = document.createElement('div');
    newLang.classList.add('language');
    newLang.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Language</span> - <span contenteditable="true">Proficiency</span>`;
    languagesContainer.appendChild(newLang);
    saveResume();
}

function addAch() {
    const achievementContainer = document.getElementById("achievement");
     if (!achievementContainer) return;
    const newAch = document.createElement('div');
    newAch.classList.add('achieve');
    newAch.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">New Achievement</span>`;
    achievementContainer.appendChild(newAch);
    saveResume();
}

function addInt() {
    // Corrected to target #interests based on updated HTML
    const interestContainer = document.getElementById("interests");
     if (!interestContainer) return;
    const newInt = document.createElement('div');
    newInt.classList.add('interest'); // Assuming class name 'interest'
    newInt.innerHTML = `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">New Interest</span>`;
    interestContainer.appendChild(newInt);
    saveResume();
}

function addsec() {
    // Added a limit to prevent too many sections
    const maxAllowedSections = 5; // Example limit
    recalculateMaxSections(); // Ensure count is up-to-date

    if (maxNewSection >= maxAllowedSections) {
        alert(`You can add a maximum of ${maxAllowedSections} custom sections.`);
        return;
    }

    const newSecContainer = document.getElementById("newsec");
    if (!newSecContainer) return;

    const newSection = document.createElement('div');
    newSection.classList.add('new-section-block'); // Use the same class as the initial one
    // Added <br><br> for spacing if it's not the very first dynamic one
    const spacing = newSecContainer.children.length > 0 ? '<br><br>' : '';

    newSection.innerHTML = `
        ${spacing}
        <span><input type="checkbox" class="input-checkbox"></span>
        <span class="title" contenteditable="true">NEW SECTION TITLE</span><br><br>
        <div contenteditable="true">Describe the content for this section here. You can cover experiences, projects, volunteering, etc.</div>`;

    newSecContainer.appendChild(newSection);
    maxNewSection++; // Increment count
    console.log("Added new section. Current count:", maxNewSection);
    saveResume();
}


// --- REMOVE FUNCTIONS (using the generic removeSelectedItem) ---

function remedu(event) {
    removeSelectedItem(event, '.edublock');
}

function remskill(event) {
    removeSelectedItem(event, '.skill');
}

function remLang(event) {
    removeSelectedItem(event, '.language');
}

function remAch(event) {
    removeSelectedItem(event, '.achieve');
}

function remInt(event) {
    removeSelectedItem(event, '.interest'); // Match class name used in addInt/HTML
}

function remsec(event) {
    // Special handling for removing sections as it affects maxNewSection count
    const parentContainer = event.target.closest('.new-section-container');
    if (!parentContainer) return;

    let itemsRemoved = false;
    const allCheckboxes = parentContainer.querySelectorAll('.new-section-block .input-checkbox');

     if (allCheckboxes.length === 0) {
        alert("No sections available to remove.");
        return;
    }

     // Iterate backwards
    for (let i = allCheckboxes.length - 1; i >= 0; i--) {
        const checkbox = allCheckboxes[i];
        if (checkbox.checked) {
            const itemToRemove = checkbox.closest('.new-section-block');
            if (itemToRemove) {
                itemToRemove.remove();
                itemsRemoved = true;
                maxNewSection--; // Decrement count
            }
        }
    }

     if (!itemsRemoved) {
        alert("Please check the box next to the section(s) you want to remove.");
    } else {
        console.log("Removed section. Current count:", maxNewSection);
        saveResume(); // Save changes after removal
    }
}


// --- EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    loadResume(); // Load saved data when the page is ready

    // Save progress button
    const saveBtn = document.getElementById('saveProgressBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveResume);
    } else {
        console.warn("Save Progress button not found.");
    }

     // Clear progress button
    const clearBtn = document.getElementById('clearProgressBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearResume);
    } else {
        console.warn("Clear Progress button not found.");
    }

    // Auto-save on content change (optional, can be performance-intensive)
    const resumeSection = document.getElementById(resumeContentId);
    if (resumeSection) {
        // Use event delegation for better performance
        let debounceTimer;
        resumeSection.addEventListener('input', (event) => {
            // Check if the event target is contenteditable
            if (event.target.isContentEditable) {
                // Debounce the save function to avoid saving on every keystroke
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(saveResume, 1500); // Save 1.5 seconds after last input
            }
        });
    }
});

// Ensure save is triggered when leaving the page (best effort)
window.addEventListener('beforeunload', saveResume);
