import React, { Component } from 'react'

class WeightConverter extends Component {

    state = {
        weight: {
            'Gram': 1,
            'Kilogram': 0.001,
            'Pound': 0.0022046226218488,
            'Ounce': 0.03527396194958,
            'Carat': 5,
            'US': 0.0000011023113109244,
            'UK': 0.00000098420652761106,
            'Metric Tone': 0.000001,
            'Grain': 15.432358352941
        },
        weightValue: 0,
        weightTotalValue: 0,
        weightOutputValue: 0

    }



    weightValueChange = (event) => {
        this.setState({
            weightTotalValue: event.target.value
        })
    }

    weightChange = (event) => {
        this.setState({
            weightValue: event.target.value,
            weightOutputValue: event.target.value * this.state.weightTotalValue

        },
            () => {
                console.log(this.state.weightValue)
                console.log(this.state.weightOutputValue)
            })
    }

    render() {
        return (
            <div>
                <h3>Gram</h3>
                <input type="number" onChange={this.weightValueChange} value={this.state.weightTotalValue} />




                <h4>To</h4>
                <select onChange={this.weightChange} value={this.state.weightValue} >
                    <option value='0' >Select</option>
                    {
                        Object.entries(this.state.weight).map(([objectKey, value]) => {
                            return (
                                <option key={objectKey} value={value}>{objectKey}</option>
                            )

                        })
                    }
                </select>
                <p>{this.state.weightOutputValue}
                </p>
            </div>
        )
    }
}

export default WeightConverter
