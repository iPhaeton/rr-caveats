import { takeEvery, race, take, put, all } from 'redux-saga/effects';
import { START_SIGNIN, SIGN_IN, CANCEL_SIGNIN } from './constants';
import { setError, setVisible, setValue, cancelSignIn } from './actions';

const postSignIn = (body) => {
    const { name, password } = body;
    if (name === 'Ilya' && password === '123') {
        return Promise.resolve('ok');
    } else {
        return Promise.reject('Incorrect credentials');
    }
}

/////////////////////////////////////////////////////////////////////////////////////

function* handleSignInFlow() {
    yield put(setValue(null));
    yield put(setError(null));
    yield put(setVisible(true));

    while (true) {
        const { confirmSignIn } = yield race({
            confirmSignIn: take(SIGN_IN),
            cancelSignIn: take(CANCEL_SIGNIN),
        });

        if (confirmSignIn) {
            const values = confirmSignIn.payload;

            try {
                const res = yield postSignIn(values);
                yield put(setValue(res));
                yield put(setError(null));
                break;
            } catch (error) {
                yield put(setValue(null));
                yield put(setError(error));
                continue;
            }
        } else {
            break;
        }
    };

    yield put(setVisible(false));
}

export function* signInFlow() {
    yield takeEvery(START_SIGNIN, handleSignInFlow);
};

////////////////////////////////////////////////////////////////////////////////////

function* startSignInSaga() {
    yield put(setValue(null));
    yield put(setError(null));
    yield put(setVisible(true));
}

function* signInSaga(action) {
    const values = action.payload;

    try {
        const res = yield postSignIn(values);
        yield put(setValue(res));
        yield put(setError(null));
    } catch (error) {
        yield put(setValue(null));
        yield put(setError(error));
        return;
    }

    yield put(setVisible(false));
}

function* cancelSignInSaga () {
    yield put(setVisible(false));
}

export function* signInWatcher() {
    yield all([
        takeEvery(START_SIGNIN, startSignInSaga),
        takeEvery(SIGN_IN, signInSaga),
        takeEvery(CANCEL_SIGNIN, cancelSignInSaga)
    ])
}
