import reviewModel from '../models/Review.js';
import Company from '../models/Company.js';

export const createReview = async (req, res) => {
    try {
        const { company, email, reviews } = req.body;

        const Companyinfo = await Company.findOne({name: company});

        const reviewObj = new reviewModel({
            company:Companyinfo.id,
            email,
            reviews,
        });
        
        const savedReviews = await reviewObj.save();

        const updatedCompany = await Company.findByIdAndUpdate(Companyinfo.id,
            { $push: { reviews: savedReviews._id } },
            { new: true }
        )
            .populate("reviews")   //to get the description for reviews.
            .exec();
            
        res.json({ 
            company: updatedCompany 
        });
    } catch (error) {
        res.status(500).json({ message: "Error while adding Review " });
    }
};


export const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewModel.find()
        res.json({
            reviews
        })
    }
    catch (error) {
       
        return res.status(400).json({
            error: "error while fetching post",
            
            
        })
        
    }
}