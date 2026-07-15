# Night Sun Stables — Local SEO Checklist

The website itself is in good shape. Almost everything below happens *off* the
website and is what actually moves local Google rankings.

## 1. Get into the Google Business Profile (biggest impact)

The listing exists with a 5.0 rating and 22 reviews, and it IS already
claimed — managed by an email starting with "ni…@" (likely a
nightsunstables-branded address).

1. Figure out who holds that email. If it's Carmen's, log into
   https://business.google.com with it — done.
2. If the email is lost, go to the listing, click "Own this business?" →
   **Request Access**. Google emails the current manager; if nobody responds
   within ~7 days, Google typically transfers access after verifying the
   business.
3. Once in, from the Business Profile dashboard:
   - Set primary category: **Horseback riding service** (or Horse riding school).
   - Add secondary categories: Horse boarding stable, Children's camp.
   - Confirm the website link: `https://www.nightsunstables.com`
   - Confirm hours, phone (812) 499-3403, and address.
   - Upload 15–20 photos: the arenas (indoor + outdoor), stalls, camp
     activities, lesson horses, birthday parties. Refresh a few monthly.
   - Post updates (camp registration open, show results) — these show up
     directly in Google search results.

## 2. Keep the reviews coming (~ongoing)

Reviews are the #1 local ranking factor after the profile itself.

- Ask happy lesson parents and boarders for a Google review. A small card or
  barn poster with a QR code to the review link works great (the dashboard
  gives you a "Get more reviews" share link).
- It helps when reviews naturally mention the services: "lessons," "camp,"
  "boarding," "birthday party."
- Respond to every review, even just "Thank you!" — Google notices activity.

## 3. Claim & align existing directory listings (~30 min, one time)

These sites already list the stable. Claim each and make sure the
name/address/phone match the website **exactly**
(`Night Sun Stables · 2601 Night Sun Dr, Evansville, IN 47725 · (812) 499-3403`):

- Yelp: https://www.yelp.com/biz/night-sun-stables-evansville
- Nextdoor: https://nextdoor.com/pages/night-sun-stables-evansville-in/
- Macaroni KID Evansville: https://evansville.macaronikid.com/directory/69ee0fe3c7399a145c4b3a01/night-sun-stables
- Mad Barn equine directory: https://madbarn.com/directory/night-sun-stables/
- horse-boarding-finder.com: https://horse-boarding-finder.com/en/facility/night-sun-stables-evansville-in/
- Add a listing on newhorse.com (they have an Evansville lessons page).

## 4. Facebook → website connection

The website now shows a "Latest from the Barn" section with the Facebook page
embedded — no setup needed, it already works.

**Optional upgrade**: to show posts as real website content that Google can
index, the site needs a Facebook Page access token.

Carmen's part (~2 minutes): grant the site maintainer access to the page —
Page → **Settings** → **Page access** → **Add new** → add them with partial
access.

Site maintainer's part (~15 minutes, done independently afterward):

1. Go to https://developers.facebook.com and create an app (type: Business,
   e.g. "Night Sun Stables Website"). It can stay in development mode —
   no app review needed for a page you have a role on.
2. Open **Graph API Explorer**, select the app, request the
   `pages_show_list` and `pages_read_engagement` permissions, and generate
   a **Page access token** for Night Sun Stables.
3. Extend it to a long-lived token via the **Access Token Debugger**.
4. Get the Page ID from the Explorer's `me/accounts` response.
5. Add `FB_PAGE_ID` and `FB_PAGE_ACCESS_TOKEN` as environment variables in
   Netlify (Site configuration → Environment variables) and redeploy.

The site checks Facebook once a day automatically after that — the homepage
section upgrades from the embedded widget to indexable posts with no code
changes.

Tip regardless: when posting camp/lesson announcements on Facebook, include a
link back to the relevant page (nightsunstables.com/youth-camps, /lessons) —
those clicks and links are ranking signals.

## 5. Content ideas for the website (as time allows)

Each of these targets a search nobody local competes hard for:

- A dedicated **/boarding** page (stall count, 12x12 matted stalls,
  indoor/outdoor arena, what board includes).
- A dedicated **/birthday-parties** page.
- 3–4 short blog posts a year: "What to expect at your first riding lesson,"
  camp recap with photos, show results. The blog already exists on the site —
  it just needs posts.
