import HttpRequest from "@/utils/httpRequest";

const axiosJWT = new HttpRequest();

export const registerUser = async (values) => {
    const res = await axiosJWT.post('/auth/register',values )
    return res
    
}


export const loginUser = async (values) => {
    const res = await axiosJWT.post('/auth/login', values)
    return res
}

export const forgotPassword = async (values) => {
    const res = await axiosJWT.post('/auth/forgot-password', values)
    return res
}

export const resetPassword = async (userId, code, values) => {
    const res = await axiosJWT.post(`/auth/reset-password?userId=${userId}&code=${code}`, values)
    return res
}


export const logOut = async () => {
    try {
        const res = await axiosJWT.post('/auth/logout')
        return res
    }catch(err) {
        console.log('logOut fail')
    }
}