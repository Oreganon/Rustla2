import React from 'react';


const ServiceSelect = props =>
  <select className='form-control' name='service' defaultValue='twitch' {...props}>
    <option value='afreeca'>Afreeca</option>
    <option value='angelthump'>AngelThump</option>
    <option value='dailymotion'>Dailymotion</option>
    <option value='facebook'>Facebook</option>
    <option value='m3u8'>m3u8</option>
    <option value='nsfw-chaturbate'>Chaturbate (NSFW)</option>
    <option value='smashcast'>Smashcast</option>
    <option value='twitch'>Twitch</option>
    <option value='twitch-vod'>Twitch (VOD)</option>
    <option value='ustream'>Ustream</option>
    <option value='vaughn'>Vaughn</option>
    <option value='youtube'>YouTube</option>
    <option value='youtube-playlist'>YouTube (playlist)</option>
    <option value='advanced'>Advanced</option>
  </select>
  ;

export default ServiceSelect;
