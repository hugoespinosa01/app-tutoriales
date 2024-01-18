import { request, gql } from "graphql-request";
const MASTER_URL =
  "https://api-us-west-2.hygraph.com/v2/clrcr6j3f212e01watuu2sb60/master";

export const getCourseList = async (level) => {
  const query =
    gql`
    query CouseList {
        courses(where: {level: ` +
    level +
    `}) {
          id
          name
          price
          level
          tags
          time
          author
          description {
            markdown
          }
          banner {
            url
          }
          chapters {
            content {
              heading
              description {
                markdown
              }
              output {
                markdown
              }
            }
            title
            id
          }
        }
      }
    `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "` +
    courseId +
    `", userEmail: "` +
    userEmail +
    `", course: {connect: {id: "` +
    courseId +
    `"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
      }
      }
  }
  }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const getUserEnrolledCourse = async (userId, userEmail) => {
  const query = gql`
    query GetUserConrolledCourse {
      userConrolledCourses(
        where: { courseId: `+userId+`, userEmail: `+userEmail+` }
      ) {
        id
        courseId
        completedCharper {
          charperId
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
