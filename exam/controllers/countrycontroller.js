const countrymodel= require('../models/countrymodel')

const viewcountry = async (req, res) => {
    try {
        const country = await countrymodel.find({});
        return res.render('country/view_category', {
            country: country
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}
const Addcountry = (req, res) => {
    return res.render('country/add_country')
}

const insertCountry = async (req, res) => {
    // console.log(req.body.category);
    try {
        const country = req.body.country;
        await countrymodel.create({
            country: country,

        })
        console.log('Added country...');
        return res.redirect('/country')
    } catch (error) {
        console.log(error);
        return false;

    }
}

const deletecountry = async (req, res) => {
    try {
        deleteid = req.query.deleteId;
        // console.log(deleteid);

        await countrymodel.findByIdAndDelete(deleteid);
        console.log('Category Deleted...');
        return res.redirect('/country')

    } catch (error) {
        console.log(error);
        return false;

    }
}
const editcountry = async (req, res) => {
    try {
        editid = req.query.editid;
        // console.log(editid);
        const single = await countrymodel.findById(editid);
        return res.render('country/edit_category', {
            single
        })

    } catch (error) {
        console.log(error);
        return false;

    }
}

const updatecountry = async (req, res) => {
    try {
        const { editid, country } = req.body;
        // console.log(editid,category);
        await countrymodel.findByIdAndUpdate(editid, {
            country: country
        })
        console.log('Category Updated...');
        return res.redirect('/country')
        

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
            await countrymodel.findByIdAndUpdate(statusid,{
                status: 'inactive'
            })
            console.log('Category Status Changed to Inactive...');
            return res.redirect('/country')
        }else{
            await countrymodel.findByIdAndUpdate(statusid,{
                status: 'active'
            })
            console.log('Category Status Changed to Active...');
            return res.redirect('/country')
        }
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

module.exports = {
    viewcountry, Addcountry, insertCountry, deletecountry, editcountry, updatecountry,statusChange
}