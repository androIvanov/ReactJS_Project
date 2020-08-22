const models = require('../models');

module.exports = {
    get: (req, res, next) => {
      const length = req.query.length ? parseInt(req.query.length) : 20
        models.Idea.find().sort('-created_at').limit(length).populate('author')
            .then((ideas) => res.send(ideas))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description, title, url } = req.body;
        console.log("This is the body for the request " + req.body);
        const { _id } = req.body;
        models.Idea.create({title, url, description, author: _id })
            .then((createdIdea) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdIdea } }),
                    models.Idea.findOne({ _id: createdIdea._id })
                ]);
            })
            .then(([modifiedObj, ideaObj]) => {
                res.send(ideaObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Idea.updateOne({ _id: id }, { description })
            .then((updatedIdea) => res.send(updatedIdea))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Idea.deleteOne({ _id: id })
            .then((removedIdea) => res.send(removedIdea))
            .catch(next)
    }
};