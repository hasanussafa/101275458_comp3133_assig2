import { gql } from 'apollo-angular';


let schema = {
	
	  LOG_IN: gql`
        query LogIn($user_name: string!, $password: string!){
            login(
                user_name: $user_name,
                password: $password,
            ){
                secret,
                type
            }
        }`,

    SIGN_UP: gql`
    mutation createUser(        
            $firs_tname: string!,
            $last_name: string!,
            $user_name: string!,
            $password: string!,
            $email: string!,
            $type: string!
        ) {
        createUser(
            
            first_name: $first_name,
            last_name: $last_name,
            user_name: $user_name,
            password: $password,
            email: $email,
            type: $type
        ){
            id
            username
            first_name
            last_name
            password
            email
            type
        }
    }`,
  
        CREATE_BOOKING: gql`
        mutation createBooking(
            $user_name: string!,
            $booking_id: string!,
            $booking_start: Date!,
            $booking_end: Date!,
            $booking_date: Date!
        ) {
            createBooking(
                user_name: $user_name,
                booking_id: $booking_id,
                booking_start: $booking_start,
                booking_end: $booking_end,
                booking_date: $booking_date,
                
            )
            {
                id
            }
        }
    `,

    CREATE_LISTING: gql`
        mutation createListing(
            $listing_id: String!,
            $listing_title: String!,
            $address: String!,
            $email: String!,
            $user_name: String!
           
        ) {
            createListing(
                listing_id: $listing_id,
                listing_title: $listing_title,
                address: $street,  
                email: $email,
                user_name: $user_name
               
            )
            {
                id
            }
        }
    `,
    GET_ALL_ADMIN_LISTINGS: gql`
        query getAllAdminListings {
            getAllAdminListings {
                id
                listing_id
                listing_title
                address
                email
                user_name
            }
        }
    `,
    
    GET_ALL_USER_BOOKING: gql`
    query getAllUserBooking(
        $user_name: string!,
        $secret: string!
    ) {
            getAllUserBooking(
                user_name: $user_name,
                secret: $secret
            ) {
                listing_id
                booking_id
                booking_date
                booking_start
                booking_end
                user_name
            }
        }
    `
}

export default schema;