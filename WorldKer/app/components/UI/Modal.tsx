import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, companyName }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 w-full h-full">
      <div className="bg-purple-400 w-full h-full p-6 rounded-lg shadow-lg overflow-auto">
        <h2 className="text-4xl font-bold mb-6 text-black text-center">
          {companyName} - Future Stats
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-400 p-4 rounded shadow">Caja 1</div>
          <div className="bg-green-400 p-4 rounded shadow">Caja 2</div>
          <div className="bg-blue-400 p-4 rounded shadow">Caja 3</div>
          <div className="bg-yellow-400 p-4 rounded shadow">Caja 4</div>
        </div>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
