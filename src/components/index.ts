
export * from "@/components/counter/counter-component.ts";
export * from "@/components/card/card-component.ts";
export * from "@/components/button/button.ts";
export * from "@/components/myButton/button.ts";

import { componentRegistry } from "@a2ui/lit/ui";
import { OrgChart } from "@/components/myButton/button.ts";

componentRegistry.register("OrgChart", OrgChart, "org-chart");