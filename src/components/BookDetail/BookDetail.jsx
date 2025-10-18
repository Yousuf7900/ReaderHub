import { useLoaderData, useParams } from "react-router";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  const {
    bookName,
    author,
    image,
    rating,
    tags = [],
    category,
    yearOfPublishing,
    publisher,
    totalPages,
    review,
  } = book;

  const handleAddToReadList = (id) => {
    addToStoredReadList(id);
  }

  const handleWishList = (id) => {
    addToStoredWishList(id);
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white flex justify-center items-center p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-[#1e1e1e] rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        {/* Left: Book Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center bg-[#181818]">
          <img
            src={image}
            alt={bookName}
            className="object-cover h-80 w-64 rounded-xl shadow-md my-6 md:my-0"
          />
        </div>

        {/* Right: Book Info */}
        <div className="md:w-1/2 w-full p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="text-gray-400">By {author}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white px-3 py-2"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Review */}
          <p className="text-gray-300 text-sm leading-relaxed mt-4">
            {review || "No review available."}
          </p>

          <div className="divider my-3"></div>

          {/* Book Info Grid */}
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <p>
              <span className="text-gray-400">Category:</span> {category}
            </p>
            <p>
              <span className="text-gray-400">Publisher:</span> {publisher}
            </p>
            <p>
              <span className="text-gray-400">Pages:</span> {totalPages}
            </p>
            <p>
              <span className="text-gray-400">Published:</span> {yearOfPublishing}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-400 text-sm">⭐ {rating}/5</p>
            <div className="flex gap-3">
              <button onClick={() => handleAddToReadList(bookId)} className="btn btn-sm bg-gradient-to-r from-green-500 to-teal-500 border-none text-white hover:from-teal-500 hover:to-green-500 transition-all">
                Mark As Read
              </button>
              <button onClick={() => handleWishList(bookId)} className="btn btn-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-none text-white hover:from-purple-600 hover:to-pink-600 transition-all">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
