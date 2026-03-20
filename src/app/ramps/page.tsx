import ServicePage, { generateServiceMetadata } from "@/components/ServicePage";
import serviceData from "../../../content/services/ramps.json";

export const metadata = generateServiceMetadata(serviceData);

export default function RampsPage() {
  return <ServicePage service={serviceData} />;
}
