export const getDocsQuery = `
query documentQuery($relativePath: String!) {
  docs(relativePath: $relativePath) {
    title
    body
    order
  }
  docsConnection(sort: "order") {
    edges {
      node {
        title
        section
        order
        _sys {
          filename
          collection {
            name
          }
        }
      }
    }
  }
}
`;
