import ech from '../../../assets/images/ech.jpg';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import condimentService from '../../../services/condiment.service';
import productService from '../../../services/product.service';

const AddCondiment = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const nameRef = useRef();
    const unitPriceRef = useRef();
    const productStatusRef = useRef();

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleAddClick = async () => {
        try {
            let imageUrl = '';
            if (selectedImage) {
                imageUrl = await productService.uploadImage(selectedImage); // Assumes an uploadImage method in condimentService
            }

            const condiment = {
                name: nameRef.current.value,
                unitPrice: unitPriceRef.current.value,
                image: imageUrl,
                productStatus: productStatusRef.current.value
            };

            const createdCondiment = await condimentService.addCondiment(condiment);
            console.log('Condiment added successfully:', createdCondiment);
            toast.success('Condiment added successfully!');
        } catch (error) {
            console.error('Failed to add condiment:', error);
            toast.error('Failed to add condiment');
        }
    };

    return (
        <div className="">
            <div className="mx-5 my-2 bg-custom rounded h-100">
                <div className="row mx-2 my-2">
                    <div className="col col-4 d-inline align-items-center justify-content-center mt-4">
                        <img src={selectedImage ? URL.createObjectURL(selectedImage) : ech} className="rounded mx-auto d-block w-100 h-100 img-thumbnail" />
                        <input type="file" onChange={handleImageChange} style={{ display: 'none' }} id="imageUpload" />
                        <label htmlFor="imageUpload" className="material-symbols-outlined">
                            add_photo_alternate
                        </label>
                    </div>
                    <div className="col col-8">
                        <div className="row"></div>
                        <div className="container my-2 mb-4">
                            <form className="row">
                                <div className="col-md-12">
                                    <label htmlFor="inputFirstName" className="form-label text-uppercase fw-bold">Name</label>
                                    <input type="text" className="form-control" id="inputFirstName" ref={nameRef} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLastName" className="form-label text-uppercase fw-bold">Price</label>
                                    <input type="number" step="0.01" className="form-control" id="inputLastName" ref={unitPriceRef} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputGender" className="form-label text-uppercase fw-bold">Product Status</label>
                                    <select id="inputGender" className="form-select" ref={productStatusRef}>
                                        <option value="ABLE" selected>Able</option>
                                        <option value="ENABLE">Enable</option>
                                        <option value="OUTOFSTOCK">Out of Stock</option>
                                    </select>
                                </div>

                                <div className="mt-4 d-flex justify-content-around">
                                    <a className='w-15'>
                                        <button type="button" className="btn btn-danger w-100" onClick={() => navigate('/order')}>CANCEL</button>
                                    </a>
                                    <a className='w-15'>
                                        <button type="button" className="btn btn-success w-100" onClick={handleAddClick}>ADD</button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddCondiment;
