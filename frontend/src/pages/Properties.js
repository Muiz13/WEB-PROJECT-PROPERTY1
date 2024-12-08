import React from 'react'
import MainSearch from '../components/MainSearch';
import PropertiesElement from '../components/Properties';
import Services from '../Services/Services'


export default function Properties() {
    let [showProjects, setShowProjects] = React.useState(true)
    let [showSaleProperties, setShowSaleProperties] = React.useState(true)
    let [showRentProperties, setShowRentProperties] = React.useState(true)
    let [showSearchedProperties, setShowSearchedProperties] = React.useState(false)
    let [properties, setProperties] = React.useState([])
    let [searchedProperties, setSearchedProperties] = React.useState([])

    let [saleProperties, setSaleProperties] = React.useState([])
    let [rentProperties, setRentProperties] = React.useState([])
    let [propjects, setProjects] = React.useState([])


    const calculateCount = (data) => {
        properties.forEach(property => {
            let count = 0
            property.count = count
            if (data.scheme && property.scheme && property.scheme.toLowerCase().includes(data.scheme.toLowerCase())) {
                count += 5
            }
            if (data.city && property.city && property.city.toLowerCase().includes(data.city.toLowerCase())) {
                count += 10
            }
            if (data.category && property.category && property.category.toLowerCase().includes(data.category.toLowerCase())) {
                count += 11
            }
            if (data.propertyType && property.propertyType && property.propertyType.toLowerCase().includes(data.propertyType.toLowerCase())) {
                count += 5
            }
            if (data.noBedrooms && property.noBedrooms && property.noBedrooms == data.noBedrooms) {
                count += 3
            }
            if (data.title && property.title && property.title.toLowerCase().includes(data.title.toLowerCase())) {
                count += 8
            }
            if (data.priceFrom && property.price >= data.priceFrom) {
                count += 8
            }
            if (data.priceTo) {
                if (property.price <= data.priceTo)
                    count += 5
            }

            if (data.sizeFrom && property.size >= data.sizeFrom) {
                count += 10
            }
            if (data.sizeTo) {
                if (property.size <= data.sizeTo)
                    count += 10
            }
            property.count = count
        })

    }
    const handleSearch = (data) => {
        //     scheme: "",
        //     city: "",
        //     category: "",
        //     propertyType: "",
        //     noBedrooms: "",
        //     title: "",
        //     priceFrom: "",
        //     priceTo: "",
        //     sizeFrom: "",
        //     sizeTo: "",
        showProperties()
        setShowSearchedProperties(true)
        calculateCount(data)
        searchedProperties=[...properties]
        searchedProperties=searchedProperties.filter(p=> p.category!='project')
        searchedProperties.sort((a,b)=> b.count-a.count)
        searchedProperties.forEach(p=>console.log(p.count))
        setSearchedProperties(searchedProperties)
    }
    const showProperties = (type) => {
        setShowSearchedProperties(false)
        setShowProjects(false)
        setShowRentProperties(false)
        setShowSaleProperties(false)
        if (type == 'sale') {
            setShowSaleProperties(true)
        } else if (type == 'rent') {
            setShowRentProperties(true)
        } else if (type == 'project') {
            setShowProjects(true)
        } else if (type == 'all') {
            setShowProjects(true)
            setShowRentProperties(true)
            setShowSaleProperties(true)
        }
    }
    React.useEffect(() => {
        document.title = "Properties";
        Services.loadProperties(
            (fetchedProperties) => {
                console.log("Fetched properties:", fetchedProperties);
                setProperties(fetchedProperties);
            },
            setRentProperties,
            setSaleProperties,
            setProjects
        );
    }, []);

    return (
        <div >
            <MainSearch
                showProperties={showProperties}
                handleSearch={handleSearch}
            />
            <div >
                {showProjects ?
                    <PropertiesElement
                        title="Featured Projects"
                        text="Mount Pakistan make the best choices with the hottest and most prestigious projects, please visit the details below to find out more."
                        properties={propjects}
                        key="projects"
                    />
                    : ''
                }
                {showSaleProperties ?
                    <PropertiesElement
                        title="Properties for Sale"
                        text="Below is a list of properties that are currently up for sale on Mount Pakistan"
                        properties={saleProperties}
                        key="sale"

                    />

                    : ''

                }
                {showRentProperties ?
                    <PropertiesElement
                        title="Properties for Rent"
                        text="Below is a list of properties that are currently up for Rent on Mount Pakistan"
                        properties={rentProperties}
                        key="rent"

                    />

                    : ''}


                {showSearchedProperties ?
                    <PropertiesElement
                        title="Searched"
                        text="Following properties meet your searched criteria"
                        properties={searchedProperties}
                        key="searched"

                    />
                    : ''

                }
            </div>
        </div>
    )
}
