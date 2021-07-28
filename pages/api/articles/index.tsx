import { datas } from "../../../dummyData/data";

export default function handler(req: any, res: any) {
	res.status(200).json(datas);
}
