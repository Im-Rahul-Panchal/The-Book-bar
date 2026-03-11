import { useEffect, useState } from "react";
import Cards from "./Cards";
import API from "../utils/api";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Easy() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get("/books");

        if (!Array.isArray(res.data)) {
          throw new Error("Invalid data format from server");
        }

        const freeBooks = res.data.filter(
          (book) => book.category?.toLowerCase() === "free",
        );

        setBooks(freeBooks);
      } catch (err) {
        console.error(err);

        if (err.response) {
          setError(err.response.data.message || "Server Error");
        } else if (err.request) {
          setError("Server not responding. Please try again later.");
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: books.length > 3,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          📚 Free Books Collection
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover amazing books completely free. Dive into stories, knowledge,
          and adventures without spending a single rupee.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-lg text-gray-500 animate-pulse">
          Loading free books...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
          ⚠️ {error}
        </div>
      )}

      {/* Empty */}
      {!loading && books.length === 0 && !error && (
        <div className="text-center text-gray-500 text-lg">
          😔 No free books available right now.
        </div>
      )}

      {/* Slider */}
      {!loading && books.length > 0 && (
        <Slider {...settings}>
          {books.map((item) => (
            <div className="px-3" key={item._id}>
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Easy;
