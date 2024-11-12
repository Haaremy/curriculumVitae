import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Hls from 'hls.js';
import fs from 'fs';
import path from 'path';
import https from 'https';

interface MoviePlayerProps {
  movie: string;
  onClose: () => void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movie, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    if (movie) {
      fetchMovie(movie);
    }

    // Cleanup on unmount
    return () => {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
    };
  }, [movie]);



  // Function to fetch the movie data
  const fetchMovie = async (movie: string) => {
    try {
      // Check if the movie is an HLS stream (e.g., .m3u8)
      if (movie.endsWith('.m3u8')) {
        setVideoSrc(movie); // Set the video source to the m3u8 URL directly for HLS
      } else {
        // Fetch as a normal video blob
        const response = await axios.get(movie, {
          responseType: 'blob', // Ensure we get the video file as a blob
        });
        const url = URL.createObjectURL(response.data);
        setVideoSrc(url);
      }
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      if (Hls.isSupported() && videoSrc.endsWith('.m3u8')) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play();
        });

        return () => {
          hls.destroy(); // Cleanup HLS when the component is unmounted
        };
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari and iOS devices that support HLS natively
        videoRef.current.src = videoSrc;
      }
    }
  }, [videoSrc]);

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      {videoSrc && (
        <video
          ref={videoRef}
          controls
          className="w-full max-w-4xl max-h-[80vh] mx-auto"
          onEnded={handlePause}
          autoPlay
        />
      )}
      <button
        onClick={handlePause}
        className="absolute top-2 right-2 bg-white text-black p-2 rounded-full hover:bg-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default MoviePlayer;
