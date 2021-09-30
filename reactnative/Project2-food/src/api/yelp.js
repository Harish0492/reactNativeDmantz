import axios from "axios";
 
export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:
        "Bearer kcuLLor3w-LDf7W9-oW7YQ_lXupPFpP9e0n9lBXSIcT5_Gh7w6t6MEmx6mIxZ1NtAxDvmKbYZQzI9ErM_dgAgxT0aTOcAflMM-sPO7EgDvu4dlV1RaUn29PijLZKYXYx"
    }
});
