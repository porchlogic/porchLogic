<script>
    // You can define any properties or imports here
    let imageUrl = "path_to_your_image.jpg"; // Replace with your image path
  </script>
  
  <style>
    .hero {
      display: flex;
      align-items: center;
      justify-content: center; /* Center the items horizontally */
      padding: 20px;
      background-color: #f4f4f4;
      gap: 20px; /* Add space between content and image */
    }
  
    .content, .image {
      flex: 0 1 50%; /* Flex-grow is 0, flex-shrink is 1, and flex-basis is 50% */
      display: flex;
      align-items: center;
      justify-content: center; /* Center content and image vertically and horizontally */
    }
  
    img {
      max-width: 100%;
      height: auto;
    }
  
    @media (max-width: 768px) {
      .hero {
        flex-direction: column-reverse; /* Stack items vertically with image on top */
      }
  
      .content, .image {
        flex: none; /* Reset flex settings */
        width: 100%; /* Take full width */
      }
    }
  </style>
  
  <div class="hero">
    <div class="content">
      <h1>Introducing Our Latest Product</h1>
      <p>Discover the future of simplicity and performance integrated into one design. Perfect for your needs.</p>
    </div>
    <div class="image">
      <img src={imageUrl} alt="Product Image">
    </div>
  </div>
  