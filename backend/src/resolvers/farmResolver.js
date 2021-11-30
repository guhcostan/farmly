const Farm = require("../models/Farm");

const farmResolver = {
    Mutation: {
        createFarm(_, {farm}, {currentUser}) {
            if (!currentUser) throw new Error('Você precisa fazer login');
            const newFarm = new Farm(farm);
            return newFarm.save();
        },
        updateFarm(_, {id, farm}, {currentUser}) {
            if (!currentUser) throw new Error('Você precisa fazer login');
            return Farm.findByIdAndUpdate(id, farm, {
                new: true,
            });
        },
        deleteFarm(_, {id}, {currentUser}) {
            if (!currentUser) throw new Error('Você precisa fazer login');
            return Farm.findByIdAndRemove(id);
        },
    },
};

module.exports = farmResolver;
