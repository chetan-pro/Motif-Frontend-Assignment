import ActionsTypes from "../../Helpers/constant.helper";
import axios from 'axios';

const baseUrl = "https://6366339879b0914b75cba9c2.mockapi.io/api/email";

export const getAllEmails = () => async(dispatch) => {
    try {
        const { data } = await axios.get(baseUrl);
        dispatch({ type: ActionsTypes.FetchAllEmail, payload: data });
        return dispatch;
    } catch (error) {
        console.log(error);
    }
};

export const getEmailById = (emailObj) => async(dispatch) => {
    try {
        const { data } = await axios.get(baseUrl + `/${emailObj.id}`);
        dispatch({ type: ActionsTypes.FetchEmailById, payload: {...data, ...emailObj } });
        return dispatch;
    } catch (error) {
        console.log(error);
    }
};