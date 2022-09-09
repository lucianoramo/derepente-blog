import { request, gql } from "graphql-request";

// eslint-disable-next-line no-undef
const graphqlAPI = process.env.NEXT_PUBLIC_WPRESS_GRAPHQL_API;

export const getPosts = async () => {
    const query = gql`
        query getPosts {
                posts {
                  nodes {
                    author {
                        node {
                                name
                        }
                    }
                    categories {
                      nodes {
                        name
                        slug
                      }
                    }
                    content
                    date
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    excerpt
                    slug
                    title
                  }
                }
              }
        
        `;

    const response = await request(graphqlAPI, query);
    return response.posts.nodes;
}

export const getCategories = async () => {
    const query = gql`
          query GetGategories {
            
              categories {
                        nodes {
                                id: databaseId
                                name
                                slug
                        }
                }
          }
        `;

    const response = await request(graphqlAPI, query);

    return response.categories.nodes;
};

export const getRecentPosts = async () => {
    const query = gql`
        query getRecentPosts {
                posts(last: 3, where: {orderby: {field: DATE, order: ASC}}) {
                  nodes {
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                    title
                    slug
                    date
                  }
                }
              }
        `;
    const response = await request(graphqlAPI, query);

    return response.posts.nodes;
};

export const getPostDetails = async (slug) => {
    const query = gql`
        query getPostDetails {
            post(id: "${slug}", idType: SLUG) {
                postId: databaseId
                slug
                title
                content
                date
                categories {
                    nodes {
                      id: databaseId
                      name
                      slug
                    }
                  }
                featuredImage {
                    node {
                        sourceUrl(size: BIG_SLIDER)
                        altText
                    }
                }
                link
                author {
                    node {
                        name
                        mediaItems {
                            nodes {
                                sourceUrl(size: THUMBNAIL)
                            }
                        }
                    }
                }
                
            }
        }
        
        `;

    const response = await request(graphqlAPI, query, { slug });
    
    return response.post;
}
export const getSimilarPosts = async (categories, id) => {
    const query = gql`
    query getSimilarPosts {
        posts(where: {categoryIn: [${categories}], notIn: "${id}"}, last: 3) {
          nodes {
            postID: databaseId
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            date
          }
        }
      }
    `;
    const result = await request(graphqlAPI, query, { categories, id });
  
    return result.posts.nodes;
  };