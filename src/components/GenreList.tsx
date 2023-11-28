import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

// * NOTIFIES PARENT OF THIS COMPONENT THAT GENRE HAS BEEN SELECTED
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	// Using our generic useData hook
	const { data, isLoading, error } = useGenres();

	// Dont need this technically since we are now calling from a static list of objects
	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY={"5px"}>
						<HStack>
							<Image
								boxSize={"32px"}
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
								objectFit={"cover"}
							/>
							<Button
								whiteSpace={"normal"}
								textAlign={"left"}
								fontWeight={
									genre.id === selectedGenre?.id
										? "bold"
										: "normal"
								}
								onClick={() => onSelectGenre(genre)}
								variant={"link"}
								fontSize={"lg"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
