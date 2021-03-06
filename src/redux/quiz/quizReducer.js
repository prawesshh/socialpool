import {
  FETCH_Q_CATEGORY,
  SET_Q_ERROR,
  TOGGLE_Q_LOADING,
  FETCH_Q_QUESTIONS,
  SELECTED_CATEGORY,
  CLEAR_QUESTIONS,
} from './quizTypes';

const initialState = {
  loading: false,
  qcategories: [],
  questons: [],
  error: '',
  s_category: '',
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_Q_CATEGORY:
      let cat = [];
      action.payload.map((item) => {
        cat.push({
          label: `${item.name}`,
          value: `${item.id}`,
        });
      });

      return {
        ...state,
        error: '',
        qcategories: cat,
      };
    case TOGGLE_Q_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_Q_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_Q_QUESTIONS:
      return {
        ...state,
        loading: false,
        questons: action.payload,
      };
    case SELECTED_CATEGORY:
      var name;
      if (action.payload > 0) {
        name = state.qcategories.filter(
          (item) => item.value == action.payload,
        )[0].label;
      } else {
        name = 'Ramdom';
      }
      return {
        ...state,
        s_category: name,
      };
    case CLEAR_QUESTIONS:
      return {
        ...state,
        // loading: false,
        questons: [],
      };
    default:
      return state;
  }
};

export default quizReducer;
