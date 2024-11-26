import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://data.bucks.digital/graphql/";

const client = new GraphQLClient(endpoint);

export const fetchPlayerData = async () => {
  const query = gql`
    query MyQuery {
      teamsByLeagueId(league_tids: 1610612749) {
        players {
          first_name
          last_name
          jersey_number
          height
          weight
          position
          school_name
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.teamsByLeagueId[0].players; // Return the players array
};
