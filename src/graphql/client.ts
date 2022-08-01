import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(
  `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_GRAPHCMS}/master`
);
