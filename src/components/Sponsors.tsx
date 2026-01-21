import { sponsors } from "@/data/sponsors";
import { Badge } from "@/components/ui/badge";

const SponsorImage = ({
  name,
  logo,
  url,
  className,
}: {
  name: string;
  logo: string;
  url?: string;
  className?: string;
}) => {
  const Img = (
    <img
      src={logo}
      alt={name}
      loading="lazy"
      className={`object-contain opacity-90 hover:opacity-100 transition duration-300 ${className}`}
    />
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className="inline-flex items-center justify-center"
    >
      {Img}
    </a>
  ) : (
    <div className="inline-flex items-center justify-center">{Img}</div>
  );
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/10 blur-[170px] rounded-full" />

      <div className="relative container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Powered By
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Sponsors & Partners
          </h2>
          <p className="text-muted-foreground mt-5">
            Zypherix IT Fest is proudly supported by our amazing sponsors.
          </p>
        </div>

        {/* MAIN SPONSORS */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              Main Sponsors
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto place-items-center">
            {sponsors.main.map((s) => (
              <SponsorImage
                key={s.name}
                name={s.name}
                logo={s.logo}
                url={s.url}
                className="h-24 md:h-28 w-auto"
              />
            ))}
          </div>
        </div>

        {/* CO SPONSORS */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <Badge
              variant="outline"
              className="border-cyber-pink/30 bg-cyber-pink/10 text-cyber-pink"
            >
              Co-Sponsors
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto place-items-center">
            {sponsors.co.map((s) => (
              <SponsorImage
                key={s.name}
                name={s.name}
                logo={s.logo}
                url={s.url}
                className="h-20 md:h-24 w-auto"
              />
            ))}
          </div>
        </div>

        {/* SUB SPONSORS - MARQUEE */}
        <div className="mt-8">
          <div className="flex justify-center mb-8">
            <Badge
              variant="outline"
              className="border-border/40 bg-muted/30 text-muted-foreground"
            >
              Sub Sponsors
            </Badge>
          </div>

          <div className="relative overflow-hidden">
            {/* fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="marquee flex gap-14 w-max items-center">
              {[...sponsors.sub, ...sponsors.sub].map((s, idx) => (
                <div key={`${s.name}-${idx}`} className="flex items-center justify-center">
                  <SponsorImage
                    name={s.name}
                    logo={s.logo}
                    url={s.url}
                    className="h-14 md:h-16 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="mt-20 text-center">
          <p className="text-muted-foreground">Interested in sponsoring Zypherix?</p>
          <a
            href="#contact"
            className="inline-flex mt-4 px-7 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Become a Sponsor
          </a>
        </div> */}
      </div>

      {/* Marquee animation */}
      <style>{`
        .marquee {
          animation: marquee 26s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
