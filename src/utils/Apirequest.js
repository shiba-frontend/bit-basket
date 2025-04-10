import axios from "axios";
const token = localStorage.getItem('bitbasket_access_token');

export const key = {
    STRIPE_KEY:'pk_test_51HDloiEyvqDh0TGqrA2pKiwasfrVV1r3zXuVCXkHQSIoOmzLD9772aCpD1BZg3D75MxZFGrrbjLW8cZ2QQjYxq4f00ADUTodhX'
} 
// export const key = {
//     STRIPE_KEY:'pk_test_51GuDMPEUApiV5UmVatwZJfnA8JPPpOCAHd3HIaD6ohQZnyTSIe1oADaTTFd9vLPQEXlw8KcIVfkTQ3pL8HGYStnr00Fe5GdQjy'
// } 
// STRIPE_SECRET=sk_test_51HDloiEyvqDh0TGqK7OO1p0X6rPEy0S3bcVnGpu2Gti7SUqA2SOiyXooMaoyTITcUNvpCmbsRuLicke4qgpXQPsK00Lu7smiuX

const _URL = "https://itiffyconsultants.xyz/bitbasket/api/"

// const _URL = "https://bitbasket.itiffyconsultants.com/bitbasket/api/"



let headers= { 
    'Content-Type': 'multipart/form-data', 
    'Authorization': `Bearer ${token}`,
}


export const GetStateList = async () =>{
    try{

        let response = await axios.get(`${_URL}state-list`, {headers})

        return response?.data

    } catch(error){}
}

export const signupPost = async (body) =>{

    try{

        let response = await axios.post(`${_URL}sign-up`, body, {headers})

        return response?.data

    } catch(error){return error?.response?.data}
}

export const LoginPost = async (body) =>{
    try{

        let response = await axios.post(`${_URL}login`, body, {headers})

        return response?.data

    } catch(error){ return error?.response?.data}
}

export const ForgotPassPost = async (body) =>{
    try{

        let response = await axios.post(`${_URL}forgot-password`, body, {headers})

        return response?.data

    } catch(error){return error?.response?.data}
}

export const OTPPost = async (body) =>{
    try{

        let response = await axios.post(`${_URL}forgot-password/otp-verification`, body, {headers})

        return response?.data

    } catch(error){return error?.response?.data}
}

export const ResetPasswordPost = async (body) =>{
    try{

        let response = await axios.post(`${_URL}forgot-password/reset_password`, body, {headers})

        return response?.data

    } catch(error){return error?.response?.data}
}

export const SignupOTPPost = async (body) =>{
    try{

        let response = await axios.post(`${_URL}sign-up/otp-verification`, body, {headers})

        return response?.data

    } catch(error){
        return error?.response?.data
    }
}

export const GetsubscriptionList = async () =>{
    try{

        let response = await axios.get(`${_URL}package-list/1`, {headers})

        return response?.data

    } catch(error){}
}

export const Postsubscription = async (body) =>{
    try{

        let response = await axios.post(`${_URL}user-subscription`, body, {headers})

        return response?.data

    } catch(error){}
}

export const GetTeammember = async () =>{
    try{

        let response = await axios.get(`${_URL}member-user`, {headers})

        return response?.data

    } catch(error){}
}

export const Postmember = async (body) =>{
    try{

        let response = await axios.post(`${_URL}member-user`, body, {headers})

        return response?.data

    } catch(error){
        return error?.response?.data
    }
}

export const GetFaq = async () =>{
    try{

        let response = await axios.get(`${_URL}faq-list`, {headers})

        return response?.data

    } catch(error){}
}
export const PostContact = async (body) =>{
    try{

        let response = await axios.post(`${_URL}contact-request`, body, {headers})

        return response?.data

    } catch(error){
        return error?.response?.data
    }
}

export const GetProfile = async () =>{
    try{

        let response = await axios.get(`${_URL}profile`, {headers})

        return response?.data

    } catch(error){}
}

export const PostChangePassword = async (body) =>{
    try{

        let response = await axios.post(`${_URL}change-password`, body, {headers})

        return response?.data

    } catch(error){
        return error?.response?.data
    }
}

export const CancelSubscription = async (body) =>{
    try{

        let response = await axios.delete(`${_URL}user-subscription/${body}`, {headers})

        return response?.data

    } catch(error){ return error?.response?.data}
}

















