import React from 'react'
import AddMapFormModel from './AddMapFormModel'
import MapItem from './MapItem'
import Services from '../../services/Service'


export default function Maps(props) {
    let [map,setMap]= React.useState({})
    let [update,setUpdate]= React.useState(false)
    
    let maps=props.maps

    const deleteMap=(id)=>{
        Services.deleteMap(id,props.setMaps)        
    }
    const mapsElement=maps.map(map=>{
        let key=Math.random()*1000+""
        console.log("in",map)
        return(
            <MapItem {...map} key={key} setMap={setMap} setUpdate={setUpdate} deleteMap={deleteMap}/>
        )
    })

    return (
        <div className='' style={{margin:'70px'}}>
            <AddMapFormModel setMaps={props.setMaps} map={map} update={update} setUpdate={setUpdate}/>
            <h2>Maps</h2>
            <p>Following are the maps of our societies</p><hr/>
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
