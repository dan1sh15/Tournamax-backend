const Topic = require('../models/Topic');

exports.getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find({});

        return res.status(200).json({
            success: true,
            message: "Topics fetched successfully",
            data: topics,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.getTopic = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(400).json({
                success: false,
                message: "Topic id not found"
            });
        }

        const topic = await Topic.findById(id);
        if(!topic) {
            return res.status(400).json({
                success: false,
                message: "Topic not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Topic details fetched successfully",
            data: topic,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

exports.addTopic = async (req, res) => {
    try {
        const { title, description } = req.body;

        if(!title || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const newTopic = await Topic.create({
            title,
            description,
        });

        return res.status(200).json({
            success: true,
            message: "Topic added successfully",
            data: newTopic,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

exports.updateTopic = async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = req.params.id;

        if(!id || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if(!id) {
            return res.status(400).json({
                success: false,
                message: "Topic not found",
            });
        }

        const topic = await Topic.findByIdAndUpdate(id, {
            title,
            description,
        }, {new: true});

        return res.status(200).json({
            success: true,
            message: "Topic updated successfully",
            data: topic,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });       
    }
};

exports.deleteTopic = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(400).json({
                success: false,
                message: "Id not found",
            });
        }

        await Topic.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Topic deleted successfully",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}