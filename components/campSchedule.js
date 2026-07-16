import Link from "next/link";

// Upcoming, dated events with open availability. Update as the season
// changes — past-dated items should be removed or moved to "programs".
const upcoming = [
  {
    name: "3-Day Summer Horse Camp",
    date: "August 3–5, 2026",
    time: "10:00 AM – 2:30 PM",
    ages: "Ages 6 & Up",
    price: "$250",
    note: "Spots still open — ride twice a day, plus crafts, games, and horse care.",
    status: "open"
  }
];

// Evergreen list of the camps and events offered throughout the year.
const programs = [
  {
    name: "3-Day Camps",
    price: "$250",
    body: "Ages 6+. Ride twice a day with crafts, games, and hands-on learning across three days."
  },
  {
    name: "Themed Day Camps",
    price: "$125 / day",
    body: "Single-day camps built around a theme — Spa Day, Patriotic, Horse Care & Health, and more."
  },
  {
    name: "Mini Camps",
    price: "$65",
    body: "Ages 3–6 with a parent or guardian. Horse rides, crafts, and horse-safety fun in a shorter morning session."
  },
  {
    name: "Sensory-Friendly Horse Camp",
    price: "$75",
    body: "Ages 5+. A gentle, welcoming session with a BCBA present. Parent or guardian attends alongside their camper."
  },
  {
    name: "Parents' Night Out",
    price: "$60 / child",
    body: "Ages 6+. Drop the kids for an evening of horseback riding, crafts, and games — snacks and drinks provided."
  }
];

export default function CampSchedule() {
  return (
    <div className="mt-12">
      {/* Upcoming events */}
      <section>
        <h2 className="text-center text-2xl font-semibold">
          Upcoming Camps
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4">
          {upcoming.map((e, i) => (
            <div
              key={i}
              className="section-band flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-barn-800">
                    {e.name}
                  </h3>
                  {e.status === "open" && (
                    <span className="rounded-full bg-forest-100 px-3 py-0.5 text-xs font-semibold text-forest-700">
                      Spots open
                    </span>
                  )}
                </div>
                <p className="mt-1 font-medium text-gray-700">
                  {e.date} &middot; {e.time}
                </p>
                <p className="text-sm text-gray-600">
                  {e.ages} &middot; {e.price}
                </p>
                <p className="mt-2 text-gray-600">{e.note}</p>
              </div>
              <Link
                href="/#contact-form"
                className="btn-primary shrink-0">
                Reserve a Spot
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Evergreen program list */}
      <section className="mt-12">
        <h2 className="text-center text-2xl font-semibold">
          Camps &amp; Events We Offer
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Throughout the year we host a variety of horse camps and
          events for kids and families in Evansville. Message us on
          Facebook or call{" "}
          <a
            href="tel:+18124993403"
            className="font-medium text-forest-700 hover:underline">
            (812) 499-3403
          </a>{" "}
          for current dates and openings.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <div key={i} className="card h-full p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold text-barn-800">
                  {p.name}
                </h3>
                <span className="shrink-0 font-semibold text-forest-700">
                  {p.price}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
