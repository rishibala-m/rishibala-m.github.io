<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>[Your Name]</h1>
    <p>[Your Title/Occupation]</p>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>[Write a short paragraph about yourself]</p>
    </section>

    <section id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        <li><a href="[Link to Portfolio Item 1]">[Portfolio Item 1 Title]</a></li>
        <li><a href="[Link to Portfolio Item 2]">[Portfolio Item 2 Title]</a></li>
        </ul>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Email: [Your Email Address]</p>
      <p>Phone: [Your Phone Number] (Optional)</p>
      </section>
  </main>

  <footer>
    <p>&copy; [Year] [Your Name]</p>
  </footer>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 5px;
}

p {
  font-size: 1.2em;
  margin-top: 0;
}

main {
  padding: 20px;
}

section {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #333;
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
