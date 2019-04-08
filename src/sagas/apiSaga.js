import { take, call, put, fork } from "redux-saga/effects";
import { getUserInfo, validateAddress } from "src/api/api";
import { SET_USER_INFO, SET_ADDRESS, SET_INVALID_ADDRESS, VALIDATE_ADDRESS_API} from "src/actions/actions";



function* fetchUserInfo() {
  const resp = yield call(getUserInfo);

  if (!resp.error) {
    const payload = resp.response.data;
    yield put(SET_USER_INFO(payload));

    yield put(VALIDATE_ADDRESS_API(payload.company.mailing_address.formatted_address, "company"));
  }
}

function* checkAddress(payload) {
  const request = {
    'formatted_address': payload.formatted_address  
  };

  const resp = yield call(validateAddress, request);

  if (!resp.error) {
    yield put(SET_ADDRESS(resp, payload.position))
  } else {
    yield put(SET_INVALID_ADDRESS(payload.position))
  }
}

export default function* apiSaga() {
  let resp = {};
  while (true) {
    const action = yield take(inputAction => { 
      return /^.*_API$/.test(inputAction.type)
    });

    if (action.type === "GET_USER_INFO_API") {
      resp = yield fork(fetchUserInfo);
    } else if ("VALIDATE_ADDRESS_API" === action.type) {
      resp = yield fork(checkAddress, action.payload);
    }
  }
}
