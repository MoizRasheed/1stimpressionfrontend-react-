import React from 'react'

function Spinner() {
  return (
    <div className='spin'>
        <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  );
}

export default Spinner;