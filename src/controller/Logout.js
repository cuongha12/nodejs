

const Logout = (req,res,next) => {
    if(req.cookies.access){
        res.clearCookie("access",{
            secure:true,
            sameSite:"none"
        }).redirect('/login/sigin')
    }else{
        res.clearCookie("connect.sid",{
            secure:true,
            sameSite:"none"
        }).redirect('/login/sigin')
    }
}

export default Logout