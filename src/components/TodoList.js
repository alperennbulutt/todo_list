import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

 class TodoList extends Component {
    render() {
        const {
            items,
            handleDelete,
            handleEdit,
        } = this.props

        return (
            <Fragment>                   

                {
                items.length === 0 ? '' :
                    <ul className="list-group my-5">
                        {
                            items.map(item => {
                                return (
                                    <TodoItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        completed={item.completed}
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                    />
                                )
                            })
                        }

                    
                    </ul>
                }
            </Fragment>
        )
    }
}
export default TodoList;