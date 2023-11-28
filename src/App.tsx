import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			// Allow us to keep the responsive nature of the website
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "190px 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
			</GridItem>
			{/* Only shows ASIDE if the screen is large */}
			<Show above="lg">
				<GridItem area="aside" paddingX={7}>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genre })
						} // ! Notified from genre List and set Genre
					/>
				</GridItem>
			</Show>
			<GridItem padding={3} area="main">
				<GameHeading gameQuery={gameQuery} />
				<Flex marginBottom={5} marginTop={5}>
					<PlatformSelector
						selectedPlatform={gameQuery.platform}
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
					/>
					<Box marginLeft={5}>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						/>
					</Box>
				</Flex>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
