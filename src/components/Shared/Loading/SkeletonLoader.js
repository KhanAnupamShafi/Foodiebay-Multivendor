import React from 'react';

const SkeletonLoading = () => {
  return (
    <div className="flex justify-center place-items-center mt-10 flex-wrap gap-5">
      {Array(3).fill(
        <div className="mx-auto bg-white rounded shadow-lg w-96 rounded-2xl">
          <div className="h-[132px] p-3 overflow-hidden bg-gray-300 animate-pulse"></div>
          <div className="p-3 h-auto">
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div className="rating rating-sm pointer-events-none">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-gray-300 animate-pulse"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-gray-300 animate-pulse"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-gray-300 animate-pulse"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-gray-300 animate-pulse"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-gray-300 animate-pulse"
                />
              </div>
              <div className="h-4 col-span-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 col-span-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkeletonLoading;
