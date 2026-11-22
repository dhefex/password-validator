
export function verify(req, res){
    const {password} = req.body ?? {}

    const hasLowerCase = /[a-z]/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 8

    const errors = []

    if (!hasMinLength){
        errors.push("Password must be at least 8 characters long")
    }

    if (!hasLowerCase)  {
        errors.push("Password must contain at least one lowercase letter")
  
    }

    if (!hasUpperCase) {
        errors.push("Password must contain at least one uppercase letter")
        
    }

    if (!hasNumber) {
        errors.push("Password must contain at least one number")
        
    }

    if (!hasSpecialChar) {
        errors.push("Password must contain at least one special character")
        
    }

    if (errors.length > 0) {
        return res.status(400).json({errors})   
        
    }

    if (hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar && hasMinLength) {
        return res.status(200).json({
            message: "Password successfully validated"
        })
    }



}