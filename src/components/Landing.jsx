import React from 'react'
import Navbar from './Navbar'


function Landing() {
  return (
    <div>
        <Navbar />
        <div class="video-container">
    {/* <!-- Mario Start on Sol --> */}
    <iframe id="vimeo-video" src="https://player.vimeo.com/video/942654400?autoplay=0&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>

  {/* <!-- Nút liên kết với Telegram --> */}
  <button class="button telegram-button" onclick="window.open('https://t.me/mariostart', '_blank')">Telegram</button>

  {/* <!-- Nút play --> */}
  <button class="button play-button" onclick="playRandomSection()">CA:PLAY</button>

  {/* <!-- Nút liên kết với Twitter --> */}
  <button class="button twitter-button" onclick="window.open('https://twitter.com/mario_onsol', '_blank')">Twitter</button>
    </div>
  )
}

export default Landing
