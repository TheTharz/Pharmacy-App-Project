import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';
import './AddItem.css';

const AddItemPage = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [image, setImage] = useState(null); // New state for the image

  const handleAddItem = () => {
    if (!itemName || !itemPrice || !selectedCategory || !image) {
      setErrorMessage('Please fill in all fields.');
    } else {
      setAlertMessage('Item successfully added!');
      setItemName('');
      setItemPrice('');
      setSelectedCategory('');
      setImage(null); // Clear image state
      setErrorMessage('');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <AdminNavbar />
      </div>
      <div className='d-flex flex-column'>
        <div className='Topbar'>
          <div className='d-flex flex-row'>
            <button className='lout_button' onClick={() => {}}>
              Logout
            </button>
          </div>
        </div>
        <div className='d-flex flex-row'>
          <h1 className='heading'>Add Item</h1>
        </div>

        <div className='blue_box'>
          <div className='white_box'>
            <div className='d-flex flex-column'>
              <input
                type='text'
                placeholder='Item Name'
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className='input'
              />
              <input
                type='number'
                placeholder='Item Price'
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                className='input'
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='input'
              >
                <option value=''>Select Category</option>
                {/* You can dynamically generate options based on your categories */}
                <option value='category1'>medicin</option>
                <option value='category2'>drinks</option>
                <option value='category3'>sops</option>
              </select>
              <input
                type='file'
                onChange={handleImageChange}
                className='input' // You can apply the same class as input fields
              />
              <button className='add_button' onClick={handleAddItem}>
                Add
              </button>
              {errorMessage && (
                <div className='alert alert-danger' role='alert'>
                  {errorMessage}
                </div>
              )}
              {alertMessage && (
                <div className='alert alert-success' role='alert'>
                  {alertMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
