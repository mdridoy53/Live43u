<?php
header("Content-Type: audio/x-mpegurl");
header("Content-Disposition: attachment; filename=playlist.m3u");

// Ad URL and Stream URL
$ad_url = "https://www.effectiveratecpm.com/d2189jj6zk?key=55584f37c9ff8d0961281715905fe7fa";
$stream_url = "https://amartechbd.xyz/toffeebd/?play=match-1";

echo "#EXTM3U\n";

// Insert an ad before the main stream
echo "#EXTINF:10, Advertisement\n"; // 10-second ad
echo "$ad_url\n";

echo "#EXTINF:-1, Live Match\n";
echo "$stream_url\n";
?>
