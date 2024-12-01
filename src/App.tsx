import React, { useState } from 'react';

const LlamaApp = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [inputValue, setInputValue] = useState('');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setInputValue('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-3xl font-bold">Aplikasi Llama</h1>
        <div className="flex gap-2">
          <button
            aria-label="Home"
            className={`px-4 py-2 rounded-lg ${selectedTab === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabChange('home')}
          >
            Home
          </button>
          <button
            aria-label="Features"
            className={`px-4 py-2 rounded-lg ${selectedTab === 'features' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabChange('features')}
          >
            Features
          </button>
          <button
            aria-label="Future"
            className={`px-4 py-2 rounded-lg ${selectedTab === 'future' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => handleTabChange('future')}
          >
            Future
          </button>
        </div>
      </div>

      {selectedTab === 'home' && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Welcome to Aplikasi Llama</h2>
          <p className="text-lg">Aplikasi Llama adalah salah satu inovasi terbaru dari Meta yang telah menunjukkan kemampuan yang luar biasa dalam berbagai bidang.</p>
        </div>
      )}

      {selectedTab === 'features' && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="list-disc list-inside">
            <li>AI Generatif Sumber Terbuka</li>
            <li>Multimodal</li>
            <li>Penggunaan On-Device</li>
          </ul>
        </div>
      )}

      {selectedTab === 'future' && (
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Masa Depan Aplikasi Llama</h2>
          <p className="text-lg">Meta terus berkomitmen untuk memperbaiki dan memperluas kemampuan Llama.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Masukkan ide Anda"
              className="px-4 py-2 rounded-lg border-2 border-gray-200"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LlamaApp;