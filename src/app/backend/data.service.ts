import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import queries from './schema';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private apollo: Apollo) { }

  logIn(formValues: any) {
    return this.apollo.watchQuery<any>({
      query: queries.LOG_IN,
      variables: formValues
    }).valueChanges
  }

  signUp(formValues: any) {
    return this.apollo.mutate({
      mutation: queries.SIGN_UP,
      variables: formValues
    })
  }

  createListing(formValues: any) {
    return this.apollo.mutate<any>({
      mutation: queries.CREATE_LISTING,
      variables: formValues
    })
  }

  createBooking(booking: any) {
    return this.apollo.mutate<any>({
      mutation: queries.CREATE_BOOKING,
      variables: booking
    })
  }

  getAllAdminListings() {
    return this.apollo.watchQuery<any>({
      query: queries.GET_ALL_ADMIN_LISTINGS,
      variables: { secret: localStorage.getItem('secret') }
    }).valueChanges
  }

  getAllUserBooking(secret: string | null, username: string | null) {
    return this.apollo.mutate<any>({
      mutation: queries.GET_ALL_USER_BOOKING,
      variables: {username, secret}
    })
  }
}
