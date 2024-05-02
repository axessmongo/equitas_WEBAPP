const range = require("../usermodel/count.js");


const countMethod = async (req, res) => {
    const { visit } = req.body;

    try {
      
        let existingRange = await range.findOne();

        if (existingRange) {
            // If no existing document, create a new one with visit = 1
           existingRange.visit++;
        } 

        // Save the updated count
        await existingRange.save();

        res.status(200).json({
            message: "Successful",
            count: existingRange.visit,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};


module.exports = {
    countMethod,
};
