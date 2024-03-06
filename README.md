<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Additional styles for animation */
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Welcome to My Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section id="about" class="section">
            <div class="container">
                <h2>About Me</h2>
                <p>Write something about yourself here. For example, describe your background, education, skills, and interests.</p>
            </div>
        </section>
        <section id="projects" class="section">
            <div class="container">
                <h2>Projects</h2>
                <div class="project">
                    <h3>Project Title</h3>
                    <p>Description of the project. Provide details about the project's purpose, technologies used, and your contributions.</p>
                    <img src="project_image.jpg" alt="Project Image">
                    <a href="#" class="button">Learn More</a>
                </div>
                <!-- Add more projects here -->
            </div>
        </section>
        <section id="contact" class="section">
            <div class="container">
                <h2>Contact Me</h2>
                <p>You can reach me at <a href="mailto:your_email@example.com">your_email@example.com</a>. Feel free to email me for inquiries, collaborations, or just to say hello!</p>
                <a href="mailto:your_email@example.com" class="button">Email Me</a>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2024 Your Name</p>
        </div>
    </footer>
    <script>
        // JavaScript for scroll animations
        document.addEventListener("DOMContentLoaded", function() {
            const sections = document.querySelectorAll('.section');

            function checkPosition() {
                sections.forEach(section => {
                    const position = section.getBoundingClientRect();
                    // If the section is in the viewport
                    if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
                        section.classList.add('visible');
                    } else {
                        section.classList.remove('visible');
                    }
                });
            }

            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', checkPosition);

            checkPosition();
        });
    </script>
</body>
</html>
