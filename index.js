
const reduxLogger = require('redux-logger')

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// const createStore = redux.createStore()
const applyMiddleware = redux.applyMiddleware

//using a middleware in redux
const logger = reduxLogger.createLogger()


//initial state

// const initialState = {
//     NumOfCake:10,
//     numOfIcecreams:20
// }


const initialCakeState = {
    NumOfCake:10
}

const initialIceCreamState = {
    numOfIcecreams:20
}


//action creator - creates actions 
//action must have type property-- from which reducer identifies it
// with the switch statement

const buyCake = () => {
    return {
        type:BUY_CAKE,
        info:'Subtract cake from initial state'
    }
    
}


const buyIcecream = () => {
    return {
        type:BUY_ICECREAM
    }
}



//reducer -- the shopkeeper

const cakeReducer = (state = initialCakeState,action) => {
    switch (action.type) {
        case BUY_CAKE:return {
            ...state,
            NumOfCake: state.NumOfCake - 1
            }
        default: return state
    }

}

const IceCreamReducer = (state = initialIceCreamState,action) => {
    switch (action.type) {
        case BUY_ICECREAM:return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
            }
        default: return state
    }

}


const rootReducer =  redux.combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer
})

const store = redux.createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe =  store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()