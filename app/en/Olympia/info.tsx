import React from 'react';

interface ModalProps {
    message: { title: string; user: string; story: string; content: string; points: string; location: string; url: string; gameref: string;};
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
                {/* Modal Header (Close Button + Title) */}
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-semibold">{message.title}</h2>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                    >
                        Close
                    </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-y-auto max-h-[70vh]">
                    <p className="text-sm">{message.story}</p><br />
                    <p className="text-sm">Capacity of:<br />{message.user}</p><br />
                    <p className="text-sm">Explaination:<br />{message.content}</p><br />
                    <p className="text-sm">Points:<br />{message.points}</p><br />
                    <p className="text-sm text-pink-500"><a href={`./Olympia/Map?gameQuery=${message.gameref}`}>Map:<br />&#x1F50D; {message.location} &#x1F517;</a></p><br />
                    <p className="text-sm">Tutorial:</p>
                    
                    {/* Responsive Video */}
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe
                            className="w-full h-full"
                            src={message.url}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
