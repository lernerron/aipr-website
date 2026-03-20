import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function VideoShowcase() {
  return (
    <Section background="default">
      <Container narrow className="text-center">
        <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden border-4 border-border shadow-lg">
          <iframe
            title="AIP Remodeling Testimonial Video"
            src="https://www.youtube.com/embed/xMSLLwLrfco"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="mt-10">
          <Button
            href="https://www.youtube.com/@AginginPlaceRemodeling"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Watch More Videos
          </Button>
        </div>
      </Container>
    </Section>
  );
}
