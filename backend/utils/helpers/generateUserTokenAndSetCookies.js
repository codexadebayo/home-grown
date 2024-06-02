
//Function for generating user token passing userId & to set cookies for clients.
import jwt from "jsonwebtoken"


const generateUserTokenAndSetCookie = (userId, res)=>{
    //Store user data in token.
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '30d',
    });
    res.cookie("jwt", token,{
        //token secure from javascript
        httpOnly: true,
        maxAge: 30 * 26 * 60 * 60*1000, //30 days
        sameSite: "strict" //CSRF protection
    });
    return token;
};

export default generateUserTokenAndSetCookie