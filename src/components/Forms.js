import React from 'react';

class Forms extends React.Component {
    render () {
        return (

            // The layout for the weather infomation
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>

                <input type="text" name="country" placeholder="Country..."/>

                <button class="blue waves-effect waves-light btn">GET WEATHER</button>
            </form>
        );
    }
};

export default Forms;