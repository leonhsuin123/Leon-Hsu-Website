import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import MediaGrid from "@/components/MediaGrid";
import { mediaData } from "@/data/media";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Media() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Leon Hsu | Media";
  }, []);

  const performances = mediaData;
  const projects = [];

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title={t('media.title')} />

      <div className="container mx-auto px-6 max-w-6xl space-y-24">

        {/* Performances */}
        <section>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 pb-4 border-b border-border/50 text-foreground">
            Performances
          </h2>
          <MediaGrid media={performances} />
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 pb-4 border-b border-border/50 text-foreground">
              Projects
            </h2>
            <MediaGrid media={projects} />
          </section>
        )}

      </div>
    </div>
  );
}
