const { request } = require("../app");
const userModel = require("../model/userSchema");
const emailValidator = require("email-validator")

const signup = async(req, res, next) =>  {
    const {name, email, password, confirmpassword} = req.body;
    console.log(name, email, password, confirmpassword);

    if (!name || !email || !password || !confirmpassword) {
        return res.status(400).json({
            success: false,
            message: "Every field is required"
        })
    }

    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
        return res.status(400).json({
            success: false,
            message: 'Enter valid Email'
        })

    }

    if (password !== confirmpassword){
        return res.status(400).json({
            success: false,
            message: 'Password Not Match'
        })
    }

    try {
        const userInfo = userModel(req.body);

    const result = await userInfo.save()

    return res.status(200).json({
        success: true,
        data: result
    })
        
    } catch (e) {
        if (e.code === 11000){
            return res.status(400).json({
                success: false,
                message: 'Acount already exits with provided email id'
            })

        }
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }

    
}

const signin = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({
            success: false,
            message: 'Every field is mandatory'
        })
    }

    try {
        const user = await userModel
        .findOne({
            email
        })
        .select('+password');
    
    if (!user || user.password !== password){
        return res.status(400).json({
            success: false,
            message: 'Invalid credentials'
        })
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
        success: true,
        data: user
    })
        
    } catch (e) {
        res.status(400).json({
            success: false,
            data: e.message
        })
    }

  

}

const getUser = async(req, res, next) =>  {
     const userId = req.user.id; 

     try {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success: true,
            data: user
        });
     } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
     }
}

const logout = (req, res) =>{
    try {
        const cookieOption = {
            expire: new Date(),
            httpOnly: true
        }
        res.cookie("token", null, cookieOption)
        res.status(200).json({
            success: true,
            message: "Logged Out"
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }

}

module.exports = {
    signup,
    signin,
    getUser,
    logout
}