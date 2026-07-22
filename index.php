<?php
// index.php - Main entry file
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Janani A | Full Stack Developer</title>

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <!-- Google Font: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap" rel="stylesheet">

    <!-- Main Stylesheets -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
</head>

<body>

    <?php
    // Include all template files
    //THIS IS HEADER SECTION FILE
    include 'templates/header.php';

    //THIS IS HERO SECTION FILE
    include 'templates/hero.php';

    //THIS IS ABOUT SECTION FILE
    include 'templates/about.php';

    //THIS IS EDUCATION SECTION FILE
    include 'templates/education.php';
    
    //THIS IS LANGUAGE SECTION FILE
    include 'templates/languages.php';
    //THS IS SKILLS SECTION FILE
    include 'templates/skills.php';
    //THIS IS PROJECTS SECTION FILE

    include 'templates/projects.php';
    //THIS IS INTERNSHIP SECTION FILE
    include 'templates/internships.php';
    //THIS IS ACHIEVEMENTS SECTION FILE
    include 'templates/achievements.php';
    //THIS IS CONTACT SECTION FILE

    include 'templates/contact.php';
    //THIS IS FOOTER SECTION FILE
    include 'templates/footer.php';
    ?>

    <!-- JavaScript -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/animations.js"></script>

</body>

</html>