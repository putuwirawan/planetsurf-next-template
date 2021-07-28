import { datas } from "../../../dummyData/data";

export default function handler(req: any, res: any) {
	const id = req.query.id;

	const filtered = datas.filter((data) => data.id.toString() === id);

	if (filtered.length > 0) {
		res.status(200).json(filtered[0]);
	} else {
		res.status(404).json({ message: `Article with the id of ${id} not found` });
	}
}
