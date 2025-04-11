document.addEventListener('DOMContentLoaded', function() {
    // Initialize resume from localStorage or template
    initResume();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up contenteditable auto-save
    setupAutoSave();
});

// Resume data structure
const resumeData = {
    template: 'chronological',
    sections: {
        header: {},
        summary: {},
        experience: [],
        education: [],
        skills: [],
        certifications: []
    }
};

// Initialize resume from localStorage or default template
function initResume() {
    const savedResume = localStorage.getItem('atsResumeData');
    if (savedResume) {
        try {
            const parsedData = JSON.parse(savedResume);
            Object.assign(resumeData, parsedData);
            loadResumeData();
        } catch (e) {
            console.error('Error loading saved resume:', e);
            loadDefaultTemplate();
        }
    } else {
        loadDefaultTemplate();
    }
}

// Load default template
function loadDefaultTemplate() {
    // This would be more comprehensive in a real app
    const defaultContent = {
        name: 'John Doe',
        title: 'Professional Title',
        phone: '(123) 456-7890',
        email: 'your.email@example.com',
        location: 'City, State',
        linkedin: 'linkedin.com/in/username',
        summary: 'Experienced professional with [X] years in [Industry/Field]. Proven track record in [key skills/achievements]. Seeking to leverage my expertise in [specific skills] at [Company Name]. Strong background in [relevant areas]. Recognized for [notable achievements or awards].',
        experience: [
            {
                jobTitle: 'Job Title',
                company: 'Company Name',
                dates: 'MM/YYYY - Present',
                location: 'City, State',
                bullets: [
                    'Responsibility or achievement #1',
                    'Responsibility or achievement #2'
                ]
            }
        ],
        education: [
            {
                degree: 'Degree Earned',
                institution: 'Institution Name',
                dates: 'MM/YYYY - MM/YYYY',
                location: 'City, State'
            }
        ],
        skills: [
            {
                category: 'Technical Skills',
                skills: 'Skill 1, Skill 2, Skill 3'
            }
        ],
        certifications: [
            {
                name: 'Certification Name',
                body: 'Certifying Body',
                date: 'MM/YYYY'
            }
        ]
    };
    
    // Populate the resume with default content
    populateResume(defaultContent);
}

// Populate resume with data
function populateResume(data) {
    // Header
    document.querySelector('.resume-name').textContent = data.name;
    document.querySelector('.resume-title').textContent = data.title;
    document.querySelector('.contact-info span:nth-child(1)').textContent = data.phone;
    document.querySelector('.contact-info span:nth-child(2)').textContent = data.email;
    document.querySelector('.contact-info span:nth-child(3)').textContent = data.location;
    document.querySelector('.contact-info span:nth-child(4)').textContent = data.linkedin;
    
    // Summary
    document.querySelector('.section-content').textContent = data.summary;
    
    // Experience
    const experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = '';
    
    data.experience.forEach(exp => {
        const experienceItem = createExperienceItem(exp);
        experienceContainer.appendChild(experienceItem);
    });
    
    // Education
    const educationContainer = document.getElementById('education-container');
    educationContainer.innerHTML = '';
    
    data.education.forEach(edu => {
        const educationItem = createEducationItem(edu);
        educationContainer.appendChild(educationItem);
    });
    
    // Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    
    data.skills.forEach(skill => {
        const skillCategory = createSkillCategory(skill);
        skillsContainer.appendChild(skillCategory);
    });
    
    // Certifications
    const certContainer = document.getElementById('certifications-container');
    certContainer.innerHTML = '';
    
    data.certifications.forEach(cert => {
        const certItem = createCertificationItem(cert);
        certContainer.appendChild(certItem);
    });
}

// Create experience item DOM element
function createExperienceItem(data) {
    const item = document.createElement('div');
    item.className = 'experience-item';
    
    item.innerHTML = `
        <div class="experience-header">
            <div class="job-title" contenteditable="true">${data.jobTitle}</div>
            <div class="company" contenteditable="true">${data.company}</div>
            <div class="date-location">
                <span class="dates" contenteditable="true">${data.dates}</span>
                <span class="location" contenteditable="true">${data.location}</span>
            </div>
        </div>
        <ul class="job-description">
            ${data.bullets.map(bullet => `<li contenteditable="true">${bullet}</li>`).join('')}
        </ul>
        <div class="experience-actions">
            <button class="btn btn-sm btn-add-bullet"><i class="fas fa-plus"></i> Add Bullet</button>
            <button class="btn btn-sm btn-remove-experience"><i class="fas fa-trash"></i> Remove</button>
        </div>
    `;
    
    return item;
}

// Create education item DOM element
function createEducationItem(data) {
    const item = document.createElement('div');
    item.className = 'education-item';
    
    item.innerHTML = `
        <div class="degree" contenteditable="true">${data.degree}</div>
        <div class="institution" contenteditable="true">${data.institution}</div>
        <div class="date-location">
            <span class="dates" contenteditable="true">${data.dates}</span>
            <span class="location" contenteditable="true">${data.location}</span>
        </div>
        <div class="education-actions">
            <button class="btn btn-sm btn-remove-education"><i class="fas fa-trash"></i> Remove</button>
        </div>
    `;
    
    return item;
}

// Create skill category DOM element
function createSkillCategory(data) {
    const item = document.createElement('div');
    item.className = 'skills-category';
    
    item.innerHTML = `
        <div class="category-title" contenteditable="true">${data.category}</div>
        <div class="skills-list" contenteditable="true">${data.skills}</div>
        <button class="btn btn-sm btn-remove-skill-category"><i class="fas fa-trash"></i> Remove</button>
    `;
    
    return item;
}

// Create certification item DOM element
function createCertificationItem(data) {
    const item = document.createElement('div');
    item.className = 'certification-item';
    
    item.innerHTML = `
        <div class="certification-name" contenteditable="true">${data.name}</div>
        <div class="certifying-body" contenteditable="true">${data.body}</div>
        <div class="date" contenteditable="true">${data.date}</div>
        <button class="btn btn-sm btn-remove-certification"><i class="fas fa-trash"></i> Remove</button>
    `;
    
    return item;
}

// Set up event listeners
function setupEventListeners() {
    // Download PDF
    document.getElementById('downloadPdf').addEventListener('click', generatePDF);
    
    // Save Resume
    document.getElementById('saveResume').addEventListener('click', saveResumeData);
    
    // Reset Resume
    document.getElementById('resetResume').addEventListener('click', resetResume);
    
    // Print Resume
    document.getElementById('printResume').addEventListener('click', printResume);
    
    // Template selection
    document.querySelectorAll('[data-template]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const template = this.getAttribute('data-template');
            loadTemplate(template);
        });
    });
    
    // Add Experience
    document.getElementById('addExperience').addEventListener('click', addExperience);
    
    // Add Education
    document.getElementById('addEducation').addEventListener('click', addEducation);
    
    // Add Skills Category
    document.getElementById('addSkills').addEventListener('click', addSkillsCategory);
    
    // Add Certification
    document.getElementById('addCertification').addEventListener('click', addCertification);
    
    // Delegated event listeners for dynamic elements
    document.addEventListener('click', function(e) {
        // Add bullet point
        if (e.target.classList.contains('btn-add-bullet') || e.target.closest('.btn-add-bullet')) {
            const jobDesc = e.target.closest('.experience-item').querySelector('.job-description');
            const newBullet = document.createElement('li');
            newBullet.contentEditable = true;
            newBullet.setAttribute('data-placeholder', 'Job responsibility or achievement');
            jobDesc.appendChild(newBullet);
            newBullet.focus();
        }
        
        // Remove experience
        if (e.target.classList.contains('btn-remove-experience') || e.target.closest('.btn-remove-experience')) {
            if (confirm('Are you sure you want to remove this experience?')) {
                e.target.closest('.experience-item').remove();
            }
        }
        
        // Remove education
        if (e.target.classList.contains('btn-remove-education') || e.target.closest('.btn-remove-education')) {
            if (confirm('Are you sure you want to remove this education entry?')) {
                e.target.closest('.education-item').remove();
            }
        }
        
        // Remove skill category
        if (e.target.classList.contains('btn-remove-skill-category') || e.target.closest('.btn-remove-skill-category')) {
            if (confirm('Are you sure you want to remove this skill category?')) {
                e.target.closest('.skills-category').remove();
            }
        }
        
        // Remove certification
        if (e.target.classList.contains('btn-remove-certification') || e.target.closest('.btn-remove-certification')) {
            if (confirm('Are you sure you want to remove this certification?')) {
                e.target.closest('.certification-item').remove();
            }
        }
    });
}

// Set up auto-save for contenteditable elements
function setupAutoSave() {
    let saveTimeout;
    
    document.addEventListener('input', function(e) {
        if (e.target.getAttribute('contenteditable') === 'true') {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(saveResumeData, 2000);
        }
    });
}

// Save resume data to localStorage
function saveResumeData() {
    // Update resumeData object with current content
    updateResumeData();
    
    // Save to localStorage
    localStorage.setItem('atsResumeData', JSON.stringify(resumeData));
    
    // Show save confirmation
    const saveBtn = document.getElementById('saveResume');
    const originalHTML = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="fas fa-check"></i>';
    saveBtn.style.backgroundColor = '#2ecc71';
    
    setTimeout(() => {
        saveBtn.innerHTML = originalHTML;
        saveBtn.style.backgroundColor = '';
    }, 1500);
}

// Update resumeData object with current content
function updateResumeData() {
    // Header
    resumeData.sections.header = {
        name: document.querySelector('.resume-name').textContent,
        title: document.querySelector('.resume-title').textContent,
        phone: document.querySelector('.contact-info span:nth-child(1)').textContent,
        email: document.querySelector('.contact-info span:nth-child(2)').textContent,
        location: document.querySelector('.contact-info span:nth-child(3)').textContent,
        linkedin: document.querySelector('.contact-info span:nth-child(4)').textContent
    };
    
    // Summary
    resumeData.sections.summary = document.querySelector('.section-content').textContent;
    
    // Experience
    resumeData.sections.experience = [];
    document.querySelectorAll('.experience-item').forEach(item => {
        const experience = {
            jobTitle: item.querySelector('.job-title').textContent,
            company: item.querySelector('.company').textContent,
            dates: item.querySelector('.dates').textContent,
            location: item.querySelector('.location').textContent,
            bullets: Array.from(item.querySelectorAll('.job-description li')).map(li => li.textContent)
        };
        resumeData.sections.experience.push(experience);
    });
    
    // Education
    resumeData.sections.education = [];
    document.querySelectorAll('.education-item').forEach(item => {
        const education = {
            degree: item.querySelector('.degree').textContent,
            institution: item.querySelector('.institution').textContent,
            dates: item.querySelector('.dates').textContent,
            location: item.querySelector('.location').textContent
        };
        resumeData.sections.education.push(education);
    });
    
    // Skills
    resumeData.sections.skills = [];
    document.querySelectorAll('.skills-category').forEach(item => {
        const skills = {
            category: item.querySelector('.category-title').textContent,
            skills: item.querySelector('.skills-list').textContent
        };
        resume
