const {useContext} = require("react");
const {AuthContext} = require("../Context/AuthProvider");


const UseAuth=()=>{
    const auth=useContext(AuthContext);
    return auth;
}

export default UseAuth;