// module.exports = (req, res, next) => {
//     const position =req.session.employee.empPosition
//     // if(position =='hr'){
//     //     console.log(req.session.employee.empPosition);
//     //     next();
//     // }
//     // else{
//     //     res.send("you cant access this route");
//     // }

// };

const checkRole = (roles,position) => (req, res, next) =>{
if(roles.includes(req.user.role))
{
    if(req.user.role == "employee"){
        if(position.includes(req.user.empPosition)){
            return next();
        }
        else{
            return res.status(401).json("Unauthorized");
        }
    }
    next();
}
else{
    res.status(401).json("Unauthorized");
}
}

const authEmployee = role => (req, res, next) =>
!role.includes(req.user.role)
    ? res.status(401).json("Unauthorized user")
    : next();
    

module.exports ={
    checkRole,
    authEmployee
}