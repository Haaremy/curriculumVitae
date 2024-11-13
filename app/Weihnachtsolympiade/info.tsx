import React from 'react';

interface ModalProps {
    message: { title: string; user: string; story: string; content: string; points: string; location: string; };
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">{message.title}</h2>
                <p className="text-sm">{message.story}</p><br/><br/>
                <p className="text-sm">{message.user}</p><br/><br/>
                <p className="text-sm">{message.content}</p><br/><br/>
                <p className="text-sm">{message.points}</p><br/><br/>
                <p className="text-sm">{message.location}</p><br/><br/>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
