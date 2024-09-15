// Light and Dark Mode
function lightDarkMode() {
    var element = document.body;
    var themeIcon = document.getElementById('theme-icon')
    element.classList.toggle("light-dark-mode");

    if(element.classList.contains("light-dark-mode")) {
        themeIcon.src = "moon.png";
    }
    else {
        themeIcon.src = "sun.png";
    }
}

//---------------------------------------------------------------------//

//Word rotation effect for the header
const words = ["An ambitious", "A committed", "A passionate"];
let wordIndex = 0;

function changeWord() {
    const wordElement = document.getElementById('changing-word');
    
    // Fade out the word
    wordElement.style.opacity = 0;

    // After the fade-out transition, change the word and fade it in
    setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        wordElement.textContent = words[wordIndex];
        
        // Fade in the word
        wordElement.style.opacity = 1;
    }, 1000); // Matches the transition time of the new word
}

// Change the word every 1 second
setInterval(changeWord, 1000);

//---------------------------------------------------------------------//

// Function to show the full content of the blog post
function showPostContent(postId) {
    // Hide all other post contents
    const allPostContents = document.querySelectorAll('.post-content');
    allPostContents.forEach(content => {
        if (content.id !== postId) {
            content.style.display = 'none';
        }
    });

    // Show the selected post content
    const selectedPostContent = document.getElementById(postId);
    if (selectedPostContent.style.display === 'block') {
        selectedPostContent.style.display = 'none'; // Toggle off if already visible
    } 
    else {
        selectedPostContent.style.display = 'block'; // Show the content
    }
}

//---------------------------------------------------------------------//

// Filter blog posts by category
function filterPosts(category) {
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
        if (post.getAttribute('data-category') === category || !category) {
            post.style.display = 'block';
        } 
        else {
            post.style.display = 'none';
        }
    });
}

//---------------------------------------------------------------------//

// Search blog posts
function searchPosts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
        const title = post.querySelector('h4').innerText.toLowerCase();
        if (title.includes(searchQuery)) {
            post.style.display = 'block';
        } 
        else {
            post.style.display = 'none';
        }
    });
}