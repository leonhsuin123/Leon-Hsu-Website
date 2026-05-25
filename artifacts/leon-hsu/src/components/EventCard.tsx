import { EventItem } from "@/data/events";
import { useTranslation } from "@/contexts/TranslationContext";
import { Button } from "./ui/button";

export default function EventCard({ event }: { event: EventItem }) {
  const { t } = useTranslation();

  if (event.isPast) {
    return (
      <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/30 opacity-60">
        <div className="mb-2 md:mb-0 w-1/4">
          <span className="text-muted-foreground text-sm font-medium">{event.date}</span>
        </div>
        <div className="w-1/2 mb-2 md:mb-0">
          <h4 className="text-foreground font-serif text-lg">{event.venue}</h4>
          <p className="text-sm text-muted-foreground">{event.band}</p>
        </div>
        <div className="w-1/4 text-left md:text-right">
          <span className="text-sm text-muted-foreground">{event.city}, {event.state}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border/50 hover:bg-card/50 transition-colors px-4 -mx-4 rounded-md">
      <div className="mb-4 md:mb-0 md:w-1/4 flex flex-col">
        <span className="text-accent font-bold tracking-wide">{event.date}</span>
        <span className="text-muted-foreground text-sm">{event.time}</span>
      </div>
      
      <div className="mb-6 md:mb-0 md:w-2/5">
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{event.venue}</h3>
      </div>
      
      <div className="mb-6 md:mb-0 md:w-1/5 text-left">
        <span className="text-muted-foreground">{event.city}, {event.state}</span>
      </div>

      <div className="md:w-1/5 flex justify-start md:justify-end">
        {event.ticketUrl && (
          <Button
            asChild
            variant="outline"
            className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
              {t('events.tickets')}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
