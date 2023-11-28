import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width={"330px"}>
			<Skeleton height={"200px"} />
			<CardBody>
				<SkeletonText height={"100px"} />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
