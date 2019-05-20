import {
    call
} from 'redux-saga/effects';
import api from '../../services/api';

export function* addFavorite(action) {
    const response = yield call(api.get, `/repos/${action.payload.repository}`)
}