import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import PageHeader from "@/components/PageHeader";
import { useTranslation } from "@/contexts/TranslationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  date: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      date: "",
      message: ""
    }
  });

  function onSubmit(data: ContactFormValues) {
    // TODO: Connect form submission endpoint
    console.log("Form data:", data);
    setIsSubmitted(true);
    form.reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <div className="min-h-screen pb-32">
      <PageHeader title={t('contact.title')} />

      <div className="container mx-auto px-6 max-w-2xl">

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-24"
          >
            <CheckCircle2 size={48} className="text-accent mb-4" />
            <h3 className="text-2xl font-serif text-foreground mb-2">{t('contact.success')}</h3>
            <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.name')}</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-card/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" type="email" className="bg-card/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.subject')}</FormLabel>
                        <FormControl>
                          <Input placeholder="Booking inquiry" className="bg-card/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.date')} (Optional)</FormLabel>
                        <FormControl>
                          <Input type="date" className="bg-card/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your event or project..."
                          className="min-h-[150px] bg-card/50 resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : t('contact.send')}
                </Button>
              </form>
            </Form>

            {/* Email — presented clean below the form, no card box */}
            <div className="mt-12 pt-8 border-t border-border/30 text-center">
              <p className="text-sm text-muted-foreground mb-2">Or reach out directly</p>
              <a
                href="mailto:leonhsumusic@gmail.com"
                className="text-base font-sans text-foreground hover:text-accent transition-colors tracking-wide"
              >
                leonhsumusic@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
