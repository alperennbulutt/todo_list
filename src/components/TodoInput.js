import React, { Component } from 'react'
 class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
          
            <form onSubmit={handleSubmit}>      

                    <input
                            type="text"
                            className="form-control"
                            placeholder="Yapılacak..."
                            value={item}
                            onChange={handleChange}
                        />
                         <button 
                        type="submit"
                       
                    >
                        {editItem ? 'Edit task' : 'Ekle'}
                    </button>

                </form>
        )
    }
}
export default TodoInput;
