import React from "react";

class Weather extends React.Component {
    render () {
        return (
            <div>
                
                {/* api data that won't show unless data show due to the props */}
                {this.props.city && this.props.country &&<p>Location: {this.props.city}{this.props.country}</p>}
                {this.props.temperture &&<p>Temperture: {this.props.temperture}</p>}
                {this.props.humidity &&<p>Humidity: {this.props.humidity}</p>}
                {this.props.conditions &&<p>Conditions: {this.props.desription}</p>}
                {this.props.error && <p>{ this.props.error }</p>}
            </div>
        );
    }
    // weatherKey = '58182cc7ba309036c9ea516800a5be02'
};



export default Weather;