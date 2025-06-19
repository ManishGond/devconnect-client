import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage";
import { toast } from "react-toastify";

type ImageCropperModalProps = {
  imageSrc: string;
  onCropComplete: (croppedImg: string) => void;
  onCancel: () => void;
};

const ImageCropperModal: React.FC<ImageCropperModalProps> = ({ imageSrc, onCropComplete, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const handleCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleApply = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onCropComplete(croppedImage);
    } catch (e) {
      toast.error("Crop failed!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg space-y-4 w-[90vw] max-w-md">
        {/* Cropper area with fixed height */ }
        <div className="relative w-full h-64 bg-gray-200">
          <Cropper
            image={ imageSrc }
            crop={ crop }
            zoom={ zoom }
            aspect={ 1 }
            onCropChange={ setCrop }
            onZoomChange={ setZoom }
            onCropComplete={ handleCropComplete }
          />
        </div>

        {/* Buttons */ }
        <div className="flex justify-end space-x-2">
          <button
            onClick={ onCancel }
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={ handleApply }
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropperModal;
