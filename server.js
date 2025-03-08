const express = require('express');
const app = express();

app.get('/playlist.m3u', (req, res) => {
    const adUrl = "https://www.effectiveratecpm.com/d2189jj6zk?key=55584f37c9ff8d0961281715905fe7fa";
    const streamUrl = "https://amartechbd.xyz/toffeebd/?play=match-1";

    res.setHeader('Content-Type', 'audio/x-mpegurl');
    res.send(`#EXTM3U
#EXTINF:10, Advertisement
${adUrl}
#EXTINF:-1, Live Match
${streamUrl}
`);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`M3U API running on http://localhost:${PORT}`));
