<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyrus Delos Santos - Profile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #4CAF50;
        }
        .section-title {
            font-size: 1.5em;
            margin-top: 20px;
            color: #4CAF50;
        }
        .contact-info {
            font-size: 1.2em;
            color: #333;
        }
        .sports-list {
            list-style-type: square;
            padding-left: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Profile - Cyrus Delos Santos</h1>
    
    <p id="intro"></p>

    <div>
        <h2 class="section-title">Favorite Sports</h2>
        <ul id="sportsList" class="sports-list"></ul>
    </div>

    <div>
        <h2 class="section-title">Contact</h2>
        <p id="contact" class="contact-info"></p>
    </div>
</div>

<script>
    const profileData = {
        name: "Cyrus Delos Santos",
        age: 19,
        major: "Webtech in IT",
        about: "Hello! I'm Cyrus, a 19-year-old Web Technology student in the IT field. I have a deep interest in technology and programming. I enjoy learning about web development and creating new projects. Outside of technology, I love playing sports!",
        favoriteSports: ["Basketball", "Swimming", "Volleyball"],
        email: "cyrusd467@gmail.com"
    };

    document.getElementById("intro").innerText = `${profileData.about}`;
    
    const sportsList = document.getElementById("sportsList");
    profileData.favoriteSports.forEach(sport => {
        const listItem = document.createElement("li");
        listItem.innerText = sport;
        sportsList.appendChild(listItem);
    });

    document.getElementById("contact").innerHTML = `Email: <a href="mailto:${profileData.email}">${profileData.email}</a>`;
</script>

</body>
</html>
