// @desc get goals
// @ route  GET/api/goals
//@access private
const getGoals = (req,res) => {
    res.status(200).json({message : 'GEt goals'})
}

// @desc set goals
// @ route  POST/api/goals
//@access private
const setGoals = (req,res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error ('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'});
}

// @desc put goals
// @ route  PUT/api/goals/:id
//@access private
const updateGoals = (req,res) => {
    res.status(200).json({message: `update goals ${req.params.id}`});
}

// @desc del goals
// @ route  DEL/api/goals/:id
//@access private
const deleteGoals = (req,res) => {
    res.status(200).json({message: `delete goals ${req.params.id}`});
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}