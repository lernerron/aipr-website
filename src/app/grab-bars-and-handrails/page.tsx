import ServicePage, { generateServiceMetadata } from "@/components/ServicePage";
import serviceData from "../../../content/services/grab-bars-and-handrails.json";

export const metadata = generateServiceMetadata(serviceData);

export default function GrabBarsPage() {
  return <ServicePage service={serviceData} />;
}
