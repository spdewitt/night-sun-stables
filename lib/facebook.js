const FB_GRAPH_URL = "https://graph.facebook.com/v19.0";

/**
 * Fetches the latest posts from the Night Sun Stables Facebook page
 * via the official Graph API. Requires two env vars:
 *
 *   FB_PAGE_ID           - the numeric page ID (or page username)
 *   FB_PAGE_ACCESS_TOKEN - a long-lived Page access token
 *
 * Until those are set this returns null and the site falls back to
 * the Facebook Page Plugin embed (no credentials needed).
 *
 * Results are cached for 24 hours (`revalidate: 86400`), so the page
 * refreshes from Facebook once a day without any cron job.
 */
export async function getFacebookPosts(limit = 4) {
  const pageId = process.env.FB_PAGE_ID;
  const token = process.env.FB_PAGE_ACCESS_TOKEN;

  if (!pageId || !token) {
    return null;
  }

  try {
    const fields = "message,permalink_url,created_time,full_picture";
    const url = `${FB_GRAPH_URL}/${pageId}/posts?fields=${fields}&limit=${limit}&access_token=${token}`;

    const res = await fetch(url, { next: { revalidate: 86400 } });

    if (!res.ok) {
      console.error("Facebook Graph API error:", res.status);
      return null;
    }

    const json = await res.json();

    return (json.data || [])
      .filter(post => post.message)
      .map(post => ({
        id: post.id,
        message: post.message,
        permalink: post.permalink_url,
        createdTime: post.created_time,
        picture: post.full_picture || null
      }));
  } catch (err) {
    console.error("Failed to fetch Facebook posts:", err);
    return null;
  }
}
