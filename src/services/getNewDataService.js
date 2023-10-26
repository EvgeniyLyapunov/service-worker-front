import { map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

function getNewDataService(path) {
  try {
    return ajax(path).pipe(map((data) => data.response));
  } catch (error) {
    return of(error);
  }
}

export default getNewDataService;
