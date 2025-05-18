import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductCreate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editProduct = location.state?.product;

  const [previewImages, setPreviewImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    mukhiCount: '',
    origin: '',
    size: '',
    color: '',
    images: [],
    stock: '',
    isBlessed: false,
    benefits: ''
  });

  // Initialize form when component mounts or editProduct changes
  useEffect(() => {
    if (editProduct) {
      setIsEditMode(true);
      setProduct({
        name: editProduct.name,
        description: editProduct.description,
        price: editProduct.price.toString(),
        category: editProduct.category,
        mukhiCount: editProduct.mukhiCount.toString(),
        origin: editProduct.origin,
        size: editProduct.size,
        color: editProduct.color,
        images: editProduct.images,
        stock: editProduct.stock.toString(),
        isBlessed: editProduct.isBlessed || false,
        benefits: editProduct.benefits
      });
      
      // Set preview images for existing product images
      if (editProduct.images && editProduct.images.length > 0) {
        setPreviewImages(editProduct.images.map(img => ({
          preview: img,
          isExisting: true // Mark existing images from server
        })));
      }
    }
  }, [editProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + previewImages.length > 5) {
      toast.error('You can upload a maximum of 5 images');
      return;
    }

    const newPreviewImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      isExisting: false
    }));

    setPreviewImages(prev => [...prev, ...newPreviewImages]);
  };

  const removeImage = (index) => {
    const newPreviewImages = [...previewImages];
    // Only revoke object URL if it's not an existing image
    if (!newPreviewImages[index].isExisting) {
      URL.revokeObjectURL(newPreviewImages[index].preview);
    }
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    const requiredFields = ['name', 'description', 'price', 'category', 'mukhiCount', 'origin', 'size', 'color', 'stock', 'benefits'];
    const missingFields = requiredFields.filter(field => !product[field]);

    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
      setIsLoading(false);
      return;
    }

    if (previewImages.length === 0) {
      toast.error('Please upload at least one image');
      setIsLoading(false);
      return;
    }

    try {
      // Prepare form data for image upload
      const formData = new FormData();
      
      // Only append new files (not existing images)
      previewImages.forEach(image => {
        if (!image.isExisting && image.file) {
          formData.append('images', image.file);
        }
      });

      // Prepare product data
      const productData = {
        ...product,
        price: parseFloat(product.price),
        mukhiCount: parseInt(product.mukhiCount),
        stock: parseInt(product.stock),
        // Combine existing image URLs and new ones
        images: previewImages.map(img => img.isExisting ? img.preview : img.file.name)
      };

      if (isEditMode) {
        // Update existing product
        await axios.patch(`http://localhost:8000/products/updateProduct/${editProduct._id}`, productData);
        toast.success('Product updated successfully!');
      } else {
        // Create new product
        await axios.post('http://localhost:8000/products/createProduct', productData);
        toast.success('Product created successfully!');
      }

      setTimeout(() => navigate('/productDetails'), 2000);
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.response?.data?.msg || `Error ${isEditMode ? 'updating' : 'creating'} product`);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-14 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">
            {isEditMode ? 'Update Product' : 'Add New Product'}
          </h1>
          <p className="text-blue-100">
            {isEditMode ? 'Update this product in your inventory' : 'Add a new product to your inventory'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900">Basic Information</h2>
            <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={product.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="1 Mukhi">1 Mukhi</option>
                  <option value="5 Mukhi">5 Mukhi</option>
                  <option value="7 Mukhi">7 Mukhi</option>
                  <option value="14 Mukhi">14 Mukhi</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  value={product.description}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900">Product Details</h2>
            <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={product.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="mukhiCount" className="block text-sm font-medium text-gray-700">
                  Mukhi Count *
                </label>
                <input
                  type="number"
                  name="mukhiCount"
                  id="mukhiCount"
                  value={product.mukhiCount}
                  onChange={handleChange}
                  min="1"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                  Stock Quantity *
                </label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  value={product.stock}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                  Origin *
                </label>
                <input
                  type="text"
                  name="origin"
                  id="origin"
                  value={product.origin}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                  Color *
                </label>
                <input
                  type="text"
                  name="color"
                  id="color"
                  value={product.color}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                  Size (mm) *
                </label>
                <input
                  type="text"
                  name="size"
                  id="size"
                  value={product.size}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>

              <div className="sm:col-span-3 flex items-end">
                <div className="flex items-center h-10">
                  <input
                    id="isBlessed"
                    name="isBlessed"
                    type="checkbox"
                    checked={product.isBlessed}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="isBlessed" className="ml-2 block text-sm text-gray-700">
                    Is Blessed/Purified?
                  </label>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
                  Benefits *
                </label>
                <textarea
                  id="benefits"
                  name="benefits"
                  rows={3}
                  value={product.benefits}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  required
                />
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-900">Product Images</h2>
            <p className="mt-1 text-sm text-gray-500">Upload high-quality images of your product (max 5 images)</p>

            <div className="mt-4">
              <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Choose Files
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>

              <div className="mt-4 flex flex-wrap gap-4">
                {previewImages.map((image, index) => (
                  <div key={index} className="relative w-32 h-32">
                    <img 
                      src={image.preview} 
                      alt={`Preview ${index}`} 
                      className="w-full h-full object-cover rounded border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={() => navigate('/productDetails')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isEditMode ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                isEditMode ? 'Update Product' : 'Add Product'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;