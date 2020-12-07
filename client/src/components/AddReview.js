import React, { useState } from 'react'

const AddReview = () => {
    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating");
    
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleRatingChange=(event)=>{
        console.log(event.target.value)
        setRating(event.target.value)
    }

    const handleReviewTextChange=(event)=>{
        console.log(event.target.value)
        setReviewText(event.target.value)
    }

    return (
        <div className='mb-2'>
            <form>
                <div className='form-row'>
                    <div className='form-group col-8'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' id='name' type='text' placeholder='name' value={name} onChange={handleNameChange} />
                    </div>
                    <div className='form-group col-4'>
                        <label htmlFor='rating'>Rating</label>
                        <select id='rating' className='custom-select' value={rating} onChange={handleRatingChange}>
                            <option disabled={true}>Rating</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>

                </div>
                <div className='form-group'>
                    <label htmlFor='Review'>Review</label>
                    <textarea id='Review' className='form-control' value={reviewText} onChange={handleReviewTextChange}></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>

        </div>
    )
}

export default AddReview
