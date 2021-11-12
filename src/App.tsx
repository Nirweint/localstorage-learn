import React, {useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalstorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }

    const getFromLocalstorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
       if (valueAsString) {
           let newValue =JSON.parse(valueAsString)
            setValue(newValue)
       }
    }

    const clearLocalstorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeFromLocalstorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className="App">
            <h1>Localstorage</h1>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalstorageHandler}>setToLocalstorage</button>
            <button onClick={getFromLocalstorageHandler}>getFromLocalstorage</button>
            <button onClick={clearLocalstorageHandler}>clearLocalstorage</button>
            <button onClick={removeFromLocalstorageHandler}>removeFromLocalstorage</button>
        </div>
    );
}

export default App;
