import { Request, Response } from "express";
import { TeacherSession } from "../../react-client/src/constants/interfaces";
import { Game } from "../classes";
import { ACCESS_TAG } from "../pages/errorTypes";

/**
 * Get array of news data for a particular game.
 * @param req
 * @param res
 */
const getNews = async (req: Request, res: Response) => {
    //Verify Session
    if (!req.session.ir3teacher) {
        res.redirect(`/index.html?error=${ACCESS_TAG}`);
        return;
    }

    const { gameId }: TeacherSession = req.session.ir3teacher;

    try {
        const results = await Game.getAllNews(gameId);
        res.send(results);
    } catch (error) {
        console.error(error);
        //Manually send response if fails (unlikely)
        res.status(500).send([
            {
                newsId: 69,
                newsTitle: "DATABASE FAILED"
            }
        ]);
    }
};

export default getNews;
