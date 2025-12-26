# Videos Folder

Upload your intro video here.

## How to Add Your Video:

1. Click the **"Add file"** button above (on GitHub)
2. Select **"Upload files"**
3. Drag and drop your video file (e.g., `intro.mp4`)
4. Click **"Commit changes"**

## Supported Formats:
- MP4 (recommended)
- WebM
- OGG

## File Size Note:
GitHub has a 100MB file limit. If your video is larger:
- Compress it using a tool like HandBrake
- Or host it externally (AWS S3, Cloudflare, etc.) and use the URL in the config

## After Uploading:
Update `js/intro-video.js` with your video filename:

```javascript
const INTRO_VIDEO_CONFIG = {
    enabled: true,
    videoUrl: 'videos/intro.mp4',  // Change this to your filename
    showOnce: true
};
```
