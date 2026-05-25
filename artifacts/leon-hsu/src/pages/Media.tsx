import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import MediaGrid from "@/components/MediaGrid";
import { mediaData } from "@/data/media";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Media() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Leon Hsu | Media";
  }, []);

  return (
    <div className="min-h-screen pb-24">
      <PageHeader title={t('media.title')} />
      
      <div className="container mx-auto px-6 max-w-6xl mt-12">
        <MediaGrid media={mediaData} />
      </div>
    </div>
  );
}
