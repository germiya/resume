import "regenerator-runtime/runtime";
import {appListSaga} from './app_watcher_saga';

export default function* rootSaga(){
    yield [appListSaga()];
}