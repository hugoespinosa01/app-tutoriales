import { request, gql } from 'graphql-request'
const MASTER_URL="https://api-us-west-2.hygraph.com/v2/clrcr6j3f212e01watuu2sb60/master"

export const getCourseList=async()=>{
    const query=gql`
    query CouseList {
        courses(where: {level: Basico}) {
          id
          name
          price
          level
          tags
          time
          author
          banner {
            url
          }
          chapters {
            id
          }
        }
      }
    `

    const result = await request(MASTER_URL,query);
    return result;
}