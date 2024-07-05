const bcrypt = require('bcrypt');
const User = require('../modal/user')
const Academic = require('../modal/academic')
const Grade = require('../modal/grades')
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY

exports.addUser=(async(req,res,next)=>{
    try{
    const {
        firstName,
        lastName,
        email,
        password,
        number,
        gender,
        dob,
        country,
        state,
        city,
        citizenship,
        languages
            } = req.body
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({message:'fields missing'})
        }
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.status(409).json({message:'user already exist'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const personalInfo = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                number,
                gender,
                dob,
                country,
                state,
                city,
                citizenship,
                languages
            });
        const result = await personalInfo.save();
        const payload = {
                userId: result._id,
                firstname: result.firstName
            };
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });
        res.status(201).json({
                message: 'Personal Info Added Successfully',
                result: result,
                token: token
        });
    }catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
})

exports.login=(async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:'fields missing'})
    }
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:'user not found'})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect){
            return res.status(401).json({message:'password is incorrect'})
        }
        const payload = {
            userId: user._id,
            firstname: user.firstName
        };
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });
        res.status(200).json({
            message: 'Login Successful',
            token: token
        });
    }catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
})

exports.addAcademic=(async(req,res,next)=>{
    const { degree, program, specialization } = req.body;
    const { userId, firstname } = req.user;
    if(!userId){
        return res.status(401).json({message:'Unauthorize'})
    }
    if(!degree || !program || !specialization){
        return res.status(400).json({message:'fields missing'})
    }
    try{
        const user = await User.findOne({_id:userId})
        if(!user){
            return res.status(401).json({message:'user not found'})
        }
        const newAcademic = new Academic({
            degree,
            program,
            specialization,
            userId
        })
        await newAcademic.save();
        res.status(200).json({message:'academic added successfully'})
    }catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
})

exports.addGrades=(async(req,res,next)=>{
    const { exams } = req.body;
    const { userId, firstname } = req.user;
    if(!userId){
        return res.status(401).json({message:'Unauthorize'})
    }
    if(!exams){
        return res.status(400).json({message:'fields missing'})
    }
    try{
        const user = await User.findOne({_id:userId})
        if(!user){
            return res.status(401).json({message:'user not found'})
        }
        const newGrade = new Grade({
            exams,
            userId
        })
        await newGrade.save();
        res.status(200).json({message:'grades added successfully'})
    }catch(error){
        console.log(error)
        res.status(500).json({message:'server error'})
    }
})