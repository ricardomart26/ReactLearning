import { Card } from "react-bootstrap";

type StoreItemProps = {
	id: number
	name: string
	price: number
	imgUrl: string
};

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
	return (
		<Card>
			<Card.Img 
				variant="top"
				height="200px" 
				style={{objectFit: "cover"}}
			>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{price}</span>

				</Card.Title>
			</Card.Body>
			</Card.Img>
		</Card>
	);
}
