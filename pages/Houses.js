import React from 'react'
import AddHouseFormModel from '../components/properties/AddHouseFormModel';
import HousesBody from '../components/properties/Houses';
import TempHeader from '../components/properties/TempHeader';
import Services from '../services/Service'
import mountpakistan from '../image resources/mountpakistan.jpg'


export default function Houses() {
    if(!Services.isAuthenticated()){
        window.location="./login"   
    }
    let [houses, setHouses] = React.useState([])


    let [property, setProperty] = React.useState({})
    let [update, setUpdate] = React.useState(false)

    const loadProperties = () => {
        Services.getAllHouses(setHouses)
    }

    const deleteProperty = (deletingProperty) => {
        let category = deletingProperty.category
        Services.deleteProperty(deletingProperty, setHouses)
    }
    React.useEffect(() => {
        loadProperties()
        document.title = "Manage Houses"
    }, [])

    return (
        <div>
            <div>
                <TempHeader
                    image={mountpakistan}
                    propertyType="Home"
                    targetID="#houseFormModel"
                />
                <AddHouseFormModel setHouses={setHouses} house={property} update={update} setUpdate={setUpdate} />
            </div>
            <div>
                <HousesBody houses={houses} setHouse={setProperty} setHouses={setHouses} setUpdate={setUpdate} deleteProperty={deleteProperty} />
            </div>
        </div>
    )
}






