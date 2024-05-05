import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardDetails {
    name: string;
    description?: string;
    image?: string | StaticImport;
}

export default CardDetails;