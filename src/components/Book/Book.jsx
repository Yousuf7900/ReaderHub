import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    tags = [],
    category,
    yearOfPublishing,
  } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card w-80 bg-[#1e1e1e] text-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 rounded-2xl border border-gray-700">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt={bookName}
            className="rounded-xl h-48 w-full object-cover"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-lg font-semibold">{bookName}</h2>
          <p className="text-gray-400 text-sm">By {author}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {tags.length > 0 ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none px-3 py-2"
                >
                  {tag}
                </span>
              ))
            ) : (
              <>
                <span className="badge bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none px-3 py-2">
                  {category || "General"}
                </span>
                <span className="badge bg-gradient-to-r from-pink-500 to-orange-400 text-white border-none px-3 py-2">
                  {yearOfPublishing}
                </span>
              </>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-400">
              ⭐ {rating || "4.5"}/5
            </span>
            <button className="btn btn-sm bg-gradient-to-r from-indigo-500 to-purple-600 border-none text-white hover:from-purple-600 hover:to-pink-600">
              Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
