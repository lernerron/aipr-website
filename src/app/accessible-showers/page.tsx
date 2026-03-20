import ServicePage, { generateServiceMetadata } from "@/components/ServicePage";
import serviceData from "../../../content/services/accessible-showers.json";

export const metadata = generateServiceMetadata(serviceData);

export default function AccessibleShowersPage() {
  return <ServicePage service={serviceData} />;
}
