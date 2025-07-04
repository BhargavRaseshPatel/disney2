import React from "react";
import { useParams } from "react-router-dom";
import { allImages } from "@/constant";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const imageId = parseInt(id || "", 10);
  const item = allImages.find((img) => img.id === imageId);

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center text-xl">
        Item not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-12 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Block */}
        <div>
          <img
            src={item.imageURL}
            alt={item.title}
            className="rounded-2xl w-full max-h-[750px] object-cover shadow-2xl border border-gray-700"
          />
        </div>

        {/* Movie Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6 text-white">{item.title}</h1>

          <p className="text-2xl text-gray-300 mb-8 italic leading-relaxed">
            {item.description}
          </p>

          <div className="space-y-4 text-xl text-gray-300">
            <div>
              <span className="font-semibold text-white">Year:</span> {item.year}
            </div>
            <div>
              <span className="font-semibold text-white">Duration:</span> {item.duration}
            </div>
            <div>
              <span className="font-semibold text-white">Rating:</span> ⭐ {item.rating}
            </div>
            <div>
              <span className="font-semibold text-white">Genre:</span> {item.genre.join(", ")}
            </div>
            <div>
              <span className="font-semibold text-white">Director:</span> {item.director}
            </div>
            <div>
              <span className="font-semibold text-white">Cast:</span> {item.cast.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
