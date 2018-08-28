import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //현재 이벤트가 상위로 전파되지 않도록 중단한다. onToggle() 실행 x
                    onRemove(id) // 위에 e.stopPropagation()을 사용하면 해당 영역에서 클릭하면 onRemove(id), 아니면 onToggle(id) 실행됨
                }}>&times;</div>
                <div className={`todo=text ${checked && 'checked'}`} >
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                    // checked값이 true면 <div className="check-mark">✓</div> 라는 의미
                }
            </div>
        );
    }
}

export default TodoItem;