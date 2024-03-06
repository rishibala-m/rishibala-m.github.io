<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
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
                <p>Write something about yourself here.</p>
            </div>
        </section>
        <section id="projects" class="section">
            <div class="container">
                <h2>Projects</h2>
                <div class="project">
                    <h3>Project Title</h3>
                    <p>Description of the project.</p>
                    <img src="project_image.jpg" alt="Project Image">
                    <a href="#" class="button">Learn More</a>
                </div>
                <!-- Add more projects here -->
            </div>
        </section>
        <section id="contact" class="section">
            <div class="container">
                <h2>Contact Me</h2>
                <p>You can reach me at email@example.com</p>
                <a href="mailto:email@example.com" class="button">Email Me</a>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2024 Your Name</p>
        </div>
    </footer>
</body>
</html>
