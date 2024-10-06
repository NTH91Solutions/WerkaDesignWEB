import React, { useState, useEffect } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {

    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"",
        new_price:"",
        old_price:""
    })
    const [image,setImage] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false)
    const [formErrors, setFormErrors] = useState({})

    const imageHandler = (e) =>{
        productDetails.image === 1;
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const optionHandler = (e) =>{
      productDetails.category === 1;
      setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(productDetails))
        setIsSubmit(true)
      }

      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(productDetails);
        }
      }, );
      
      
    const validate = (values) => {
        const errors = {};
        let errorsCount = [0]
      
        if(!values.name) {
          errors.name = "Product name is required!";
          errorsCount +=1;
          name1.style.borderColor = "red solid 5px"
        }
        if(!values.old_price) {
          errors.old_price = "The old price required!";
          errorsCount +=1;
        }
        if(!values.new_price) {
          errors.new_price = "New price is required!";
          errorsCount +=1;
        }else if (values.old_price < values.new_price){
            errors.pricedif = "New price is lower the old price";
            errorsCount +=1
        }
        if(values.category < 1 ) {
          errors.category = "Category is required!";
          errorsCount +=1;
        }
        if(!values.image < 1) {
          errors.image = "Image is required!";
          errorsCount +=1;
        }
        if(errorsCount < 1 ){
          Add_Product(values);
        }
        return errors; 
      }

      function nameValidation() {
        if (name.value == 0) {
            name.style.borderColor = "red solid 5px";
        }
    }
    

    const Add_Product = async ()=>{

        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data});

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method: 'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
        else{
            alert(responseData.errors)
          }
    }

  return (
    <form className='add-product' onSubmit={handleSubmit}>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input for='name1' style={name1} value={productDetails.name} onChange={changeHandler} type="text" className='name' placeholder='Type here the Title' />
            <p className='formDataError'>{formErrors.name}</p>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input  value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here the OLD Price' />
                <p className='formDataError'>{formErrors.old_price}</p>
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here the NEW Price' />
                <p className='formDataError'>{formErrors.new_price}</p>
            </div>
        </div> 
        <p className='formDataError'>{formErrors.pricedif}</p>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={optionHandler} name="category" className='add-product-selector'>
                <option value="none">Choose</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
                <option value="fashion">Fashion</option>
            </select>
            <p className='formDataError'>{formErrors.category}</p>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt="" />
            </label>
            <input value={productDetails.image} onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
            <p className='formDataError'>{formErrors.image}</p>
        </div>
        <div className="addproduct-buton">
            <button onClick={()=>{validate()}} className='addproduct-btn'>Add Product</button>
        </div>
    </form>
    )
}

export default AddProduct