const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params
            });
            return next();
        } catch (err) {
            return res.status(400).json({
                message: err // Accessing the error message from err object
            });
        }
    };
};

module.exports = { validate };
