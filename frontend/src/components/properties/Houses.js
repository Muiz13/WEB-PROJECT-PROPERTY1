import React from 'react'
import PropertyItem from '../PropertyItem'


export default function Houses(props) {
    let houses=props.houses

    const housesElement=houses.map(house=>{
        let key=Math.random()*1000+""
        return(
            <PropertyItem {...house} key={key}  setProperty={props.setHouse} setUpdate={props.setUpdate} deleteProperty={props.deleteProperty}/>
        )
    })
    return (
        <div className='' style={{margin:'70px'}}>
            <h2>Homes</h2><hr/>
            <div className='d-flex justify-content-left' >
                <div className='row'>
                    {
                        housesElement
                    }
                </div>
                
            </div>
        </div>
    )
}
