import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
    const id = req.query.id;
    if (!id || typeof id !== "string" || isNaN(Number(id))) {
        return res.status(400).json({ message: "Invalid id" });
    }

    const { data } = await fetch(`https://cote-api-zzova.run.goorm.site/problem/${id}`).then(res => res.json());

    return res.status(200).json(data);
};

export default handler;
