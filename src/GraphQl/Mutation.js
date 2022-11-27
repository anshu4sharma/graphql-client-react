import { gql } from '@apollo/client'
export const CREATE_USER_MUTATION = gql`
mutation createUser(
        $name:String!
        $email:String! 
        $body:String!
    )
        {
        createUser(
            name:$name 
            email:$email
            body:$body
            )
        {
            email
        }
    }
`