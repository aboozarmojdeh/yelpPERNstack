import React from 'react'

const AddReview = () => {
    return (
        <div className='mb-2'>
        <form>
            <div className='form-row'>
                <div className='form-group col-8'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' type='text' className='form-control' placeHolder='name' />
                </div>
                <div className='form-group col-4'>
                    <label htmlFor='rating'>Rating</label>
                    <select id='rating' name='' className='custom-select'></select>
                </div>
            </div>
        </form>
            
        </div>
    )
}

export default AddReview
