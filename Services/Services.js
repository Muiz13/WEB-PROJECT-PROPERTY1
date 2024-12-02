import Axios from "axios";

const BaseURL = process.env.BaseURL;

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
  const response = await Axios.get(BaseURL + "property");
  const data = response.data.properties;
  setProperties(data);
  setRentProperties(
    data.filter((property) => property.propertyTypeRentSale == "rent")
  );
  setSaleProperties(
    data.filter((property) => property.propertyTypeRentSale == "sale")
  );
  setProjects(data.filter((property) => property.category == "project"));
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
};
export default propertyServicesAPI;
