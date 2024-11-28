import React from 'react'
import PropertyItem from '../PropertyItem'

export default function Projects(props) {
    let projects=props.projects

    const propertiesElement=projects.map(project=>{
        let key=Math.random()*1000+""
        return(
            <PropertyItem {...project} key={key} setProperty={props.setProject} setUpdate={props.setUpdate} deleteProperty={props.deleteProperty}/>
        )
    })
    return (
        <div className='' style={{margin:'70px'}}>
            <h2>Projects</h2><hr/>
            <div className='d-flex justify-content-left' >
                <div className='row'>
                    {
                        propertiesElement
                    }
                </div>
                
            </div>
        </div>
    )
}
