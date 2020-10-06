import React from 'react';

const TodoInput = ({ item, editItem, handleChange, handleSubmit }) => {
    return (
        <div className='card card-body mx-3'>
            <form
                onSubmit={handleSubmit}
            >
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input
                        type="text"
                        className='form-control text-capitalize'
                        placeholder='add todo item'
                        value={item}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className='btn btn-block btn-primary text-center mt-3 text-uppercase'>add item</button>
            </form>
        </div>
    )
}

export default TodoInput;
