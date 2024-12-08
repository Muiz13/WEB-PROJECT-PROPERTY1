import Axios from "axios";

const BaseURL = process.env.REACT_APP_BASE_URL;
console.log('Environment variables:', process.env);
console.log('BaseURL:', BaseURL);

// Add fallback URL if environment variable fails
const API_URL = BaseURL || 'http://localhost:3005/api';

const getAllMaps = async (setMaps) => {
  const response = await Axios.get(BaseURL + "map");
  const data = response.data.data;
  //   console.log("Recieved", data);
  setMaps(data);
};

const getAllSupplies = async (setSupplies) => {
  const response = await Axios.get(BaseURL + "supply");
  const data = response.data.data;
  //   console.log("Recieved", data);
  setSupplies(data);
};

const getAllProperties = async (setProperties, prepareProperties) => {
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  setProperties(data);
  //   console.log("Recieved Properties", data);
  prepareProperties();
};

const loadAllProperties = async (setProjects, setPlots, setHouses) => {
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  let projects = data.filter((property) => property.category == "project");
  let plots = data.filter((property) => property.category == "plot");
  let houses = data.filter((property) => property.category == "house");
  setProjects(projects);
  setPlots(plots);
  setHouses(houses);
};
const loadProperties = async (
  setProperties,
  setRentProperties,
  setSaleProperties,
  setProjects
) => {
  try {
    console.log('Attempting to fetch from:', API_URL + 'property');
    const response = await Axios.get(API_URL + "property");
    console.log('Response received:', response.data);
    const data = response.data.properties;
    
    if (!data) {
      console.error('No properties found in response');
      return;
    }
    
    setProperties(data);
    setRentProperties(data.filter(p => p.propertyTypeRentSale === "rent"));
    setSaleProperties(data.filter(p => p.propertyTypeRentSale === "sale"));
    setProjects(data.filter(p => p.category === "project"));
  } catch (error) {
    console.error('Error loading properties:', error);
  }
};

const getAllPlots = async (setRecords) => {
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  let records = data.filter((property) => property.category == "plot");
  //   console.log("Fetched Plots", records);
  setRecords(records);
};

const getAllSaleProperties = async (setRecords) => {
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  let records = data.filter(
    (property) => property.propertyTypeRentSale == "sale"
  );
  //   console.log("Fetched Sale Properties", records);
  setRecords(records);
};
const getAllRentProperties = async (setRecords) => {
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  let records = data.filter(
    (property) => property.propertyTypeRentSale == "rent"
  );
  //   console.log("Fetched Rent Properties", records);
  setRecords(records);
};

const getAllHouses = async (setRecords) => {
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  let records = data.filter((property) => property.category == "house");
  //   console.log("Fetched Houses", records);
  setRecords(records);
};
const getAllProjects = async (setRecords) => {
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  let records = data.filter((property) => property.category == "project");
  //   console.log("Fetched Houses", records);
  setRecords(records);
};

const getProperty = async (id, setRecord) => {
  try {
    const response = await Axios.get(BaseURL + "property/" + id);
    if (response.status == 200) {
      setRecord(response.data.property);
    } else alert(response.data.msg);
  } catch (e) {
    alert("There is something wrong. please tray again later");
  }
};

const getAllSellers = async (setSellers) => {
    try {
        console.log('Fetching sellers from:', BaseURL + "seller");
        const response = await Axios.get(BaseURL + "seller");
        console.log('Sellers response:', response.data);
        setSellers(response.data.sellers);
    } catch (error) {
        console.error('Error loading sellers:', error);
    }
};

const getAllSellersInfo = async () => {
    try {
        const response = await Axios.get(BaseURL + "seller");
        return response.data;
    } catch (error) {
        console.error('Error in getAllSellersInfo:', error);
        throw error;
    }
};

const propertyServicesAPI = {
  getAllMaps,
  getAllProperties,
  loadAllProperties,
  getAllPlots,
  getAllHouses,
  getAllProjects,
  loadProperties,
  getProperty,
  getAllRentProperties,
  getAllSaleProperties,
  getAllSupplies,
  getAllSellers,
  getAllSellersInfo,
};
export default propertyServicesAPI;
