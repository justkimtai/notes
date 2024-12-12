import { createYoga } from 'graphql-yoga';
import { schema } from '@/graphql/schema';

interface NextContext {
  params: Promise<Record<string, string>>
}

const { handleRequest } = createYoga<NextContext>({
  schema: schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
});

export const config = {
  api: {
    bodyParser: false
  }
}

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }