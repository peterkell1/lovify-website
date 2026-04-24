import { redirect } from "next/navigation";
import { site } from "@/content/site";

export default function ReportBugPage() {
  redirect(
    `mailto:${site.contact.email}?subject=${encodeURIComponent(
      "Lovify bug report",
    )}&body=${encodeURIComponent(
      "Describe what happened, what you expected, and which device/OS you're on. Screenshots welcome.\n\n---\n\n",
    )}`,
  );
}
