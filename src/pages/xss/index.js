import React from 'react'

export default class XSSPage extends React.Component {
    componentDidMount(){
        alert(1)
        let pos = document.URL.indexOf('name=') + 5
        document.write(document.URL.substring(pos, document.URL.length))
    }
    constructor(){
        super()
    }
    render(){
        return(
            <div>hello xss</div>
        )
    }
}