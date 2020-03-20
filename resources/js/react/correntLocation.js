import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

class Post extends React.Component {
    getLocation () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude
                var longitude = position.coords.longitude
                axios.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA8Eb_gT-NeKs1Cz-39Afr0fI6bROCwB5Y&latlng=' + latitude +
                    ',' + longitude + '&sensor=true')
                    .then(function (data) {
                        console.log(data)

                        var x = document.getElementById('post')
                        x.innerHTML = data.results[0].address_components[4].long_name + ','
                        x.innerHTML += data.results[0].address_components[5].long_name + ','
                        x.innerHTML += data.results[0].address_components[6].long_name
                    }).then(function (response,data) {
                    // eslint-disable-next-line handle-callback-err
                        response.json({ message: 'Request received!', data })
                    // eslint-disable-next-line handle-callback-err
                    }).catch(function errorHandler (error) {

                    })
            }, function (error) {
                console.log(error)
            })
        } else {
            alert('Sorry, browser does not support geolocation!')
        }
    }

    componentDidMount () {
        this.getLocation()
    }

    render () {
        return <button onClick={this.getLocation}>Click Me</button>
    }
}

ReactDom.render(<Post />, document.getElementById('post'))