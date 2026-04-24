import { redirect } from "next/navigation";

// The homepage hero + closing banner both have "Download App" CTAs.
// /download sends users straight to the homepage anchor so there's never
// an orphan route; once the App Store link is live, swap for a permanent redirect.
export default function DownloadPage() {
  redirect("/#start");
}
