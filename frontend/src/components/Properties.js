import React from 'react'
import PropertyItem from './PropertyItem'


export default function Properties(props) {
    let properties=props.properties

    const propertiesElement=properties.map(property=>{
        let key=Math.random()*1000+""
        return(
            <PropertyItem {...property} key={key}/>
        )
    })
    return (
        <div className='' style={{margin:'70px'}}>
            <h2>{props.title}</h2><hr/>
            <p>{props.text}</p>
            <div className='d-flex justify-content-left' >
                <div className='row' id={props.key} >
                    {
                        propertiesElement
                    }
                </div>
                
            </div>
        </div>
    )
}
