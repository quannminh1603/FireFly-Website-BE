const UserService = require('../services/UserService')

const createUser = async (req, res) => {
    try {

        // console.log(req.body);
        const {hoTenKH, username, password, confirmPassword, email, diaChi, phone, role} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if(!hoTenKH || !username || !password || !confirmPassword || !email || !diaChi || !phone) {
            return res.status(200).json({
                status: "ERRO",
                mesage: "Phải nhập tất cả thông tin!!!"
            })
        }else if (!isCheckEmail) {
            return res.status(200).json({
                status: "ERRO",
                mesage: "Định dạng địa chỉ email không chính xác!!!"
            })
        }
        else if (password != confirmPassword) {
            return res.status(200).json({
                status: "ERRO",
                mesage: "Mật khẩu không khớp nhau, vui lòng nhập lại!!!"
            })
        }
        // console.log('isCheckEmail', isCheckEmail)
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    }
    catch (e){
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) => {
    try {

        // console.log(req.body);
        const {hoTenKH, username, password, confirmPassword, email, diaChi, phone, role} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if(!username || !password) {
            return res.status(200).json({
                status: "ERRO",
                mesage: "Phải nhập tất cả thông tin!!!"
            })
        }
        // else if (!isCheckEmail) {
        //     return res.status(200).json({
        //         status: "ERRO",
        //         mesage: "Định dạng địa chỉ email không chính xác!!!"
        //     })
        // }
        // else if (password != confirmPassword) {
        //     return res.status(200).json({
        //         status: "ERRO",
        //         mesage: "Mật không khớp nhau, vui lòng nhập lại!!!"
        //     })
        // }
        // console.log('isCheckEmail', isCheckEmail)
        const response = await UserService.loginUser(req.body)
        return res.status(200).json(response)
    }
    catch (e){
        return res.status(404).json({
            message: e
        })
    }
}

const updateUser = async (req, res) => {
    try {
        // const userId = req.params.id
        // const data = req.query.body
        // if(!userId) {
        //     return res.status(200).json({
        //         status: "ERRO",
        //         mesage: "Lỗi id!!!"
        //     })
        // }
        // console.log('userId', userId);
        
        // const response = await UserService.updateUser(userId, data)
        // return res.status(200).json(response)
        const userId = req.params.id
        const data = req.body
        if(!userId) {
            return res.status(200).json({
                status: "ERRO",
                message: "Lỗi id"
            })
        }
        console.log('userId', userId);

        const response = await UserService.updateUser(userId, data)
        return res.status(200).json(response)
    }
    catch (e){
        return res.status(404).json({
            message: e
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        // const token = req.headers
        // console.log('token', token)
        if(!userId) {
            return res.status(200).json({
                status: "ERRO",
                message: "Lỗi id"
            })
        }
        // console.log('userId', userId);

        const response = await UserService.deleteUser(userId)
        return res.status(200).json(response)
    }
    catch (e){
        return res.status(404).json({
            message: e
        })
    }
}

const getAllUser = async (req, res) => {
    try {
        const response = await UserService.getAllUser()
        return res.status(200).json(response)
    }
    catch (e){
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsUser = async (req, res) => {
    try {
        const userId = req.params.id
        // const token = req.headers
        // console.log('token', token)
        if(!userId) {
            return res.status(200).json({
                status: "ERRO",
                message: "Lỗi id"
            })
        }
        // console.log('userId', userId);

        const response = await UserService.getDetailsUser(userId)
        return res.status(200).json(response)
    }
    catch (e){
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser
}