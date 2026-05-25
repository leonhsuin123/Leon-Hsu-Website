import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import EventCard from "@/components/EventCard";
import { eventsData } from "@/data/events";
import { useTranslation } from "@/contexts/TranslationContext";
import { useEffect, useState } from "react";
import { fetchGoogleEvents } from "@/lib/googleCalendar";
import type { EventItem } from "@/data/events";

export default function Events() {
  const { t } = useTranslation();

  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Leon Hsu | Events";
  }, []);
  
  const pastEvents = eventsData.filter(e => e.isPast);

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        setError(null);

        const googleEvents = await fetchGoogleEvents();

        console.log("GOOGLE EVENTS RESULT:", googleEvents);

        setUpcomingEvents(googleEvents);
      } catch (err: any) {
        console.error("GOOGLE CALENDAR ERROR:", err);
        setError(err?.message || "Failed to load events");
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  return (
    <div className="min-h-screen pb-32">
      <PageHeader title={t('events.title')} />

      <div className="w-full mx-auto px-6 lg:px-32 mt-12 space-y-24">

        {/* Upcoming Events */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-8 pb-4 border-b border-border text-foreground">
            {t('events.upcoming')}
          </h2>

          <div className="flex flex-col">
            {loading ? (
              <p className="text-muted-foreground py-8">Loading events...</p>
            ) : error ? (
              <p className="text-red-400 py-8">{error}</p>
            ) : upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))
            ) : (
              <p className="text-muted-foreground py-8">
                No upcoming events scheduled at this time.
              </p>
            )}
          </div>
        </section>

        {/* Past Events (hardcoded only) */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-2xl font-serif font-bold mb-8 pb-4 border-b border-border text-foreground opacity-70">
              {t('events.past')}
            </h2>

            <div className="flex flex-col">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
