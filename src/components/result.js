import React from 'react'
import { connect } from 'react-redux';

const Result = ({ values, result }) => {
    console.log(values)
    return (
        <div style={{ height: "300px", width: "300px"}}
        className="bg-yellow-200 rounded-lg border-none
        flex items-center justify-center flex-col
        "
        >
        {
            values.map( (item, index) => {
                return (
                    <p className="text-lg text-gray-600">
                     value {index + 1}:  {item} 
                    </p>
                )
            } )
        }
        <div className="text-xl animate-bounce mt-10 text-gray-600">
            result = {result}
        </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        values: state.input.value,
        result: state.input.result
    }
}

export default connect(mapStateToProps)(Result);