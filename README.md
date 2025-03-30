# Client-Side Resume/CV Builder

A simple, browser-based resume builder that allows you to create, edit, and download your resume directly in your web browser. All progress is saved locally using your browser's `localStorage`, and the entire application is static, making it easy to host on platforms like GitHub Pages.

**[➡️ View Live Demo](DEMO)** ✍️ <br>
*(Replace `https://stevedat.github.io/Resume-Builder/` with the actual URL after deploying)*

## Screenshot

![Screenshot of Resume Builder Interface](path/to/your/screenshot.png)
*(Replace `path/to/your/screenshot.png` with the actual path to a screenshot in your repository after uploading one)*

## Features

*   **In-Browser Editing:** Click directly on text elements (`YOUR NAME`, `YOUR JOB PROFILE`, section descriptions, etc.) to edit them.
*   **Dynamic Sections:** Easily add or remove entries for:
    *   Skills
    *   Languages
    *   Achievements
    *   Interests
    *   Education
*   **Custom Sections:** Add up to two additional custom sections with titles and descriptions (e.g., for Projects, Experience, Volunteering).
*   **Local Persistence:** Your edits are automatically saved in your browser's `localStorage`, so your progress is retained even if you close the tab (within the same browser).
*   **PDF Download:** Generate and download your completed resume as a PDF file using `html2pdf.js`.
*   **Static & Hostable:** No server-side backend required. Can be hosted easily on GitHub Pages or any static web host.
*   **Simple Template:** Provides a clean, two-column resume layout.

## How to Use

1.  **Open:** Access the live demo link provided above or open the `index.html` file locally in your browser.
2.  **Edit Content:** Click on any text section marked `contenteditable="true"` (like names, titles, descriptions, list items) and type your information.
3.  **Add/Remove Items:**
    *   To add an item (like a skill or education entry), click the corresponding `+ Skill`, `+ Education`, etc. button.
    *   To remove items, check the checkbox `<input type="checkbox">` next to the items you want to delete, then click the corresponding `- Skill`, `- Education`, etc. button.
4.  **Add/Remove Custom Sections:** Use the `+ Section` / `- Section` buttons in the bottom-right area to manage custom content blocks. Remember to check the box before removing.
5.  **Save Progress:** Progress is saved automatically after edits or add/remove actions. You can also manually trigger a save using the Save icon <i class="fas fa-save"></i> button.
6.  **Download PDF:** Click the Download icon <i class="fas fa-download"></i> button to generate and save your resume as a PDF. Buttons and checkboxes will be hidden in the output.
7.  **Clear Progress:** Click the Trash icon <i class="fas fa-trash-alt"></i> button to clear all saved data from `localStorage` and reset the resume to the default template (requires confirmation).

## How it Works

This application runs entirely in your web browser:

*   **HTML:** Defines the structure of the resume template.
*   **CSS:** Styles the resume layout and appearance.
*   **JavaScript:**
    *   Handles user interactions (button clicks, content editing).
    *   Dynamically adds and removes HTML elements for list items and sections.
    *   Uses the browser's **`localStorage`** API to save the HTML content of the resume area (`<section id="print">`).
    *   Uses the **`html2pdf.js`** library to convert the resume's HTML content into a downloadable PDF.

## Deployment on GitHub Pages

You can easily host this resume builder on GitHub Pages for free:

1.  **Create Repository:** Create a new repository on GitHub (e.g., `resume-builder`).
2.  **Upload Files:** Upload the `index.html`, `style.css`, and `script.js` files to the main branch of your repository.
3.  **Enable Pages:** Go to your repository's **Settings** tab, then click on **Pages** in the left sidebar.
4.  **Configure Source:** Under "Build and deployment", select **Deploy from a branch**. Choose the `main` branch (or whichever branch you uploaded to) and the `/ (root)` folder. Click **Save**.
5.  **Wait & Access:** GitHub will build and deploy your page. This might take a minute or two. The URL for your live page will be displayed in the Pages settings (usually `https://your-username.github.io/repository-name/`).
6.  **Update Links:** Remember to update the **Live Demo** link and the **Screenshot** path at the top of *this* README file!

## Technologies Used

*   HTML5
*   CSS3 (including Flexbox/Grid)
*   Vanilla JavaScript (ES6+)
*   [Bootstrap 5](https://getbootstrap.com/) (primarily for Buttons, Grid concepts can be adapted)
*   [Font Awesome 5](https://fontawesome.com/) (for icons)
*   [html2pdf.js](https://github.com/eKoopmans/html2pdf.js/) (for PDF generation)
*   Browser `localStorage` API

## Limitations

*   **Browser-Specific Storage:** Saved progress is tied to the specific browser and device you use. Clearing your browser's cache/storage will erase saved data.
*   **No Cloud Sync:** There's no account system or synchronization across devices.
*   **Template Customization:** Changing the fundamental layout or style requires editing the CSS and potentially the HTML/JavaScript code.
*   **PDF Rendering Quirks:** Very complex layouts or large amounts of text might occasionally cause minor rendering issues in the generated PDF.

## Contributing

Contributions, issues, and feature requests are welcome!
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (or choose/state your preferred license).
*(If you choose a license like MIT, create a `LICENSE` file in your repository containing the license text)*
