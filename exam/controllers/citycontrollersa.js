const countrymodel= require('../models/countrymodel')
const stateModel = require('../models/statemodel')
const cityModel = require('../models/citymodel')

const viewcity = async (req, res) => {
    try {
        let city = await cityModel.find({}).populate("countryId").populate('stateId');
        // console.log(exsubcategory);
        
        return res.render('city/view_city',{
            city:city
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}
const addcity = async(req, res) => {
    try {
        const country = await countrymodel.find({})
        const state = await stateModel.find({})
        return res.render('city/add_city',{
            country:country,
            state:state
        })
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

const insertcity = async (req, res) => {
    try {
        const{country, state,city} = req.body;
        // console.log(req.body);
        await cityModel.create({
            countryId: country,
            stateId: state,
            city:city

        })
        console.log('Added Exsubcategory...');
        return res.redirect('/city')


    } catch (error) {
        console.log(error);
        return false;

    }

}

const deletecity = async (req, res) => {
    try {
        deleteid = req.query.deleteId;
        // console.log(deleteid);

        await cityModel.findByIdAndDelete(deleteid);
        console.log('ExsubCategory Deleted...');
        return res.redirect('/city')

    } catch (error) {
        console.log(error);
        return false;

    }
}
const editcity = async (req, res) => {
    try {
        editid = req.query.editid;
        // console.log(editid);
        const country = await countrymodel.find({})
        const state = await stateModel.find({})
        const single = await cityModel.findById(editid);
        // console.log(single);
        
        return res.render('city/edit_city', {
            single:single,
            country:country,
            state:state
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}

const updatecity = async (req, res) => {
    try {
        const { editid, country , state,city} = req.body;
        // console.log(editid,category);
        await cityModel.findByIdAndUpdate(editid, {
            countryId: country,
            stateId: state,
            city:city
        })
        console.log('ExsubCategory Updated...');
        return res.redirect('/city')
        

    } catch (error) {
        console.log(error);
        return false;

    }
}
const statusChange = async(req,res) =>{
    try {
        const status = req.query.status;
        const statusid = req.query.statusid;
        // console.log(status,statusid);
        if(status == 'active'){
            await cityModel.findByIdAndUpdate(statusid,{
                status: 'inactive'
            })
            console.log('Category Status Changed to Inactive...');
            return res.redirect('/city')
        }else{
            await cityModel.findByIdAndUpdate(statusid,{
                status: 'active'
            })
            console.log('Category Status Changed to Active...');
            return res.redirect('/city')
        }
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = {
    viewcity,addcity,insertcity,deletecity,statusChange,editcity,updatecity
}