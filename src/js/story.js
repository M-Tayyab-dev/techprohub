// Story display functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = 'signup.html';
        return;
    }

    const storiesContainer = document.getElementById('stories-container');
    
    // Load and display stories from localStorage
    function loadStories() {
        console.log('Loading stories from localStorage');
        const stories = JSON.parse(localStorage.getItem('blogPosts')) || [];
        console.log('Stories retrieved:', stories);
        
        if(stories.length === 0) {
            storiesContainer.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-book-open text-4xl text-gray-300 mb-4"></i>
                    <p class="text-gray-500">No stories published yet</p>
                    <a href="editor.html" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">
                        Create your first story
                    </a>
                </div>
            `;
            return;
        }

        // Sort by newest first
        stories.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        storiesContainer.innerHTML = stories.map(story => `
            <div class="blog-post-card">
                ${story.bannerPath ? `
                <div class="h-48 bg-gray-200" style="background-image: url('${story.bannerPath}'); background-size: cover; background-position: center;">
                </div>
                ` : `
                <div class="h-48 bg-gray-200 flex items-center justify-center">
                    <i class="fas fa-book-open text-4xl text-gray-400"></i>
                </div>
                `}
                <div class="p-6">
                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-sm">${new Date(story.timestamp).toLocaleDateString()}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">${story.title}</h3>
                    <p class="text-gray-600 mb-4">${story.content.substring(0, 150)}${story.content.length > 150 ? '...' : ''}</p>
                    <div class="flex justify-between items-center mt-4">
                        <a href="#" onclick="return viewFullStory('${story.timestamp}')" class="text-blue-600 font-medium hover:text-blue-800">Read Full Story →</a>
                        <div class="action-buttons">
                            <button onclick="editStory('${story.timestamp}')">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteStory('${story.timestamp}')" class="delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadStories();

    // Make functions globally available
    window.deleteStory = function(timestamp) {
        if (confirm('Are you sure you want to delete this story?')) {
            const stories = JSON.parse(localStorage.getItem('blogPosts')) || [];
            const updatedStories = stories.filter(story => story.timestamp !== timestamp);
            localStorage.setItem('blogPosts', JSON.stringify(updatedStories));
            loadStories();
        }
    }

    window.editStory = function(timestamp) {
        const stories = JSON.parse(localStorage.getItem('blogPosts')) || [];
        const storyToEdit = stories.find(story => story.timestamp === timestamp);
        if (storyToEdit) {
            localStorage.setItem('editingStory', JSON.stringify(storyToEdit));
            window.location.href = 'editor.html';
        }
    }
});

// View full story function
window.viewFullStory = function(timestamp) {
    const stories = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const story = stories.find(s => s.timestamp === timestamp);
    if (story) {
        localStorage.setItem('viewingStory', JSON.stringify(story));
        window.location.href = 'view.html';
    }
    return false; // Prevent default anchor behavior
};
