import { getSourceInfo } from '$lib/server/scraping/ai';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
    const url = event.url.searchParams.get("url");
    if (!url) return new Response("no url specified", { status: 400 });

    // const accesstoken = event.request.headers.get("Authorization");

    const sourceInfo = await getSourceInfo(new URL(url));

    return json(sourceInfo, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    });
};