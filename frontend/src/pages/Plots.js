import React from 'react'
import AddPlotFormModel from '../components/properties/AddPlotFormModel';
import PlotsBody from '../components/properties/Plots';
import TempHeader from '../components/properties/TempHeader';
import Services from '../services/Service'
import mountpakistan from '../image resources/mountpakistan.jpg'


export default function Plots() {
    if(!Services.isAuthenticated()){
        window.location="./login"   
    }
    let [plots, setPlots] = React.useState([])


    let [property, setProperty] = React.useState({})
    let [update, setUpdate] = React.useState(false)

    const loadProperties = () => {
        Services.getAllPlots(setPlots)
    }

    const deleteProperty = (deletingProperty) => {
        Services.deleteProperty(deletingProperty, setPlots)

    }
    React.useEffect(() => {
        loadProperties()
        document.title = "Manage Plots"
    }, [])

    return (
        <div>
            <div>
                <TempHeader
                    image={mountpakistan}
                    propertyType="Plot"
                    targetID="#plotFormModel"
                />
                <AddPlotFormModel setPlots={setPlots} plot={property} update={update} setUpdate={setUpdate} />
            </div>
            <div>
                <PlotsBody plots={plots} setPlot={setProperty} setPlots={setPlots} setUpdate={setUpdate} deleteProperty={deleteProperty} />
            </div>
        </div>
    )
}






