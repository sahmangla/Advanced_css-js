import axios from 'axios';
let url="http://localhost:3500/results/";
let ProductsCrud={}
ProductsCrud.get_data=function()
{
    return axios.get(url);
}
ProductsCrud.add_data=function(obj)
{
    return axios.post(url,obj)
}
ProductsCrud.delete_data=function(empno)
{
    return axios.delete(url+empno)
}
ProductsCrud.select_data=function(empno)
{
    return axios.get(url+empno)
}
ProductsCrud.updated_data=function(empobj)
{
    return axios.put(url+empobj.id,empobj)
}
export default ProductsCrud;