import React from 'react';
import IconProps from '../interfaces/IconProps';

const SubmissionsIcon: React.FC<IconProps> = ({ width = "100%", height = "100%", fill = "#425a6c" }) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
	<title>submissions</title>
	<path id="Path 0" className="s0" fill={fill} d="m207 0.3c4.1 0.3 10.9 1 15 1.7 4.1 0.6 12.2 2.7 18 4.6 5.8 1.9 13.9 5.3 18 7.6 4.1 2.2 10.8 6.6 14.9 9.7 4.1 3.1 10.3 8.8 13.8 12.6 3.5 3.9 7.9 9.3 9.7 12 1.9 2.8 5 7.9 6.9 11.5 2 3.6 4.8 9.8 6.2 13.8 1.4 3.9 3.2 10.5 4.2 14.5 1.1 5 1.6 11.8 1.6 22.7 0 10.9-0.5 17.7-1.6 22.8-1 3.9-2.8 10.5-4.2 14.5-1.4 3.9-4.2 10.1-6.2 13.7-1.9 3.6-5 8.8-6.9 11.5-1.8 2.8-6.2 8.2-9.7 12-3.5 3.8-9.7 9.5-13.8 12.6-4.1 3.1-10.8 7.5-14.9 9.7-4.1 2.3-12.2 5.7-18 7.6-5.8 1.9-14 3.9-18.3 4.5-4.2 0.6-11.4 1.1-15.9 1.1-4.6 0-12.4-0.7-17.3-1.5-4.9-0.8-12.2-2.5-16-3.8-3.8-1.4-9.9-3.8-13.5-5.4-3.6-1.6-10.1-5.4-14.5-8.3-4.4-3-11.6-9-16.1-13.5-4.4-4.4-10.5-11.6-13.4-16-3-4.4-6.8-11.2-8.6-15-1.8-3.8-4.4-10.8-5.8-15.5-1.3-4.7-2.9-12-3.5-16.2-0.6-4.3-1.1-11-1.1-14.8 0-3.8 0.5-10.5 1.1-14.7 0.6-4.3 2.2-11.6 3.5-16.3 1.4-4.7 4-11.7 5.8-15.5 1.8-3.8 5.6-10.6 8.6-15 2.9-4.4 8.8-11.4 12.9-15.6 4.2-4.1 10.3-9.5 13.6-11.9 3.3-2.4 9.2-6.1 13-8.1 3.8-2.1 11.1-5.1 16-6.9 4.9-1.7 13.3-3.8 18.5-4.6 5.2-0.9 9.7-1.8 10-2.1 0.3-0.2 3.9-0.3 8 0zm-31.5 36.8c-3.8 1.7-8.8 4.2-11 5.6-2.2 1.4-6.4 4.4-9.4 6.7-2.9 2.2-7.7 7-10.6 10.6-2.9 3.6-6.6 9-8.3 12-1.7 3-4.1 8.2-5.2 11.5-1.2 3.3-2.8 9.3-3.6 13.3-0.8 3.9-1.4 10.4-1.4 14.2 0 3.9 0.6 10.3 1.4 14.3 0.8 3.9 2.4 9.9 3.6 13.2 1.1 3.3 3.5 8.5 5.2 11.5 1.7 3 5.2 8.2 7.9 11.5 2.7 3.3 6.8 7.6 9.1 9.6 2.4 2 7 5.3 10.3 7.4 3.3 2.1 8.9 5 12.5 6.5 3.6 1.5 9 3.3 12 4.1 3.3 0.8 10.5 1.4 18 1.4 7.5 0 14.7-0.6 18-1.4 3-0.8 8.4-2.6 12-4.1 3.6-1.4 9.7-4.7 13.5-7.2 3.8-2.4 9.6-7 12.8-10.1 3.1-3.2 7.8-9 10.5-12.9 2.6-4 6-10.3 7.5-14 1.5-3.8 3.4-10.7 4.2-15.5 0.8-4.9 1.5-11.3 1.5-14.3 0-3-0.7-9.4-1.5-14.2-0.8-4.9-2.7-11.8-4.2-15.5-1.5-3.8-4.9-10.1-7.5-14-2.7-4-7.4-9.8-10.5-13-3.2-3.1-9-7.7-12.8-10.2-3.8-2.4-9.7-5.6-13-6.9-3.3-1.4-8.2-3.1-11-3.9-2.7-0.8-10.4-1.6-17-1.8-8.6-0.4-14 0-19 1.1-3.8 0.9-10.2 2.9-14 4.5zm141 177.5c2.2 0.3 5.6 1 7.5 1.4 1.9 0.5 6.1 2.7 9.3 5 4.5 3.2 6.6 4 10 4 2.8 0 4.9 0.6 6.5 2 2.1 1.9 3.5 2 23.5 2 16.7 0 22.2 0.3 25.7 1.5 2.5 0.9 5.8 2.8 7.4 4.3 1.6 1.5 3.7 4.5 4.7 6.7 1.7 3.6 1.9 6.9 2 57l4 2.5c2.3 1.4 5.8 4.4 11.9 11l5.1-10.3c2.8-5.6 7.6-14 10.7-18.7 3-4.7 8.7-11.7 12.6-15.5 4-4 9.5-8.3 12.6-9.8 3-1.5 7.5-3 10-3.3 2.9-0.4 5.9-0.1 8.5 0.9 2.2 0.9 5.8 3.5 8 5.9 2.3 2.5 4.9 7 6.2 10.4 1.1 3.2 2.6 8.8 3.2 12.4 0.6 3.6 1.1 10.6 1.1 15.5 0 4.9-0.7 13.9-1.5 20-0.9 6.1-2.5 14.8-3.6 19.5-1.1 4.7-2.2 9.3-2.4 10.2-0.4 1.4 0.1 1.8 2 1.8 1.4 0 3.5 0.5 4.8 1.1 1.2 0.7 3 2 4 3 1.6 1.8 1.7 6.6 1.7 141.4l-2.3 4.5c-1.3 2.5-4.1 5.8-11.2 11h-70.8c-43.9 0-71.2-0.4-72-1-0.6-0.5-2.9-2.4-5.1-4.2-2.1-1.8-4.5-4.7-5.4-6.3-0.9-1.8-1.8-7.1-2.7-23.5h-113l-4.5-2.3c-3-1.6-5.5-4-10.5-12l-0.3-106.1c-0.2-80.9 0-107.4 0.9-111.6 0.9-4.2 2.2-6.4 5.3-9.5 2.3-2.2 5.9-4.6 8.1-5.3 2.6-0.7 11.5-1.2 25.5-1.2 20.3 0.1 21.6 0 23.4-2 1.5-1.5 3.2-2 7-2 4.2 0 5.6-0.4 7.6-2.5 1.4-1.4 4.1-3.3 6-4.2 1.9-1 6-2.3 9-2.9 3-0.7 7.3-1 9.5-0.8zm-19.4 16.3c-2.3 2.8-3.2 3.1-7.8 3.1h-5.3v20h59v-20c-9.4 0-10.6-0.4-13.1-3-1.6-1.7-4.5-3.7-6.4-4.5-2.1-0.9-6.3-1.5-10.2-1.4-3.8 0-8.4 0.6-10.2 1.4-1.9 0.7-4.6 2.7-6 4.4zm-71.1 13.1c-0.6 1.3-1 40-1 110v108l5.5 5.1 112.5-0.1v-9c-91.3 0-99.5-0.2-102.5-1.5q-3.5-1.5-5-5c-1.3-3-1.5-16.3-1.5-98.8 0-93.4 0-95.3 2-98.5 1.1-1.7 3.1-3.7 4.5-4.2 1.4-0.6 9.5-1 18-1h15.5v-10c-37 0.1-42.1 0.4-44.3 1.5-1.5 0.8-3.1 2.4-3.7 3.5zm127 5h33l7 7v38c4.3 0 6.5 0.4 7.8 0.8l2.4 0.7-0.7-50.5-5.5-5.5-43.9-0.6zm-108.5 198.5l98.5 0.5v-30c-37.4 0-41.3-0.3-42.5-1.5-0.8-0.8-1.5-2.5-1.5-3.8 0-1.2 0.5-2.8 1.2-3.5 0.9-0.9 6.7-1.2 22-1.2h20.8v-35c-36.2 0-41.8-0.3-42.8-1.2-0.7-0.7-1.2-2.2-1.2-3.3 0-1.1 0.7-2.8 1.7-3.7 1.6-1.5 4.3-1.8 22.1-1.8h20.2c1.2-5.7 2.7-8.3 4.3-9.7 2.6-2.2 2.7-2.5 1.8-8.6-0.5-3.4-0.6-8.4-0.2-11l0.6-4.7c-41.9 0-46.4-0.3-48.2-1.5-1.3-0.8-2.3-2.5-2.3-3.8 0-1.2 0.5-2.8 1.2-3.5 0.9-0.9 7.7-1.2 27-1.2h25.8c2.2-4.3 4.6-7.5 6.7-10 2.2-2.5 6.2-6 8.9-7.7 2.7-1.8 7-3.9 9.7-4.8l4.7-1.5v-36c-29.5 0-30.1 0.1-33 2.5l-3 2.5c-59.4 0-65.5-0.3-68-1.5-1.6-0.8-3-2-3-2.5 0-0.6-6-1-16-1h-16zm221.1-174.7c-2.1 2-6.5 7.3-9.8 11.7-3.3 4.4-9 14.3-12.8 22-3.8 7.7-8.8 19.5-11 26.2-2.2 6.8-4 13-4 13.8 0 0.9 2.8 2.8 6.7 4.6 3.8 1.7 8.1 3.7 9.8 4.4 2.8 1.3 3.6 1.1 11-2.4 4.4-2.1 9.1-4.1 10.5-4.5 1.9-0.6 4.7 0.3 11.3 3.6 7.4 3.6 9 4.1 9.7 2.8 0.5-0.8 2.2-6.7 3.9-13 1.6-6.3 3.5-14.9 4.3-19 0.7-4.1 1.3-14.7 1.3-23.5-0.1-12.8-0.4-17.2-1.9-22-1.2-3.9-3.2-7.3-5.5-9.7-2.6-2.6-4.5-3.7-6.6-3.8-1.7 0-5.3 1.2-8 2.6-2.8 1.4-6.7 4.2-8.9 6.2zm-91.1 36.4c-2.2 1.4-5.5 4.1-7.3 6.1-1.7 2-4.1 5.4-5.1 7.4-1 2.1-2.5 6.5-3.2 9.8-1 4.9-1 7.1 0 12 0.7 3.3 1.7 6.8 2.2 7.7 0.5 1 2.2 2.5 3.9 3.3 2.9 1.4 3.3 1.3 11.2-2.6 5-2.5 9.7-4.1 11.8-4.1 2.1 0 6.9 1.6 11.7 4.1l8.3 4.1c7.3-3.7 8.2-4.7 9.1-8.3 0.5-2.3 2-7.6 3.1-11.7 1.1-4.1 2.5-8.4 3-9.5 0.6-1.1 0.8-3.1 0.5-4.5-0.3-1.4-2.5-4.8-5-7.5-2.6-2.9-6.8-6.2-10.3-8-4.8-2.4-7.4-3-13.9-3.2-4.6-0.2-9.7 0.3-12 1-2.2 0.8-5.8 2.5-8 3.9zm-5.8 57.8c-1.5 0-5.4-1.4-8.7-3-3.3-1.7-6.2-3-6.5-3-0.3 0-0.4 30.4-0.3 67.6l0.3 67.6 6.5 5.8 136.9-0.5 4.6-4.6c0.4-104.5 0.2-134.9-0.3-134.9-0.4 0-3.3 1.1-6.5 2.5-3.1 1.4-6.7 2.5-8 2.4-1.2 0-6-2-10.7-4.3l-8.5-4.4c-13.6 6.8-18.6 8.8-20 8.8-1.4 0-6.5-2-11.4-4.4l-8.8-4.4c-13 6.7-17.9 8.7-19.3 8.7-1.4 0.1-6.5-1.9-11.3-4.4-4.9-2.5-8.9-4.5-9-4.4-0.1 0-3.8 2.1-8.2 4.5-4.4 2.4-9.2 4.3-10.8 4.4zm-166.5-128.5l-0.2 14.5c0 8-0.2 14.6-0.3 14.7-0.1 0.1-7.9 0.7-17.2 1.2-9.4 0.6-23.1 2-30.5 3.1-7.4 1.1-18 3.1-23.5 4.4-5.5 1.4-15.4 4.1-22 6.1-6.6 2-18.3 6.7-26 10.4-7.7 3.7-16.3 8.2-19 10.1-2.8 1.8-7.8 5.6-11.3 8.4-3.5 2.8-8.3 7.6-10.7 10.6-2.4 3-5.6 8.2-7.2 11.5-2.7 5.8-2.8 6.5-3.1 25.5-0.3 15.4-0.1 19.7 1 20.7 1 0.9 20.4 1.3 80 1.5 76.8 0.3 78.7 0.3 81.4 2.3 1.4 1.1 3.5 3.1 4.6 4.5 1.1 1.4 2.1 4.5 2.4 7 0.4 3.3 0 5.4-1.4 8-1 1.9-3.4 4.5-8.7 8.1l-165-0.6-6.4-3.5c-3.5-1.9-7.9-5.3-9.6-7.5-1.8-2.2-3.8-5.1-4.5-6.5-0.7-1.4-2.1-5-3.1-8-1.3-3.7-1.8-8.4-1.8-14.5 0-5 0.4-14.9 0.9-22 0.6-9.5 1.6-15 3.4-20.5 1.4-4.1 4.7-11.1 7.3-15.5 3-4.9 8.3-11.4 13.8-17 5.6-5.7 13.1-11.8 20-16.4 6-4 15.3-9.3 20.5-11.8 5.2-2.5 13.3-6.1 18-8 4.7-1.8 14.8-5.2 22.5-7.4 7.7-2.2 20.5-5.3 28.5-6.9 8-1.6 21.2-3.6 29.5-4.5 8.2-0.8 17.9-1.7 21.5-1.8 3.6-0.2 8.7-0.3 16.2-0.2zm77 35.5c1 0 2.5 0.7 3.3 1.5 0.8 0.8 1.5 2.3 1.5 3.2 0 1-3.2 6.1-7.1 11.3-3.9 5.2-8 10.5-9.2 11.8-1.2 1.2-2.9 2.2-3.7 2.2-0.8 0-3.5-1.9-5.8-4.2-3.7-3.6-4.3-4.8-3.8-7.1 0.4-1.7 1.4-2.9 2.8-3.3 1.3-0.3 3.3-0.1 4.5 0.5 2.1 1 2.7 0.5 8-6.7 3.1-4.2 6.1-8 6.7-8.4 0.6-0.4 1.9-0.8 2.8-0.8zm54 0c18.6 0 31.6 0.4 32.8 1 1.2 0.6 2 2 2 3.5 0 1.4-0.7 3.2-1.6 4-1.3 1.3-6.3 1.5-32.5 1.5-18.6 0-31.7-0.4-32.9-1-1.2-0.6-2.1-2.1-2.2-4-0.1-2 0.5-3.2 1.8-3.9 1.2-0.7 13.7-1.1 32.6-1.1zm133.6 15c0.9 0 5.3 1.2 9.7 2.6 4.4 1.5 8.6 3.2 9.3 3.8 0.7 0.6 1.3 2 1.2 3.1 0 1.1-0.8 2.8-1.8 3.8-0.9 1-2 1.7-2.5 1.7-0.4 0-4.8-1.5-9.8-3.3-5.3-1.8-9.5-4-10-5-0.6-1.1-0.4-2.6 0.6-4.2 0.9-1.4 2.3-2.5 3.3-2.5zm-153.1 5c11.6 0 12.4 0.1 13.8 2.2 0.8 1.3 1.5 2.6 1.5 3 0 0.5-0.9 1.7-2 2.8-1.8 1.8-3.3 2-13.3 2-9.2-0.1-11.5-0.4-13-1.8-1-0.9-1.8-2.6-1.9-3.8-0.1-1.1 0.4-2.5 1.2-3.2 0.9-0.8 5.6-1.2 13.7-1.2zm143.4 15c1 0 6.3 1.4 11.6 3.1 5.4 1.7 10.6 3.9 11.6 4.8 1 0.9 1.8 2.5 1.7 3.6 0 1.1-0.5 2.6-1.2 3.2-0.7 0.7-2.3 1.3-3.8 1.2-1.4-0.1-7.2-1.7-13-3.7-10-3.5-10.5-3.9-10.8-6.7-0.1-1.7 0.3-3.6 0.9-4.3 0.6-0.6 2-1.2 3-1.2zm-177.7 10.2c2.2 0.2 3.3 1 4.1 2.9 0.9 2.4 0.2 3.7-7.8 14.3-7.3 9.8-9.1 11.6-11.5 11.6-1.9 0.1-3.8-1.1-6.5-4-2-2.2-3.7-4.7-3.7-5.5 0-0.8 0.9-2.4 2-3.5 1.1-1.1 2.3-2 2.7-2 0.5 0 1.7 0.6 2.8 1.4 1.9 1.4 2.4 1 8.4-7 5.8-7.8 6.6-8.5 9.5-8.2zm173 9.8c1.2 0 5.5 1.1 9.6 2.5 4.1 1.4 8.1 3.1 8.8 3.8 0.7 0.7 1.3 2.1 1.3 3.2-0.1 1.1-0.6 2.6-1.3 3.2-0.7 0.7-2.1 1.3-3.3 1.3-1.1 0-5.4-1.1-9.5-2.5-4.1-1.5-8.1-3.1-8.8-3.8-0.7-0.7-1.4-2.1-1.4-3.3-0.1-1.1 0.4-2.5 1.2-3.2 0.8-0.7 2.3-1.2 3.4-1.2zm-139.2 9c5.8 0 10.8 0.5 12.3 1.2 1.4 0.7 2.8 2.2 3.1 3.3 0.3 1.2-0.2 2.7-1.3 3.8-1.5 1.5-3.6 1.8-13.8 1.7-8.3 0-12.4-0.4-13.3-1.2-0.7-0.7-1.3-2.3-1.4-3.5 0-1.3 0.9-2.8 2.3-3.8 1.8-1.1 5-1.5 12.1-1.5zm-34.3 25c0.9 0 2.4 0.8 3.4 1.8 1 0.9 1.8 2.4 1.8 3.2 0 0.8-3.7 6.4-8.2 12.5-4.5 6-8.6 11.3-9.3 11.7-0.6 0.4-1.8 0.8-2.6 0.8-0.8 0-3.4-1.9-5.8-4.2-2.3-2.4-4.2-5-4.3-5.8 0-0.8 1-2.4 2.1-3.5 1.9-1.8 2.5-1.9 5.1-0.8 2.9 1.3 3 1.2 7-4.5 2.3-3.1 5.3-6.9 6.7-8.5 1.4-1.5 3.3-2.7 4.1-2.7zm35.2 20c11.6 0 11.9 0 13.4 2.5 1.3 2.2 1.3 2.8 0 5-1.5 2.4-1.8 2.5-13.5 2.5-9.3 0-12.3-0.3-13.5-1.5-0.8-0.8-1.5-2.4-1.6-3.4 0-1.1 0.7-2.7 1.6-3.5 1.3-1.3 4.1-1.6 13.6-1.6zm-34.9 25c1.8 0 3.2 0.7 3.8 2 0.5 1.1 1 2.6 1 3.2 0 0.7-3.7 6.2-8.3 12.3-4.6 6-9.1 11.3-10 11.7-0.9 0.5-2.5 0.4-3.5-0.1-0.9-0.5-3.2-2.4-5-4.3-2.7-2.7-3.3-3.8-2.8-6.1 0.4-1.9 1.4-2.9 3.3-3.3 1.6-0.4 3.6-0.2 4.5 0.5 1.6 0.9 2.6 0 8-7.4 5.2-7.2 6.6-8.5 9-8.5zm34.5 20c11.6 0 12.4 0.1 13.8 2.2 0.8 1.3 1.5 2.6 1.5 3 0 0.5-0.9 1.7-2 2.8-1.8 1.8-3.3 2-13.3 2-9.2-0.1-11.5-0.4-13-1.8-1-0.9-1.8-2.6-1.9-3.8-0.1-1.1 0.4-2.5 1.2-3.2 0.9-0.8 5.6-1.2 13.7-1.2z"/>
</svg>
  );
}

export default SubmissionsIcon;