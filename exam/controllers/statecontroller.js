const countrymodel= require('../models/countrymodel')
const stateModel = require('../models/statemodel')

const viewstate = async (req, res) => {
    try {
        let state = await stateModel.find({}).populate("countryId");
    
        
        return res.render('state/view_state',{
            state:state
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}
const addstate = async(req, res) => {
    try {
        const country = await countrymodel.find({})
        return res.render('state/add_state',{
            country:country
        })
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

const insertstate = async (req, res) => {
    // console.log(req.body.category);
    try {
        const{country, state} = req.body
        console.log(req.body);
        
        
        await stateModel.create({
            countryId: country,
            state: state

        })
        console.log('Added Subcategory...');
        return res.redirect('/state')


    } catch (error) {
        console.log(error);
        return false;

    }



}

const deltestate = async (req, res) => {
    try {
        deleteid = req.query.deleteId;
        // console.log(deleteid);

        await stateModel.findByIdAndDelete(deleteid);
        console.log('SubCategory Deleted...');
        return res.redirect('/state')

    } catch (error) {
        console.log(error);
        return false;

    }
}
const editstate = async (req, res) => {
    try {
        editid = req.query.subeditid;
        // console.log(editid);
        const country = await countrymodel.find({})
        const single = await stateModel.findById(editid);
        // console.log(single);
        
        return res.render('state/edit_state', {
            single:single,
            country:country
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}

const updatestate = async (req, res) => {
    try {
        const { editid, country , state} = req.body;
        // console.log(editid,category);
        await stateModel.findByIdAndUpdate(editid, {
            countryId: country,
            state: state
        })
        console.log('subCategory Updated...');
        return res.redirect('/state')
        

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
            await stateModel.findByIdAndUpdate(statusid,{
                status: 'inactive'
            })
            console.log('Category Status Changed to Inactive...');
            return res.redirect('/state')
        }else{
            await stateModel.findByIdAndUpdate(statusid,{
                status: 'active'
            })
            console.log('Category Status Changed to Active...');
            return res.redirect('/state')
        }
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = {
    viewstate,addstate,insertstate,deltestate,statusChange,editstate,updatestate
}