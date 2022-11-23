import ActionsTypes from '../../Helpers/constant.helper';

const reducer = (state = {
    emails: [],
    emailDetail: null
}, action) => {
    switch (action.type) {
        case ActionsTypes.FetchAllEmail:
            state = {
                ...state,
                emails: action.payload.map((emailObj) => {
                    emailObj.isSelected = false;
                    emailObj.isFav = false;
                    emailObj.isReaded = false;
                    return emailObj;
                })
            };
            return state;
        case ActionsTypes.FetchEmailById:
            state = {
                emailDetail: action.payload,
                emails: state.emails.map((emailObj) => {
                    if (action.payload.id === emailObj.id) {
                        emailObj.isSelected = true;
                        emailObj.isReaded = true;
                    } else {
                        emailObj.isSelected = false;
                    }
                    return emailObj;
                })
            };
            return state;
        case ActionsTypes.UnSelectEmail:
            state = {
                emailDetail: null,
                emails: state.emails.map((emailObj) => {
                    emailObj.isSelected = false;
                    return emailObj;
                })
            };
            return state;
        case ActionsTypes.MarkAsFavorite:
            state = {
                ...state,
                emailDetail: {...action.payload, isFav: true },
                emails: state.emails.map((emailObj) => {
                    if (action.payload.id === emailObj.id) {
                        emailObj.isFav = true;
                    }
                    return emailObj;
                })
            };
            return state;
        default:
            return state;
    }
};

export default reducer;