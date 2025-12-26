/* =========================================
   DJ OZ - Intro Video Modal
   Vanilla JS implementation
   ========================================= */

(function() {
    // Configuration - Set your intro video URL here
    const INTRO_VIDEO_CONFIG = {
        enabled: true,  // Set to false to disable intro video
        videoUrl: 'videos/djozintro.mp4',   // DJ OZ intro video
        showOnce: true  // If true, only shows once per session
    };

    // Only run if enabled and video URL is set
    if (!INTRO_VIDEO_CONFIG.enabled || !INTRO_VIDEO_CONFIG.videoUrl) {
        return;
    }

    // Check if already shown this session
    if (INTRO_VIDEO_CONFIG.showOnce && sessionStorage.getItem('djoz_intro_seen')) {
        return;
    }

    // Create the intro overlay
    function createIntroOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'intro-overlay';
        overlay.id = 'introOverlay';

        overlay.innerHTML = `
            <div class="intro-logo">DJ OZ</div>
            
            <video 
                id="introVideo"
                class="intro-video"
                autoplay
                muted
                playsinline
            >
                <source src="${INTRO_VIDEO_CONFIG.videoUrl}" type="video/mp4">
            </video>

            <button class="intro-btn unmute-btn" id="unmuteBtn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
                <span>Unmute</span>
            </button>

            <button class="intro-btn skip-btn" id="skipBtn">
                Skip Intro
            </button>
        `;

        document.body.insertBefore(overlay, document.body.firstChild);

        // Get elements
        const video = document.getElementById('introVideo');
        const unmuteBtn = document.getElementById('unmuteBtn');
        const skipBtn = document.getElementById('skipBtn');

        let isMuted = true;

        // Handle video end
        video.addEventListener('ended', function() {
            closeIntro();
        });

        // Handle video error
        video.addEventListener('error', function() {
            console.error('Intro video failed to load');
            closeIntro();
        });

        // Toggle mute
        unmuteBtn.addEventListener('click', function() {
            isMuted = !isMuted;
            video.muted = isMuted;
            
            if (isMuted) {
                unmuteBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                    <span>Unmute</span>
                `;
            } else {
                unmuteBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                    <span>Mute</span>
                `;
            }
        });

        // Skip button
        skipBtn.addEventListener('click', function() {
            closeIntro();
        });

        // Close intro function
        function closeIntro() {
            overlay.classList.add('fade-out');
            setTimeout(function() {
                sessionStorage.setItem('djoz_intro_seen', 'true');
                overlay.classList.add('hidden');
                overlay.remove();
            }, 500);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createIntroOverlay);
    } else {
        createIntroOverlay();
    }
})();