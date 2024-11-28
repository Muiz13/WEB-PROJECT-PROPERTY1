import React from 'react'
import AddHouseFormModel from './AddHouseFormModel'
import AddPlotFormModel from './AddPlotFormModel'
import AddProjectFormModel from './AddProjectFormModel'

import Header from './Header'

export default function AddPropertyHeader(props) {
    return (
        <div>
            <Header/>
            <AddHouseFormModel setHouses={props.setHouses} house={props.house} update={props.update} setUpdate={props.setUpdate}/>
            <AddPlotFormModel setPlots={props.setPlots} plot={props.plot} update={props.update} setUpdate={props.setUpdate}/>
            <AddProjectFormModel setProjects={props.setProjects} project={props.project} update={props.update} setUpdate={props.setUpdate}/>
            
        </div>
    )
}
