document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = 'signup.html';
        return;
    }

    const story = JSON.parse(localStorage.getItem('viewingStory'));
    if (!story) {
        window.location.href = 'story.html';
        return;
    }

    // Set page title and content
    document.title = `${story.title} | TechPro Hub`;
    document.getElementById('title').textContent = story.title;
    document.getElementById('date').textContent = new Date(story.timestamp).toLocaleDateString();
    document.getElementById('content').innerHTML = story.content;
    
    // Set banner image if exists
    const banner = document.getElementById('banner');
    if (story.bannerPath) {
        banner.style.backgroundImage = `url('${story.bannerPath}')`;
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    } else {
        banner.innerHTML = '<i class="fas fa-book-open text-6xl text-gray-400"></i>';
        banner.classList.add('flex', 'items-center', 'justify-center');
    }
});
