import React from 'react'
import ReactDom from 'react-dom'
class CorrentLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {address:0};
      }
    getLocation () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude
                var longitude = position.coords.longitude
               this.setState({
                address: latitude
            })
            }, function (error) {
                console.log(error)
            })
        } else {
            alert('Sorry, browser does not support geolocation!')
        }
    }
    render() {
        return (
            <div>
              <input value={this.state.address} />
            <button onClick={this.getLocation}>Click Me</button>
            
          </div>
        )
      }
   }
    
     ReactDom.render(<CorrentLocation />, document.getElementById('post'))
