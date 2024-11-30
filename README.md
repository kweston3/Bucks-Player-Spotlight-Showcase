# Milwaukee Bucks Player Spotlight Showcase

This project was created as part of the Milwaukee Bucks Digital Team interview process. The goal of the project is to design and develop a **Player Spotlight page** that highlights information about a Milwaukee Bucks player, emphasizing a visually engaging design, interactivity, and responsive user experience.

## Features

- **API Integration:** Pulls player data dynamically using the provided GraphQL endpoint.
- **Responsive Design:** Ensures seamless user experience across devices of various screen sizes.
- **Interactive Elements:** Allows users to explore player bios and detailed information interactively.
- **Brand-Aligned Styling:** Incorporates the Milwaukee Bucks branding colors:
  - **Primary:** `#00471b`
  - **Secondary:** `#f0ebd2`
  - **Accent:** `#007dc5`

## Technologies Used

- **Framework:** React
- **GraphQL:** For querying player data from the Bucks API.
- **Styling:** CSS
- **Responsive Design Techniques:** Flexbox/Media Queries/etc.

## API Details

- **Endpoint:** `https://data.bucks.digital/graphql/`
- **Query:**
  ```graphql
  query MyQuery {
    teamsByLeagueId(league_tids: 1610612749) {
      name
      city
      division
      conference_rank
      file_team_name
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
  ```
