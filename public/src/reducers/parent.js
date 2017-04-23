function Parent(state = {name:'parent',age: 40}, action) {
    if (action.type === 'PADD'||action.type === "PREDUCE") {
        return Object.assign({},state,{age:action.age});

    }

    return state;
}

module.exports = Parent;