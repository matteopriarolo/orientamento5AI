// Image/video data for each subject and year
const examples = {
    // Informatica
    'Informatica3Anno': {
        title: 'Esempio Informatica 3° Anno',
        images: ['assets/esempio3cpp.jpg']
    },
    'Informatica4Anno': {
        title: 'Esempio Informatica 4° Anno',
        images: ['assets/esempio3Java.png']
    },
    'Informatica5Anno': {
        title: 'Esempio Informatica 5° Anno',
        images: ['assets/db.webp']
    },

    // Sistemi e Reti
    'Sistemi3Anno': {
        title: 'Esempio Sistemi e Reti 3° Anno',
        images: ['assets/componentistica1-3.png', 'assets/componentistica2-3.png']
    },
    'Sistemi4Anno': {
        title: 'Esempio Sistemi e Reti 4° Anno',
        images: ['assets/stack.png', 'assets/ciscopt4.png']
    },
    'Sistemi5Anno': {
        title: 'Esempio Sistemi e Reti 5° Anno',
        images: ['assets/crittografia.jpg', 'assets/cisco5.png']
    },

    // TPSIT
    'TPSIT3Anno': {
        title: 'Esempio TPSIT 3° Anno',
        images: ['assets/sito3.png']
    },
    'TPSIT4Anno': {
        title: 'Esempio TPSIT 4° Anno',
        images: ['assets/login.png', 'assets/concorrente.png']
    },
    'TPSIT5Anno': {
        title: 'Esempio TPSIT 5° Anno',
        images: ['assets/hacker.png']
    },

    // GPOI
    'GPOI5Anno': {
        title: 'Esempio GPOI 5° Anno',
        images: ['assets/gantt.png']
    },

    // TLC
    'TLC3Anno': {
        title: 'Esempio TLC 3° Anno',
        images: ['assets/TLC.png']
    },
    'TLC4Anno': {
        title: 'Esempio TLC 4° Anno',
        images: ['assets/TLC.png']
    },

    // Video
    'video_videogioco': {
        title: 'Video Videogioco:',
        images: ['assets/video.mp4']
    }
};

// DOM elements
const modalTitle = document.getElementById('modalTitle');
const modalImages = document.getElementById('modalImages');

// Update modal content
function updateModal(exampleId) {
    const example = examples[exampleId];
    if (!example) return;

    modalTitle.textContent = example.title;

    modalImages.innerHTML = ''; // Clear previous media

    example.images.forEach(src => {
        // Check if source is a video
        if (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')) {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.className = 'img-fluid w-100 rounded';
            modalImages.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.alt = example.title;
            img.className = 'img-fluid rounded';
            modalImages.appendChild(img);
        }
    });
}

// Add event listeners
Object.keys(examples).forEach(id => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener('click', () => updateModal(id));
    }
});
