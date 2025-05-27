
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearSearch } from '../redux/SearchSlice';
import { addToCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';

const SearchResults = () => {
  const { query, results } = useSelector(state => state.search);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  if (!query) return null;

  return (
    <div className="font-sans mt-16">
      {/* Search Results Header */}
      <section className="bg-orange-400 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Search Results for "{query}"
          </h1>
          {/* <button 
            onClick={() => dispatch(clearSearch())}
            className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Clear Search
          </button> */}
        </div>
      </section>

      {/* Search Results Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-2xl text-gray-600">
                No products found matching your search.
              </p>
              <Link 
                to="/shop" 
                className="mt-6 inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
              >
                Browse All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map(product => (
                <div 
                  key={product.id} 
                  className="bg-gradient-to-r from-orange-100 to-orange-200 hover:scale-105 hover:shadow-2xl shadow-orange-500 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
                  style={{ boxShadow: '21px 21px 22px #fb913c' }}
                >
                  <Link to={`/viewDetails/${product.id}`}>
                    <img
                      src={product.images || '/placeholder-product.jpg'}
                      alt={product.name}
                      className="w-24 h-24 mx-auto mb-4 bg-transparent mix-blend-multiply object-contain"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-800 mb-4">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </Link>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-500 transition duration-300"
                  >
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Browse More Section */}
      {results.length > 0 && (
        <section className="pb-16 bg-gradient-to-r from-white to-orange-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Didn't find what you're looking for?
            </h2>
            <Link 
              to="/shop" 
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
            >
              Browse All Products
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchResults;