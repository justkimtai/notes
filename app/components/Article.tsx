"use client";
import { gql, useQuery } from '@apollo/client'
import type { Note } from '@prisma/client'

import { bodoniModa } from '../ui/fonts';

const AllNotesQuery = gql`
  query allNotesQuery($first: Int, $after: String){
    notes (first: $first, after: $after){
      pageInfo {
        endCursor
        hasNextPage
      }
      edges{
        cursor
        node {
          id
          title
          content
          isArchived
        }
      }
    }
  }
`

export const Article = () => {

    const { data, loading, error, fetchMore } = useQuery(AllNotesQuery, {
      variables: { first: 2 },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    const { endCursor, hasNextPage } = data.notes.pageInfo;
    return (
        <div>
            <div>
                {data?.notes.edges.map(({node}: { node: Note }) => (
                    <div key={node.id}>
                        <h1 className={`${bodoniModa.className} text-4xl`}>{node.title}</h1>
                        <p className={`${bodoniModa.className} text-xl italic`}>{node.content}</p>
                        <br />
                    </div>
                ))}
            </div>
            {hasNextPage ? (
              <button
              onClick = {() => {
                fetchMore({
                  variables: { after: endCursor },
                  updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.notes.edges = [
                      ...prevResult.notes.edges,
                      ...fetchMoreResult.notes.edges,
                    ];
                    return fetchMoreResult;
                  },
                })
              }}
              >More</button>
            ): (<p>You&apos;ve reached the end!</p>)}
        </div>
    );
}