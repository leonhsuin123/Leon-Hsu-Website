import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

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
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <div className="min-h-screen pb-32">
      <PageHeader title={t('contact.title')} subtitle="For bookings, press inquiries, and collaborations." />
      
      <div className="container mx-auto px-6 max-w-4xl mt-12 flex flex-col md:flex-row gap-16">
        
        {/* Left Col - Direct Contact */}
        <div className="w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border/50 rounded-lg p-8"
          >
            <h3 className="font-serif text-xl font-semibold mb-6">Direct Inquiry</h3>
            <div className="flex items-center space-x-4 text-muted-foreground hover:text-accent transition-colors group">
              <div className="p-3 bg-background rounded-full border border-border/50 group-hover:border-accent/50 transition-colors">
                <Mail size={20} className="text-accent" />
              </div>
              <a href="mailto:leon@leonhsumusic.com" className="font-medium">
                leon@leonhsumusic.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Col - Form */}
        <div className="w-full md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-serif text-foreground mb-2">{t('contact.success')}</h3>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
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

                  <Button type="submit" size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : t('contact.send')}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
