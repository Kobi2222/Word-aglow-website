const apiKey = ''; // Replace with your YouTube API key
const channelId = ''; // Replace with your YouTube Channel ID

/**
 * Checks the live status of a YouTube channel and updates the page
 * accordingly.
 *
 * Fetches the YouTube API's search endpoint with the following parameters:
 *   - part: snippet
 *   - channelId: the ID of the YouTube channel to check
 *   - eventType: live
 *   - type: video
 *   - key: your YouTube API key
 *
 * If a live video is found, updates the page with a message and an iframe
 * containing the live stream. Otherwise, updates the page with an offline
 * message.
 *
 * @private
 */

function checkLiveStatus() {
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const liveStatusDiv = document.getElementById('live-status');
      if (data.items && data.items.length > 0) {
        const liveVideoId = data.items[0].id.videoId;
        console.log('Live video ID:', liveVideoId);
        liveStatusDiv.innerHTML = `
          <p>We are <strong>LIVE</strong> now! Watch the stream below:</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${liveVideoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `;
      } else {
        liveStatusDiv.innerHTML = '<p>We are currently <strong>offline</strong>. Check back later for our next live stream!</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching live status:', error);
    });
}

// Run the function to check live status
checkLiveStatus();


 // Assuming you have a variable or API call that sets this
var isLive = false; // Change this condition based on your live status

window.onload = function() {
  if (isLive) {
    var rssIcons= document.querySelectorAll(".fa-rss");
  }
  // Loop through each element and add the red class
  rssIcons.forEach(function(icon) {
      icon.classList.add("icon-red");

  // Create a span for the "LIVE" text
      var liveText = document.createElement("span");
      liveText.classList.add("live-text");
      liveText.innerHTML = "LIVE &#x1F534;"; // Unicode red dot icon

      // Append the "LIVE" text to the parent of the icon
      icon.parentNode.appendChild(liveText);
  });
};