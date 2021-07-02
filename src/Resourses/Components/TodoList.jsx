import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {

    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);

    function addItems(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function addToList(e) {
        if (value === "") {
            alert("add Tasks");
        }
        else {
            setItems((prevVal) => {
                return [
                    ...prevVal,
                    value
                ]
            });
            setValue("");
        }
    }

    function deleteItem(id) {
        setItems((prevVal) => {
            return prevVal.filter((val, index) => {
                return index !== id;
            });
        })
    }

    return (
        <div className="App">
            <h1>Todo List App</h1>
            <input
                className="form-input"
                type="text"
                name="items"
                value={value}
                onChange={addItems}
            />
            <button
                className="addButton"
                onClick={addToList}>
                Add Item
            </button>

            <div>
                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <ListItems
                                    key={index}
                                    id={index}
                                    value={item}
                                    delitem={deleteItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>

            <svg
                className="svg-wave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#0099ff"
                    fillOpacity="1"
                    d="M0,256L48,234.7C96,213,192,171,288,133.3C384,96,480,64,576,85.3C672,107,768,181,864,213.3C960,245,1056,
                    235,1152,197.3C1248,160,1344,96,1392,64L1440, 32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,
                    576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </div>
    )
}

function ListItems(props) {
    return (
        <div className="li-del">
            <li>{props.value}</li>
            <button className="btn-del" onClick={() => {
                return props.delitem(props.id)
            }}>Delete</button>
        </div>
    )
    //key={props.key}
}

export default TodoList;
