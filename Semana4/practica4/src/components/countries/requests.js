const base_url = "https://restcountries.com/";
const createUrl = (path)=> new URL(path, base_url);

const getAllcountries = createUrl("/v3.1/all");
const getbyRegion = (regionname) => createUrl(`v3.1/region/${regionname}`)

export default {
    base_url,
    getAllcountries,
    getbyRegion
}