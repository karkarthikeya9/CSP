<?php
/**
 * Skill Swap Database Configuration File
 *
 * NOTE: Credentials have been updated based on user input.
 */

// Database connection details
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'revanth2506');  // <-- UPDATED PASSWORD
define('DB_NAME', 'skill_swap_db');

// Attempt to connect to MySQL database
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if($link === false){
    // In a production environment, you would log this error and show a generic message.
    die("ERROR: Could not connect to the database. " . mysqli_connect_error());
}

// Set character set to UTF-8
mysqli_set_charset($link, "utf8mb4");

// Return the connection link for use in other files
return $link;
?>
