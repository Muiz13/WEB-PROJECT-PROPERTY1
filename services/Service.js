import Axios from "axios"


const BaseURL = "http://localhost:3005/"

if (!localStorage.getItem("token")) {
    localStorage.setItem("token", "")
}
const headers = {
    'token': `${localStorage.getItem('token')}`,
    'Content-Type': 'multipart/form-data'
};



const getAllMaps = async (setMaps) => {
    const response = await Axios.get(BaseURL + "map");
    const data = response.data.data
    console.log("Recieved", data)
    setMaps(data)
}

const getAllSupplies = async (setSupplies) => {
    const response = await Axios.get(BaseURL + "supply");
    const data = response.data.data
    console.log("Recieved", data)
    setSupplies(data)
}


const getAllProperties = async (setProperties, prepareProperties) => {
    const response = await Axios.get(BaseURL + "property");
    const data = response.data.properties
    setProperties(data)
    console.log("Recieved Properties", data)
    prepareProperties()
}

const loadAllProperties = async (setProjects, setPlots, setHouses) => {
    const response = await Axios.get(BaseURL + "property");
    const data = response.data.properties
    let projects = data.filter(property => property.category == "project")
    let plots = data.filter(property => property.category == "plot")
    let houses = data.filter(property => property.category == "house")
    setProjects(projects)
    setPlots(plots)
    setHouses(houses)
    console.log("Recieved Properties", projects, plots, houses)
}

const getAllPlots = async (setRecords) => {
    const response = await Axios.get(BaseURL + "property");
    const data = response.data.properties
    let records = data.filter(property => property.category == "plot")
    console.log("Fetched Plots", records)
    setRecords(records)
}

const getAllHouses = async (setRecords) => {
    const response = await Axios.get(BaseURL + "property");
    const data = response.data.properties
    let records = data.filter(property => property.category == "house")
    console.log("Fetched Houses", records)
    setRecords(records)
}
const getAllProjects = async (setRecords) => {
    const response = await Axios.get(BaseURL + "property");
    const data = response.data.properties
    let records = data.filter(property => property.category == "project")
    console.log("Fetched Projects", records)
    setRecords(records)
}

const addProperty = async (propertyData,setRecords) => {
    let category=propertyData.get("category")
    console.log("CATEGORY: ",propertyData.get("catefory"))
    try {
        const response = await Axios.post(BaseURL + "property", propertyData,{headers}  );
        if (response.status == 201) {
            if (category == "plot")
                getAllPlots(setRecords)
            else if (category == "house")
                getAllHouses(setRecords)
            else if (category == "project")
                getAllProjects(setRecords)

            alert(category + " added successfully")
        }
        else
        alert(category+" could not be saved!. Try again later");
    } catch (e) {
        console.log(e)
        alert("There is something wrong. please tray again later");
    }
}
const addSupply = async (supplyData, setRecords) => {
    try {
        console.log("Sending Supply Data: ", supplyData)
        const response = await Axios.post(BaseURL + "supply",  supplyData,{headers} );
        if (response.status == 201) {
            getAllSupplies(setRecords)
            alert("Supply record added successfully")
        }
        else
            alert("Supply could not be saved!. Try again later");
    } catch (e) {
        console.log(e)
        alert("There is something wrong. please tray again later");
    }
}


const updateSupply = async (_id,supplyData, setRecords) => {
    try {
        console.log("ID",_id)
        const response = await Axios.patch(BaseURL + "supply/" + _id, supplyData,{headers});
        if (response.status == 200) {
            getAllSupplies(setRecords)
            alert("Supply has been updated Successfully")
        }
        else
            alert(response.data.msg)
    } catch (e) {
        alert("There is something wrong. please tray again later")
    }
}
const deleteSupply = async (id, setRecords) => {
    try {
        const response = await Axios.delete(BaseURL + "supply/" + id , {headers});
        if (response.status == 200) {
            getAllSupplies(setRecords)
            alert("Supply deleted successfully")
        }
        else
            alert(response.data.msg);
    } catch (e) {
        alert("There is something wrong. please tray again later");
    }
}
const addMap = async (mapData, setRecords) => {
    try {
        console.log("Sending Map Data: ", mapData)
        const response = await Axios.post(BaseURL + "map",  mapData ,{headers});
        if (response.status == 201) {
            getAllMaps(setRecords)
            alert("Map record added successfully")
        }
        else
            alert("Map could not be saved!. Try again later");
    } catch (e) {
        console.log(e)
        alert("There is something wrong. please tray again later");
    }
}




const updateMap = async (_id,mapData, setRecords) => {
    console.log(localStorage.getItem('token'))
    try {
        const response = await Axios.patch(BaseURL + "map/" + _id, mapData, {headers} );
        if (response.status == 200) {
            getAllMaps(setRecords)
            alert("Map has been updated Successfully")
        }
        else
            alert("Map could not be updated. Try again")
    } catch (e) {
        alert("There is something wrong. please tray again later")
    }
}

const updateProperty = async (_id,propertyData, setRecords) => {
    let category=propertyData.get('category')
    try {
        const response = await Axios.patch(BaseURL + "property/" + _id,  propertyData, {headers} );
        if (response.status == 200) {
            if (category == "plot")
                getAllPlots(setRecords)
            else if (category == "house")
                getAllHouses(setRecords)
            else if (category == "project")
                getAllProjects(setRecords)
            alert(category+" record saved successfully!")
        }
        else
            alert(category + " could not be save. Try again later")
    } catch (e) {
        alert("There is something wrong. please tray again later")
    }
}
const deleteProperty = async (propertyData, setRecords) => {
    try {
        const response = await Axios.delete(BaseURL + "property/" + propertyData._id , {headers});
        if (response.status == 200) {
            if (propertyData.category == "plot")
                getAllPlots(setRecords)
            else if (propertyData.category == "house")
                getAllHouses(setRecords)
            else if (propertyData.category == "project")
                getAllProjects(setRecords)

            alert(propertyData.category+" deleted successfully")
        }
        else
            alert(response.data.msg);
    } catch (e) {
        alert("There is something wrong. please tray again later");
    }
}




const deleteMap = async (id, setRecords) => {
    try {
        const response = await Axios.delete(BaseURL + "map/" + id , {headers});
        if (response.status == 200) {
            getAllMaps(setRecords)
            alert("Map deleted successfully")
        }
        else
            alert(response.data.msg);
    } catch (e) {
        alert("There is something wrong. please tray again later");
    }
}


export const getItems = async (setItems) => {
    const response = await Axios.get(BaseURL + "items", {});
    const data = response.data.data
    setItems(data)
}

const loginAdmin = async (loginData) => {
    try {
        
        const response = await Axios.post(BaseURL + "admin/login",  loginData );
        if (response.status == 200) {
            console.log(response.data)
            alert("Admin Authenticated successfully. Redidrecting to Home Page")
            localStorage.setItem("token",response.data.token)
            window.location="./"
        }
        else
            alert("Invalid Credentials!");
    } catch (e) {
        alert("There is something wrong. please tray again later");
    }
}
const updatePassword = async (data) => {
    try {
        const response = await Axios.patch(BaseURL + "admin/update", data, {headers} );
        if (response.status == 201) {
            alert("Password has been updated Successfully")
            logoutAdmin()      
        }
        else
            alert("Old Password is incorrect!")
    } catch (e) {
        alert("Password could not be updated. It is because the old password is invalid.")
    }
}


const logoutAdmin = async () => {
    localStorage.setItem("token","")
    window.location="./login"
}


const isAuthenticated=()=>{
    if(localStorage.getItem("token") && localStorage.getItem("token").length>0){
        return true
    }
    else
        return false
}

const propertyServicesAPI = {
    addProperty,
    addMap,
    getAllMaps,
    updateMap,
    deleteMap,
    getAllProperties,
    loadAllProperties,
    getAllPlots,
    updateProperty,
    deleteProperty,
    getAllHouses,
    getAllProjects,
    addSupply,
    getAllSupplies,
    updateSupply,
    deleteSupply,
    loginAdmin,
    isAuthenticated,
    logoutAdmin,
    updatePassword
}
export default propertyServicesAPI;







