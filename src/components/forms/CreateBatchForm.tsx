import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addBatch } from '../../store/slices/batchSlice';
import { addNotification } from '../../store/slices/uiSlice';
import { Batch } from '../../types';

interface CreateBatchFormProps {
  onClose: () => void;
}

const CreateBatchForm: React.FC<CreateBatchFormProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    productType: '',
    variety: '',
    quantity: '',
    unit: 'kg',
    harvestDate: '',
    isOrganic: false,
    location: '',
    growingMethod: 'field',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate new batch
    const newBatch: Batch = {
      id: `AG2024-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
      productType: formData.productType,
      variety: formData.variety,
      quantity: parseInt(formData.quantity),
      unit: formData.unit,
      harvestDate: new Date(formData.harvestDate),
      isOrganic: formData.isOrganic,
      farmerId: '1',
      currentStage: 'farm',
      status: 'pending',
      qrCode: `QR-${Date.now()}`,
      blockchainHash: `0x${Math.random().toString(16).substr(2, 40)}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    dispatch(addBatch(newBatch));
    dispatch(addNotification({
      type: 'success',
      title: 'Batch Created Successfully!',
      message: `Batch ${newBatch.id} has been created and recorded on the blockchain.`
    }));

    onClose();
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Product Information */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Type *
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select product type</option>
                  <option value="Tomatoes">Tomatoes</option>
                  <option value="Lettuce">Lettuce</option>
                  <option value="Carrots">Carrots</option>
                  <option value="Peppers">Peppers</option>
                  <option value="Spinach">Spinach</option>
                  <option value="Apples">Apples</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Variety *
                </label>
                <input
                  type="text"
                  name="variety"
                  value={formData.variety}
                  onChange={handleInputChange}
                  placeholder="e.g., Roma Tomatoes"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="500"
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit
                </label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="kg">Kilograms (kg)</option>
                  <option value="lbs">Pounds (lbs)</option>
                  <option value="tons">Tons</option>
                  <option value="boxes">Boxes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Harvest Date *
                </label>
                <input
                  type="date"
                  name="harvestDate"
                  value={formData.harvestDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="isOrganic"
                  checked={formData.isOrganic}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">
                  Organic Certified
                </label>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Location & Growing Conditions */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Location & Growing Conditions</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Farm Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., California, USA"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Growing Method
                </label>
                <select
                  name="growingMethod"
                  value={formData.growingMethod}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="field">Field Grown</option>
                  <option value="greenhouse">Greenhouse</option>
                  <option value="hydroponic">Hydroponic</option>
                  <option value="organic">Organic Field</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">📋 Required Documents</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Organic Certificate (if applicable)</li>
                  <li>• Soil Test Results</li>
                  <li>• Harvest Photos</li>
                  <li>• Quality Assessment Report</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Review & Submit */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Review & Submit</h3>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Product:</span>
                  <span className="ml-2 text-gray-900">{formData.variety}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Quantity:</span>
                  <span className="ml-2 text-gray-900">{formData.quantity} {formData.unit}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Harvest Date:</span>
                  <span className="ml-2 text-gray-900">{formData.harvestDate}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span>
                  <span className="ml-2 text-gray-900">{formData.location}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Growing Method:</span>
                  <span className="ml-2 text-gray-900 capitalize">{formData.growingMethod}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Organic:</span>
                  <span className="ml-2 text-gray-900">{formData.isOrganic ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">🔗 Blockchain Registration</h4>
              <p className="text-sm text-green-800">
                This batch will be registered on the AgriChain blockchain with an immutable record. 
                A unique QR code will be generated for tracking throughout the supply chain.
              </p>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={currentStep === 1 ? onClose : prevStep}
            className="btn btn-outline"
          >
            {currentStep === 1 ? 'Cancel' : 'Previous'}
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={
                (currentStep === 1 && (!formData.productType || !formData.variety || !formData.quantity || !formData.harvestDate)) ||
                (currentStep === 2 && !formData.location)
              }
              className="btn btn-primary"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary"
            >
              Create Batch
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateBatchForm;