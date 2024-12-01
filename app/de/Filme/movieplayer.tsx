import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Hls from 'hls.js';

interface ModalProps {
    movie: string;
    onClose: () => void;
}

const MoviePlayer: React.FC<ModalProps> = ({ movie, onClose }) => {

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
  }, [movie, videoSrc]);

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
          const savedTime = localStorage.getItem("curr"+movie);
          if (videoRef.current && savedTime) {
            videoRef.current.currentTime = parseFloat(savedTime);
          }
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
  }, [videoSrc, movie]);

  const handlePause = () => {
    if (videoRef.current) {
      const { currentTime } = videoRef.current;
      videoRef.current.pause();
      localStorage.setItem("curr"+movie, currentTime.toString());
      const duration = videoRef.current.duration; // Total duration of the video in seconds
      if (!isNaN(duration)) {
        localStorage.setItem("tot" + movie, duration.toString());
      }
    }
    onClose();
  };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-1 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
                {/* Modal Header (Close Button + Title) */}
                <div className="flex justify-between items-start mb-4">
                    <button
                        onClick={handlePause}
                        className="px-4 py-1 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                    >
                        Close
                    </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto max-h-[70vh]">   
                    {/* Responsive Video */}
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        {videoSrc && (
                        <video
                            ref={videoRef}
                            controls
                            className="w-full max-w-4xl max-h-[80vh] mx-auto"
                            onEnded={handlePause}
                            autoPlay
                        />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePlayer;
