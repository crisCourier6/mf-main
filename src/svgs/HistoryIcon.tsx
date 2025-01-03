import React from 'react';

interface NoPhotoIconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const HistoryIcon: React.FC<NoPhotoIconProps> = ({ width = "256px", height = "256px", fill = "#425a6c" }) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={width} height={height}>
	<title>history</title>
	<path id="Path 0" className="s0" fill={fill} d="m201.5 0l53.4 53.5 0.3 69.5c0.2 38.2 0.1 80.6-0.7 118.7l-2.7 4.1c-1.7 2.5-4.9 5.4-13.3 10.2h-180l-8.5-2.6c-4.7-1.4-11.4-4.2-15-6.1-4-2.3-9.7-6.8-15-12.2-6.4-6.4-9.5-10.5-12.2-16.1-2.1-4.1-4.6-11.3-5.8-16-1.1-4.7-2-11.2-2-14.5 0-3.3 0.9-9.8 2.1-14.5 1.1-4.7 3.3-11.2 4.9-14.5 1.5-3.3 4.9-8.7 7.4-12 2.6-3.3 7.2-8.2 10.4-10.8 3.1-2.6 9.3-6.6 13.7-8.8 4.4-2.2 10.9-4.5 21-6.6l1-104.8 2.8-4.8c1.5-2.6 4.2-5.7 6-7 1.7-1.2 4.1-2.7 5.2-3.4 1.5-0.9 18.1-1.2 127-1.3zm-125.3 20.3c-0.9 2-1.2 14.8-1.2 51.7v49c4.3 0.8 8.1 1.7 11.2 2.5 3.2 0.8 8.2 2.7 11 4.1 2.9 1.5 7.2 4 9.5 5.5l4.3 2.9c103.7 0 105.1 0.1 107 2 1.2 1.2 2 3.3 2 5.2 0 1.8-0.4 3.8-0.8 4.4-0.4 0.6-1.7 1.6-3 2.3-1.5 0.8-15.2 1.1-47 1.1h-44.7c5.8 12 8.3 18.8 9.3 22.8l1.7 7.2c79.2 0 80.6 0.1 82.5 2 1.2 1.2 2 3.3 2 5.2 0 1.8-0.4 3.8-0.8 4.4-0.4 0.6-1.7 1.6-2.9 2.3-1.6 0.8-13.9 1.1-41.5 1.1h-39.3c-2.7 11.2-5.3 18.2-7.5 22.7-2.8 5.8-6 10.4-10.8 15.3l-6.7 7.1c122.8 0 124.1-0.1 126.8-2.1l2.7-2v-172c-38.2-0.1-45-0.4-46.1-1.3-0.9-0.7-2.1-2.2-2.7-3.5-0.8-1.5-1.2-9.3-1.2-23.7v-21.5c-98.2 0.1-109.8 0.3-111 1.4-0.8 0.7-2.1 2.5-2.8 3.9zm128.8 29.7h24.5c-17.8-17.8-23.3-23-23.7-23-0.5 0-0.8 5.2-0.8 11.5zm-159.8 91.5c-3.9 1.9-9.5 5.6-12.4 8.2-2.8 2.7-6.9 7.5-9 10.8-2.1 3.3-4.8 8.9-5.9 12.5-1.4 4.5-2 9.3-2 15.5 0 6.2 0.6 11 2 15.5 1.1 3.6 3.7 9.2 5.9 12.5 2.1 3.3 6.3 8.2 9.3 10.8 3 2.7 8.6 6.4 12.4 8.3 4.2 2 10 3.9 14.5 4.6 5.8 0.9 9.3 0.9 15.5-0.1 5.2-0.7 10.6-2.4 15.5-4.8 5.4-2.6 9.3-5.5 14-10.2 3.8-3.9 7.7-9.1 9.4-12.6 1.6-3.3 3.5-8.3 4.2-11 0.8-2.8 1.4-8.6 1.4-13 0-4.4-0.7-10.5-1.5-13.5-0.8-3-2.7-8-4.2-11-1.5-3-5.7-8.5-9.3-12.2-4.7-4.8-8.6-7.6-14-10.2-4.1-2-10-4-13-4.6-3-0.6-8-1-11-0.9-3 0.1-7.5 0.5-10 1-2.5 0.5-7.8 2.5-11.7 4.4zm113-50.5c56.4 0 57.7 0 59.7 2 1.2 1.2 2 3.3 2 5.2 0 1.8-0.4 3.8-0.8 4.4-0.4 0.6-1.7 1.6-2.9 2.3-1.7 0.8-18.2 1.1-59 1.1-43.1-0.1-57.2-0.4-58.4-1.3-0.9-0.7-2.1-2.3-2.8-3.7-1-2-1-3 0.1-5.4 0.7-1.6 2-3.2 2.8-3.7 0.8-0.5 27.5-0.9 59.3-0.9zm-90 60.1c1.5-0.1 3.6 0.8 4.7 1.9 1.8 1.8 2 3.3 2 28h8c6.7 0 8.3 0.3 10 2 1.2 1.2 2 3.3 2 5.2 0 1.8-0.4 3.8-0.8 4.4-0.4 0.6-1.7 1.6-2.9 2.3-1.4 0.6-7.1 1.1-14 1.1-7.7-0.1-12.4-0.5-13.4-1.3-0.9-0.7-2.1-2.2-2.7-3.5-0.8-1.4-1.2-7.9-1.2-17.7 0-11.8 0.4-16.2 1.5-18.4 0.8-1.6 2.1-3.1 2.8-3.4 0.6-0.3 2.4-0.6 4-0.6z"/>
</svg>
  );
}

export default HistoryIcon;