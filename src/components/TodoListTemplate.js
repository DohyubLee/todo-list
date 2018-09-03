import React from 'react';
import './TodoListTemplate.css'

const TodoListTemplate = ({time, form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                <div className="top-bar">
                    <div className="top-bar-item">
                        <i className="fab fa-bluetooth-b"></i>
                        <i className="fas fa-wifi"></i>
                    </div>
                    <div className="top-bar-item">{time[2]} {time[0]}:{time[1]}:{time[3]}</div>
                    <div className="top-bar-item">
                        <i className="fas fa-battery-half"></i>
                    </div>
                </div>
                <div className="top-icon">
                    <i className="far fa-list-alt"></i>
                </div>
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;