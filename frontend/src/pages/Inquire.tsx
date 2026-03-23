import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  message: string;
}

export default function Inquire() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/api/inquiries/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.detail ?? "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Header */}
        <section className="py-16 md:py-24 lg:py-32 bg-background border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Start a project</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl max-w-2xl">
              Let's build something great.
            </h1>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Left: info */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
                    Fill out the form and we'll get back to you within 24 hours with a plan tailored to your needs.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Response time", value: "Within 24 hours" },
                    { label: "Project start", value: "Within 1 week of agreement" },
                    { label: "Delivery", value: "7 days from kickoff" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5 py-3 border-b border-border">
                      <span className="font-sans text-xs text-muted-foreground/50 tracking-wider uppercase">{item.label}</span>
                      <span className="font-serif text-lg font-light text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div>
                {success ? (
                  <div className="flex flex-col gap-4 py-12 text-center">
                    <span className="font-serif text-3xl font-light text-foreground">Thank you!</span>
                    <p className="font-sans text-sm text-muted-foreground">
                      We've received your inquiry and will be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground rounded-none"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground rounded-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground rounded-none"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="budget" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-3 py-2.5 font-sans text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-none"
                      >
                        <option value="">Select a range</option>
                        <option value="under-2k">Under €2,000</option>
                        <option value="2k-4k">€2,000 – €4,000</option>
                        <option value="4k-8k">€4,000 – €8,000</option>
                        <option value="8k-plus">€8,000+</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="timeline" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-3 py-2.5 font-sans text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground rounded-none"
                      >
                        <option value="">When do you need it?</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2-weeks">1–2 weeks</option>
                        <option value="1-month">Within a month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-border bg-background px-3 py-2.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground rounded-none resize-none"
                        placeholder="What are you building? What do you need?"
                      />
                    </div>

                    {error && (
                      <p className="font-sans text-sm text-destructive">{error}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-11 rounded-none font-sans text-sm"
                    >
                      {loading ? "Sending..." : "Send inquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
