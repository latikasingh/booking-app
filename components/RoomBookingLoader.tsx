import React from "react";

const RoomBookingLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="text-center">
        {/* Loader Container */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          {/* Pulsing Dots Animation */}
          <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse delay-200"></div>
          <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse delay-400"></div>
        </div>

        {/* Loading Text */}
        <div className="text-lg text-amber-600 font-semibold animate-fadeIn">
          Preparing your meeting room...
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-2 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-gradient-to-r from-amber-500 to-amber-700 animate-progressBar"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingLoader;
