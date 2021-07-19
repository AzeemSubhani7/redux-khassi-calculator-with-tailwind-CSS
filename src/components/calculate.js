import React from 'react';
import { connect } from 'react-redux';
import { inputAction, addOperatorAction, minusOperatorAction, divideOperatorAction, timesOperatorAction } from '../redux/actions';

const Calculate = ({ addInput, myValue, addOpt, result, minusOpt, divOpt, timesOpt }) => {

    const [ value, setValue] = React.useState("")

    console.log(result)
    const render = myValue.length < 2 ? "hidden" : "flex"

    const handleChange = (e) => {
       const temp = e.target.value;
        setValue(Number(temp))
    }

    const handleClick = () => {
        addInput(value)
        setValue("")
    }


    return (
        <div 
        className="bg-green-100 rounded-lg  text-green-600 flex flex-col items-center
        bg-green-200"
        style={{ height: "300px", width: "300px"}}
         >
            <input className="
            focus:outline-none py-2 px-1 rounded-lg mt-14 placeholder-green-300
            " placeholder="Value"
            onChange={handleChange}
            value={value}
            />
            <button
            className="bg-green-700 text-white py-1 px-4 rounded my-2 hover:bg-green-400
            transform hover:scale-110
            transition duration-200 mt-10
            "
            onClick={handleClick}
            >Enter</button>
            <div className={`mt-5 ${render}  w-full justify-evenly`}>
                <i 
                className="fas cursor-pointer transform hover:scale-125 transition duration-200 fa-plus text-gray-800 fa-2x"
                onClick={() => addOpt()}
                ></i>
                <i 
                className="fas cursor-pointer transform hover:scale-125 transition duration-200 fa-minus text-gray-800 fa-2x"
                onClick={()=> minusOpt()}
                ></i>
                <i 
                className="fas cursor-pointer transform hover:scale-125 transition duration-200 fa-divide text-gray-800 fa-2x"
                onClick={() => divOpt()}
                ></i>
                <i 
                className="fas cursor-pointer transform hover:scale-125 transition duration-200 fa-times text-gray-800 fa-2x"
                onClick={() => timesOpt()}
                ></i>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addInput: (input) => dispatch(inputAction(input)),
        addOpt: () => dispatch(addOperatorAction()),
        minusOpt: () => dispatch(minusOperatorAction()),
        divOpt: () => dispatch(divideOperatorAction()),
        timesOpt: () => dispatch(timesOperatorAction()) 
    }
}

const mapStateToProps = (state) => {
    return {
        myValue: state.input.value,
        result: state.input.result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculate);