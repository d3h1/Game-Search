import { Badge } from "@chakra-ui/react";

type Props = {
	score: number;
};

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
    
	return <Badge colorScheme={color} fontSize={'14px'} borderRadius={2} paddingX={2}>{score}</Badge>;
};

export default CriticScore;
