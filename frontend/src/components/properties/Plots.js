import React from 'react'
import PropertyItem from '../PropertyItem'

export default function Plots(props) {
    let plots=props.plots

    const plotsElement=plots.map(plot=>{
        let key=Math.random()*1000+""
        return(
            <PropertyItem {...plot} key={key} setProperty={props.setPlot} setUpdate={props.setUpdate} deleteProperty={props.deleteProperty}/>
        )
    })
    return (
        <div className='' style={{margin:'70px'}}>
            <h2>Plots</h2><hr/>
            <div className='d-flex justify-content-left' >
                <div className='row'>
                    {
                        plotsElement
                    }
                </div>
                
            </div>
        </div>
    )
}
