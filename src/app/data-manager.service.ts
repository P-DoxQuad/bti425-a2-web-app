import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

// Import data model classes, for example...
import { TermEnglish } from "./data-class";


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

  // Base URL for the web API
  //private url: string = 'https://pam-2020-a2and3webapi.herokuapp.com/api';
  private url: string = 'http://localhost:8080/api';

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
    return this.http.get<TermEnglish[]>(`${this.url}/terms/english`)
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
  /*reqresUserGetById(id: number): Observable<ReqresUserSinglePackage> {
    return this.http.get<ReqresUserSinglePackage>(`${this.urlReqres}/${id}`);
  }*/

  // Add new
  TermAdd(newItem: TermEnglish): Observable<TermEnglish> {
    return this.http.post<TermEnglish>(this.url, newItem, this.httpOptions)
      .pipe(
        tap((newItem: TermEnglish) => console.log(`Added Term ${newItem.wordEnglish}`)),
        catchError(this.handleError<TermEnglish>('Term add'))
      );
  }

  // Edit existing
  /*reqresUserEdit(id: number, newItem: ReqresUserCreate): Observable<ReqresUserCreateResponse> {
    return this.http.put<ReqresUserCreateResponse>(`${this.urlReqres}/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: ReqresUserCreateResponse) => console.log(`Edited item ${newItem.name}`)),
        catchError(this.handleError<ReqresUserCreateResponse>('User edit'))
      );
  }*/

  // Delete item
  /*reqresUserDelete(id: number) {
    return this.http.delete(`${this.urlReqres}/${id}`)
      .pipe(
        tap(() => console.log(`Deleted item with id ${id}`)),
        catchError(this.handleError('User delete'))
      );
  }*/


}
