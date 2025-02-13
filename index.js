<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rose Garden for You</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <!-- Popup Message -->
    <div class="popup" id="popup">
        <div class="popup-content">
            <p>Hello, my dear crush! 🌹 Welcome to this enchanted rose garden, made just for you. </p>
            <P> Each rose holds a special message from my heart—hover over them and let the magic unfold! 💖</p>
            <button onclick="closePopup()">Enter Garden</button>
        </div>
    </div>
    <!-- Central Note -->
    <div class="note">
        <p>Hello [Her Name],</p>
        <p>I want to let you know that you are amazing. You are like a flower—beautiful, unique, and full of life. Your presence brightens my day, and I feel so lucky to know you. Happy Rose Day!</p>
    </div>
    <!-- Rose Garden -->
    <div class="garden">
        <div class="rose" data-message="You are as beautiful as a blooming rose!" style="top: 10%; left: 10%;">🌹</div>
        <div class="rose" data-message="Your kindness makes the world brighter!" style="top: 10%; right: 10%;">🌹</div>
        <div class="rose" data-message="I feel lucky to know you!" style="top: 50%; left: 10%;">🌹</div>
        <div class="rose" data-message="Happy Rose Day! This garden is for you!" style="top: 50%; right: 10%;">🌹</div>
        <div class="rose" data-message="You inspire me every day!" style="bottom: 10%; left: 10%;">🌹</div>
        <div class="rose" data-message="Your smile is my favorite!" style="bottom: 10%; right: 10%;">🌹</div>
        <div class="rose" data-message="You make my heart bloom!" style="top: 30%; left: 30%;">🌹</div>
        <div class="rose" data-message="You are my sunshine!" style="top: 30%; right: 30%;">🌹</div>
    </div>