import { Calendar, Clock, Video } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-primary font-heading font-semibold mb-3 text-sm tracking-widest uppercase">
                Let's Talk
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Ready to build
                <br />
                something great?
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Book a free 30-minute discovery call. We'll discuss your project,
              timeline, and how I can help you ship faster.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Video,
                  title: "Video Call",
                  desc: "Google Meet or Zoom — your choice",
                },
                {
                  icon: Clock,
                  title: "30 Minutes",
                  desc: "Focused discussion on your needs",
                },
                {
                  icon: Calendar,
                  title: "Flexible Scheduling",
                  desc: "Pick a time that works for you",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden min-h-[650px]">
            <iframe
              src="https://calendly.com/d/YOUR_LINK"
              width="100%"
              height="650"
              frameBorder="0"
              title="Schedule a call"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
