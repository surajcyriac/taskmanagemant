import commonapi from "./commonapi"
import SERVER_URL from "./serverurl"

// requster called by auth when user clicks on registerr button
export const registerAPI =async(reqBody)=>{
    return await commonapi("POST",`${SERVER_URL}/register`,reqBody)
}

