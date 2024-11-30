import React from 'react'
import mountpakistan from '../images/mountainpakistan.jpg'


let initialForm = {
    scheme: "",
    city: "",
    category: "",
    propertyType: "",
    noBedrooms: "",
    title: "",
    priceFrom: 0,
    priceTo: "",
    sizeFrom: 0,
    sizeTo: "",
}

export default function MainSearch(props) {
    const [form, setForm] = React.useState({ initialForm })
    const [advanceSearch, setAdvanceSearch] = React.useState(false)
    const [isHouse, setIsHouse] = React.useState(false)
    const [isBuilding, setIsBuilding] = React.useState(false)

    const styles = {
        marginTop: '10px',
        padding: '30px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',

        backgroundImage: `url(${mountpakistan})`
    }
    const handleSearch = () => {
        props.handleSearch(form)
    }
    const handleChange = (e) => {
        const { name, value, type } = e.target
        setForm({
            ...form,
            [name]: value
        })
        if (name == 'propertyType') {
            if (value == 'house' || value == 'apartment')
                setIsHouse(true)
            else
                setIsHouse(false)
        }
        if (name == 'category') {
            if (value == 'house')
                setIsBuilding(true)
            else
                setIsBuilding(false)
        }
        
        handleSearch()
    }
    React.useEffect(() => {
        console.log(form)
    }, [form])
    const resetForm = () => {
        setForm(initialForm)
    }

    return (
        <div>
            <div className="d-flex justify-content-center text-center bg-dark text-light" style={styles}>
                <div className="d-flex flex-column my-4">
                    {/* {advanceSearch ? "" :
                        <div className=''>
                            <h1>Search properties in Pakistan</h1>
                        </div>

                    } */}
                    <div className='d-flex flex-column my-6'>
                        <div className={`d-flex flex-row justify-content-center col-${advanceSearch ? 12 : 10}`}>
                            <>
                                <a className="nav-link link-light fs-5 btn-outline-primary btn-sm" href="#" onClick={() => props.showProperties("all")} >ALL</a>
                                <span className="fs-4">|</span>

                                <a className="nav-link link-light fs-5 btn-outline-primary btn-sm" href="#" onClick={() => props.showProperties("sale")}>BUY</a>
                                <span className="fs-4">|</span>
                                <a className="nav-link link-light fs-5 btn-outline-primary btn-sm" href="#" onClick={() => props.showProperties("rent")}>RENT</a>
                                <span className="fs-4">|</span>
                                <a className="nav-link link-light fs-5 btn-outline-primary btn-sm" href="#" onClick={() => props.showProperties("project")}>PROJECTS</a>
                            </>
                        </div>

                        {advanceSearch ?
                            <div>

                                <div className='d-flex justify-content-between my-3 col-12'>
                                    <div className='bg-light col-2'>
                                        <input type="text" id="form1" name='scheme' value={form.scheme} onChange={handleChange} placeholder='Location' className="form-control" />
                                    </div>

                                    <div className='bg-light col-2'>
                                        <input type="text" id="form1" placeholder='City' name='city' value={form.city} onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className='bg-light col-2'>
                                        <select className='btn btn-outline-secondary dropdown-toggle' name='category' value={form.category} onChange={handleChange} style={{ width: "100%" }}>
                                            <option>Category</option>
                                            <option value='plot'>Plots</option>
                                            <option value='house'>Buildings</option>
                                        </select>
                                    </div>
                                    <div className='bg-light col-2'>
                                        <select className='btn btn-outline-secondary dropdown-toggle' name='propertyType' value={form.propertyType} onChange={handleChange} style={{ width: "100%" }}>
                                        <option>Property Type</option>
                                            {isBuilding ?
                                                <>
                                                    <option value="office">Office</option>
                                                    <option value="shop">Shop</option>
                                                    <option value="apartment">Apartment</option>
                                                    <option value="house">Home</option>
                                                </>
                                                :
                                                <>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="residential">Residential</option>
                                                </>
                                            }

                                        </select>
                                    </div>
                                    {isHouse ?

                                        <div className='bg-light col-2'>
                                            <select className='btn btn-outline-secondary dropdown-toggle' name='noBedrooms' value={form.noBedrooms} onChange={handleChange} style={{ width: "100%" }}>
                                                <option>Bedrooms</option>
                                                <option value='all'>All</option>
                                                <option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option>
                                            </select>
                                        </div>
                                        : ''
                                    }

                                </div>

                            </div>
                            : ''
                        }

                        <div className='d-flex flex-row justify-content-center'>
                            <div className="input-group ">
                                <div className="form-outline d-flex col-12" >
                                    <input type="search" id="search" placeholder='Search' name='title' value={form.title} onChange={handleChange} className="form-control" style={{ width: "100%" }} />
                                    <button type="button" className="btn btn-primary" onClick={handleSearch} >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>



                        {advanceSearch ?
                            <div>
                                <div className='d-flex justify-content-between my-3 col-12'>
                                    <div className='bg-light  text-dark col-4 p-1' >
                                        <small>Price - PKR</small>
                                        <div className='d-flex'>
                                            <input type="number" id="form1" placeholder='0' name='priceFrom' value={form.priceFrom} onChange={handleChange} className=" form-control" />
                                            <small className='my-auto'>To</small><br />
                                            <input type="number" id="form1" placeholder='Any' name='priceTo' value={form.priceTo} onChange={handleChange} className=" form-control" />
                                        </div>
                                    </div>

                                    <div className='bg-light  text-dark col-4 p-1' >
                                        <small>Area - MARLA</small>
                                        <div className='d-flex'>
                                            <input type="number" id="form1" placeholder='0' name='sizeFrom' value={form.sizeFrom} onChange={handleChange} className=" form-control" />
                                            <small className='my-auto'>To</small><br />
                                            <input type="number" id="form1" placeholder='Any' name='sizeTo' value={form.sizeTo} onChange={handleChange} className=" form-control" />
                                        </div>
                                    </div>


                                </div>


                            </div>
                            : ""
                        }
                        <div className='d-flex justify-content-between my-3 col-12'>
                            <div className='  ' >
                                <button className='btn btn-outline-info btn-sm' style={{ fontSize: "12px" }} onClick={() => setAdvanceSearch(!advanceSearch)}>{advanceSearch ? "Hide" : "Show"} Advance Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
