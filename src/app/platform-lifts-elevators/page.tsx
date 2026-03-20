import ServicePage, { generateServiceMetadata } from "@/components/ServicePage";
import serviceData from "../../../content/services/platform-lifts-elevators.json";

export const metadata = generateServiceMetadata(serviceData);

export default function PlatformLiftsPage() {
  return <ServicePage service={serviceData} />;
}
