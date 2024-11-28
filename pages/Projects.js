import React from 'react'
import AddProjectFormModel from '../components/properties/AddProjectFormModel';
import AddPropertyHeader from '../components/properties/AddPropertyHeader';
import Houses from '../components/properties/Houses';
import Plots from '../components/properties/Plots';
import ProjectsBody from '../components/properties/Projects';
import TempHeader from '../components/properties/TempHeader';
import Services from '../services/Service'
import mountpakistan from '../image resources/mountpakistan.jpg'



export default function Projects() {
    if(!Services.isAuthenticated()){
        window.location="./login"   
    }

    let [projects, setProjects] = React.useState([])


    let [property, setProperty] = React.useState({})
    let [update, setUpdate] = React.useState(false)

    const loadProperties = () => {
        Services.getAllProjects(setProjects)
    }

    const deleteProperty = (deletingProperty) => {
        Services.deleteProperty(deletingProperty, setProjects)
    }
    React.useEffect(() => {
        loadProperties()
        document.title = "Manage Projects"
    }, [])

    return (
        <div>
            <div>
                <TempHeader
                    image={mountpakistan}
                    propertyType="Project"
                    targetID="#projectFormModel"
                />
                <AddProjectFormModel setProjects={setProjects} project={property} update={update} setUpdate={setUpdate} />
            </div>
            <div>
                <ProjectsBody projects={projects} setProject={setProperty} setProjects={setProjects} setUpdate={setUpdate} deleteProperty={deleteProperty} />
            </div>
        </div>
    )
}






