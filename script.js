// Project Data
const projects = [
    {
        title: "Basic Environmental Monitoring System",
        description: "Developed a real-time temperature and humidity monitoring system using ESP32 and DHT11, with LED indicators and customizable user interface.",
        technologies: ["ESP32", "C++", "DHT11", "Serial Communication"],
        icon: "fas fa-temperature-high",
        color: "#4CAF50"
    },
    {
        title: "Data Upload Using Bluetooth",
        description: "Implemented BLE communication on ESP32 to broadcast temperature, humidity, and battery level data for real-time mobile access.",
        technologies: ["ESP32", "BLE", "DHT11", "nRF Connect"],
        icon: "fab fa-bluetooth-b",
        color: "#2196F3"
    },
    {
        title: "Cloud Data Upload Using WiFi",
        description: "Used ESP32 and Flask to transmit real-time sensor data over WiFi for centralized monitoring and display.",
        technologies: ["ESP32", "Flask", "WiFi", "JSON", "HTTP"],
        icon: "fas fa-cloud-upload-alt",
        color: "#FF9800"
    },
    {
        title: "Medical Insurance Cost Analysis",
        description: "Comprehensive analysis of medical insurance cost drivers to provide insights for healthcare planning and policies.",
        technologies: ["Python", "Pandas", "Scikit-Learn", "Statsmodels"],
        icon: "fas fa-hospital",
        color: "#E91E63"
    },
    {
        title: "Advertising Sales Prediction",
        description: "Built a linear regression model to predict sales based on advertising budgets in TV, radio, and newspapers.",
        technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
        icon: "fas fa-chart-line",
        color: "#FF5722"
    },
    {
        title: "Text Classification & Sentiment Analysis",
        description: "Developed sentiment analysis and text classification models using deep learning for IMDb and 20 Newsgroups datasets.",
        technologies: ["Keras", "TensorFlow", "NLTK", "Neural Networks"],
        icon: "fas fa-comment-dots",
        color: "#673AB7"
    },
    {
        title: "Emotion Detection Using MobileNetV2",
        description: "Developed an emotion detection model using MobileNetV2 architecture, trained on facial expression data to classify emotions.",
        technologies: ["TensorFlow", "Keras", "MobileNetV2", "Python"],
        icon: "fas fa-smile",
        color: "#9C27B0"
    },
    {
        title: "Data Visualization Project",
        description: "Developed interactive dashboards with Tableau, Power BI, and custom Python visuals for trend exploration and analysis.",
        technologies: ["Tableau", "Power BI", "Python", "Data Visualization"],
        icon: "fas fa-chart-bar",
        color: "#00BCD4"
    },
    {
        title: "Data Analysis & SQL Project",
        description: "Used SQL for complex data analysis, increased customer spending by 12%, built a Python feedback pipeline, and ensured data integrity.",
        technologies: ["SQL", "Python", "Data Analysis", "ETL"],
        icon: "fas fa-database",
        color: "#3F51B5"
    },
    {
        title: "Faceguard - Facial Detection & Recognition",
        description: "Implemented facial recognition using machine learning for secure and accurate authentication across diverse use cases.",
        technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
        icon: "fas fa-user-shield",
        color: "#607D8B"
    },
    {
    "title": "IoT-Based Smart Parking Management System",
    "description": "Designed a smart parking system using IoT technology to provide real-time parking updates via ultrasonic sensors, ESP32 microcontroller, and a web-based interface. Features time-based filtering for accurate detection and energy-efficient components for sustainability.",
    "technologies": ["ESP32", "Ultrasonic Sensors", "HTML", "CSS", "JavaScript", "WebSocket", "Arduino"],
    "icon": "fas fa-parking",
    "color": "#3F51B5"
    }
    
];

// Load Projects
function loadProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';
    
    projects.forEach((project, index) => {
        const delay = (index + 1) * 100;
        const projectCard = `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="project-card shadow-sm">
                    <div class="project-header d-flex align-items-center mb-3">
                        <div class="icon-wrapper me-3">
                            <i class="${project.icon}"></i>
                        </div>
                        <h3 class="project-title mb-0">${project.title}</h3>
                    </div>
                    <div class="project-content">
                        <p class="project-description text-muted">${project.description}</p>
                        <div class="project-technologies">
                            ${project.technologies.map(tech => 
                                `<span class="tech-badge">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });
}

// Scroll Animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});
