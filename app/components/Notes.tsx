"use client";
import { gql, useQuery } from '@apollo/client'
import type { Note } from '@prisma/client'

import { bodoniModa } from '../ui/fonts';

const AllNotesQuery = gql`
  query {
    notes {
      id
      title
      content
      isArchived
    }
  }
`

export const Notes = () => {

    const { data, loading, error } = useQuery(AllNotesQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    return (
        <div>
            <div>
                {data.notes.map((note: Note) => (
                    <div key={note.id}>
                        <h1 className={`${bodoniModa.className} text-4xl`}>{note.title}</h1>
                        <p className={`${bodoniModa.className} text-xl italic`}>{note.content}</p>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}