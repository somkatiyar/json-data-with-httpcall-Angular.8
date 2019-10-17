// add two properties in tsconfig.json

"resolveJsonModule":true,
"allowSyntheticDefaultImports":true,


// in service (for importing)
import sampleData from '../../assets/json/api.json';


//calling
getJsonData(body): Observable<any> {
    return this.http.get('../../assets/json/api.json').pipe(map(results => results));
  }