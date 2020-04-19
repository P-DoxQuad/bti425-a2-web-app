import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

// Import data model classes, for example...
import { TermEnglish, AddTermEnglish, Definition, AddDefinition, LikeIncrease } from "./data-class";


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

  // Base URL for the web API
  //private url: string = 'https://pam-2020-a2and3webapi.herokuapp.com/api';
  private url: string = 'https://bti425-a2-web-api.herokuapp.com/api';
  //private url: string = 'http://localhost:8080/api';

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler, from the Angular docs
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // Callable methods...
  // For each entity, as appropriate, get, add, edit, delete
  // Add other methods that provide general service to all components in the app

  getAllEnglish(): Observable<TermEnglish[]> {
    console.log("GET:" + `${this.url}/terms/english`);
    return this.http.get<TermEnglish[]>(`${this.url}/terms/english`);
  }

  /*getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/comments`)
  }*/

  /*getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
  }*/

  // ############################################################
  // Data service operations - reqres.in web API

  // Get all
  /*reqresUserGetAll(): Observable<ReqresUserCollectionPackage> {
    return this.http.get<ReqresUserCollectionPackage>(`${this.urlReqres}?per_page=8`);
  }*/

  // Get one
  englishGetByID(id: string): Observable<TermEnglish> {
    console.log("GetByID=" + `${this.url}/term/english/details/${id}`);
    return this.http.get<TermEnglish>(`${this.url}/term/english/details/${id}`);
  }

  // Get by name
  englishGetByName(text: string): Observable<TermEnglish> {
    console.log("Search For = " + `${text}`);
    return this.http.get<TermEnglish>(`${this.url}/terms/english/${text}`);
  }

  // Add new
  englishTermAdd(newItem: AddTermEnglish): Observable<TermEnglish> {
    console.log("Body: ", newItem);
    return this.http.post<TermEnglish>(`${this.url}/term/english/`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: TermEnglish) => console.log(`Added Term ${newItem.wordEnglish}`)),
        catchError(this.handleError<TermEnglish>('Term add'))
      );
  }

  // Edit existing
  englishDefAdd(id: string, newItem: AddDefinition): Observable<Definition> {
    console.log("EditByID=" + `${this.url}/term/english/${id}/add-definition`);
    console.log(`Added \n Word: ${newItem.authorName}
              \n NonEnglish Word: ${newItem.dateCreated}
              \n Expanded Word: ${newItem.definition}
              \n Image: ${newItem.quality}
              \n Audio: ${newItem.likes}`);
    return this.http.put<Definition>(`${this.url}/term/english/${id}/add-definition`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: Definition) => console.log(`Added new Definition ${newItem.definition}`)),
        catchError(this.handleError<Definition>('Term edit'))
      );
  }

  likeDefinition(id: string, newItem: LikeIncrease): Observable<Definition> {
    console.log("EditByID=" + `${this.url}/term/english/${id}/up-likecount-def`);
    console.log(`Added \n Like: ${newItem.likes}`);
    return this.http.put<Definition>(`${this.url}/term/english/${id}/up-likecount-def`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: Definition) => console.log(`Added Like ${newItem.likes}`)),
        catchError(this.handleError<Definition>('Add Like'))
      );
  }

  // Delete item
  englishTermDelete(id: string) {
    return this.http.delete(`${this.url}/term/english/delete/${id}`)
      .pipe(
        tap(() => console.log(`Deleted item with id ${id}`)),
        catchError(this.handleError('Term delete'))
      );
  }


}
