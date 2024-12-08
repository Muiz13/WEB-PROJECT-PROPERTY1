import React from 'react'
import MapItem from './MapItem'


export default function Maps(props) {
    let [maps,setMaps]= React.useState([])
    React.useEffect(()=>{
        setMaps(props.maps)
    },props.maps)
    const mapsElement=maps.map(map=>{
        let key=Math.random()*1000+""
        return(
            <MapItem {...map} key={key}/>
        )
    })
    return (
        <div className='' style={{margin:'70px'}}>
            <h2>Maps</h2><hr/>
            <p>Following are the maps of our societies</p>
            <div className='d-flex' >
                <div className='row'>
                    {
                        mapsElement
                    }
                </div>
                
            </div>
        </div>
    )
}
