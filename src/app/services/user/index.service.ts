import {HttpClient} from '@angular/common/http'
import {catchError, map, Observable, of, tap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserService {
  private loginUrl = 'https://angular-demo.free.beeceptor.com/login'
  private userUrl = `https://angular-demo.free.beeceptor.com/user`
  constructor(private http: HttpClient ) {
  }

  Login(input: string): Observable<string | null> {
    return this.http.post(this.loginUrl, {input})
      .pipe(
        map((response: any) => {
          return response.id
        }),
        catchError(() => {
          return of(null)
        })
      )
  }

  getUserInformation(userId: string): Observable<User | null> {
    return this.http.get<User | null>(`${this.userUrl}/${userId}`)
      .pipe(
        catchError(error => {
          return of(null)
        })
      )
  }
}

