                 <!DOCTYPE html>
                 <html lang="en">
                 <head>
                     <meta charset="UTF-8">
                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
                     <title>Lyla’s Cafe</title>
                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css" />
                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                     <style>
                         /* CSS styles for basic layout */
                         body {
                             font-family: Arial, sans-serif;
                             margin: 0;
                             padding: 0;
                             background-color: #f8f8f8;
                         }
                         .container {
                             max-width: 1200px;
                             margin: 0 auto;
                             padding: 20px;
                         }
                         header {
                             background-color: #ffd699; /* Warm orange background color */
                             padding: 10px;
                             text-align: center;
                         }
                         nav {
                             background-color: #ffa64d; /* Lighter shade of orange for navigation */
                             padding: 10px;
                             text-align: center;
                         }
                         nav ul {
                             list-style-type: none;
                             margin: 0;
                             padding: 0;
                         }
                         nav ul li {
                             display: inline;
                             margin-right: 20px;
                         }
                         nav ul li a {
                             display: inline-block;
                             padding: 10px 20px;
                             background-color: #ff9933; /* Button color */
                             color: white;
                             text-decoration: none;
                             border-radius: 5px;
                             transition: background-color 0.3s ease;
                         }
                         nav ul li a:hover {
                             background-color: #e68a00; /* Darker shade on hover */
                         }
                         .content {
                             padding: 20px;
                         }
                         footer {
                             background-color: #ffd699; /* Footer in the same color as header */
                             padding: 10px;
                             text-align: center;
                         }
                         #map {
                             height: 400px;
                             width: 100%;
                         }
                         .social-links {
                             margin-top: 20px;
                             text-align: center;
                         }
                         .social-links a {
                             display: inline-block;
                             margin: 0 10px;
                             color: #ff9933; /* Social media icons color */
                             font-size: 24px;
                             transition: color 0.3s ease;
                         }
                         .social-links a:hover {
                             color: #e68a00; /* Darker shade on hover */
                         }
                     </style>
                 </head>
                 <body>
                     <header>
                         <h1>Lyla’s Cafe</h1>
                         <p>Welcome to our cozy cafe in Granite Falls!</p>
                     </header>
                     <nav>
                         <ul>
                             <li><a href="#about">About</a></li>
                             <li><a href="#menu">Menu</a></li>
                             <li><a href="#location">Location</a></li>
                             <li><a href="#contact">Contact</a></li>
                         </ul>
                     </nav>
                     <div class="container">
                         <section id="about" class="content">
                             <h2>About Us</h2>
                             <p>Lyla’s Cafe is a cozy little spot nestled in the heart of Granite Falls. We pride ourselves on serving delicious coffee, freshly baked pastries, and wholesome meals made with locally sourced ingredients. Our warm and inviting atmosphere makes Lyla’s Cafe the perfect place to relax and enjoy good food with friends and family.</p>
                         </section>
                         <section id="menu" class="content">
                             <h2>Menu</h2>
                             <div id="menuItems"></div>
                         </section>
                         <section id="location" class="content">
                             <h2>Location</h2>
                             <div id="map"></div>
                             <p>Located in: Cascade Station Apartments</p>
                             <p>106 Cascade Ave #101, Granite Falls, WA 98252</p>
                         </section>
                         <section id="contact" class="content">
                             <h2>Contact</h2>
                             <p>Phone: <a href="tel:+13606919413">(360) 691-9413</a></p>
                         </section>
                         <div class="social-links">
                             <a href="https://www.facebook.com/LylasCafe/" target="_blank"><i class="fab fa-facebook"></i></a>
                             <a href="https://www.yelp.com/biz/lylas-cafe-granite-falls" target="_blank"><i class="fab fa-yelp"></i></a>
                             <a href="https://postmates.com/store/lylas-cafe/MPE7x7XqVOG4T8lJyZFHYA" target="_blank"><i class="fab fa-postmates"></i></a>
                             <a href="https://www.ubereats.com/store/lylas-cafe/MPE7x7XqVOG4T8lJyZFHYA" target="_blank"><i class="fab fa-uber-eats"></i></a>
                             <a href="https://www.instagram.com/lylas_cafe/" target="_blank"><i class="fab fa-instagram"></i></a>
                             <a href="https://www.tripadvisor.com/Restaurant_Review-g58500-d24851969-Reviews-Lyla_s_Cafe-Granite_Falls_Washington.html" target="_blank"><i class="fab fa-tripadvisor"></i></a>
                         </div>
                     </div>
                     <footer>
                         <p>&copy; 2024 Lyla’s Cafe</p>
                     </footer>
                     <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
                     <script src="https://kit.fontawesome.com/a076d05399.js"></script>
                     <script>
                         document.addEventListener("DOMContentLoaded", function() {
                             // JavaScript to fetch and display menu items from JSON
                             fetch('menu.json')
                                 .then(response => response.json())
                                 .then(data => {
                                     const menuItemsContainer = document.getElementById('menuItems');
                                     data.forEach(item => {
                                         const menuItem = document.createElement('div');
                                         menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price: ${item.price}</p>`;
                                         menuItemsContainer.appendChild(menuItem);
                                     });
                                 })
                                 .catch(error => console.error('Error fetching menu:', error));

                             // Leaflet Map initialization
                             var map = L.map('map').setView([48.076015, -121.988275], 15);
                             L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                             }).addTo(map);
                                   L.marker([48.076015, -121.988275]).addTo(map)
                                       .bindPopup('Lyla’s Cafe')
                                       .openPopup();
                               });
                           });
                           </script>
                       </body>
                       </html>

