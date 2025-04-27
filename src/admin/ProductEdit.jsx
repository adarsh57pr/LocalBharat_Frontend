import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductEdit = () => {
  let id = useParams();
  console.log(id);
  const navigate = useNavigate();
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
  const [previewImages, setPreviewImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/products/getProduct/${id}`);
        setProduct(response.data.product);
        
        // Create preview objects for existing images
        const existingPreviews = response.data.product.images.map(img => ({
          file: null,
          preview: img,
          isExisting: true
        }));
        
        setPreviewImages(existingPreviews);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error(error.response?.data?.msg || 'Error fetching product');
        navigate('/productDetails');
      }
    };

    fetchProduct();
  }, [id, navigate]);

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

    const newPreviews = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      isExisting: false
    }));

    setPreviewImages(prev => [...prev, ...newPreviews]);
    setNewImages(prev => [...prev, ...files]);
  };

  const removeImage = (index) => {
    const newPreviewImages = [...previewImages];
    if (!newPreviewImages[index].isExisting) {
      URL.revokeObjectURL(newPreviewImages[index].preview);
    }
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);
    
    if (!newPreviewImages[index]?.isExisting) {
      const newFiles = [...newImages];
      newFiles.splice(index, 1);
      setNewImages(newFiles);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      
      // Append new images
      newImages.forEach(image => {
        formData.append('images', image);
      });
      
      // Append product data
      const productData = {
        ...product,
        price: parseFloat(product.price),
        mukhiCount: parseInt(product.mukhiCount),
        stock: parseInt(product.stock),
        // Keep existing images that weren't deleted
        existingImages: previewImages
          .filter(img => img.isExisting)
          .map(img => img.preview)
      };

      formData.append('productData', JSON.stringify(productData));

      const response = await axios.put(
        `http://localhost:8000/products/updateProduct/${id}`,
        formData,
        // {
        //   headers: {
        //     'Content-Type': 'multipart/form-data'
        //   }
        // }
      );

      toast.success('Product updated successfully!');
      navigate('/productDetails');
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error(error.response?.data?.msg || 'Error updating product');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">Edit Product</h1>
          <p className="text-blue-100">Update this Rudraksha product</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Form fields same as ProductCreate but with existing values */}
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  required
                />
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-900">Product Images</h2>
            <p className="mt-1 text-sm text-gray-500">Upload new images or remove existing ones (max 5 images total)</p>
            
            <div className="mt-4">
              <div className="file-upload relative inline-block">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add More Images
                </button>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="file-upload-input absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              
              <div className="preview-container mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {previewImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image.preview} 
                      alt={`Preview ${index}`} 
                      className="w-full h-32 object-cover rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                    {image.isExisting && (
                      <span className="absolute bottom-1 left-1 bg-blue-500 text-white text-xs px-1 rounded">
                        Existing
                      </span>
                    )}
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
                  Updating...
                </>
              ) : 'Update Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;