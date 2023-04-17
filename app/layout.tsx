/**
 * This component is a feature added in NextJS 13 - Layouts: https://beta.nextjs.org/docs/routing/pages-and-layouts
 * The UI rendered here will wrap the content of ALL routes in this directory.
 * This UI is not re-rendered and preserves state. If you wish to have it re-render and re-initialize state, use a template instead (describede in link above).
 */
import NavDrawer from "./navDrawer";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* The navdrawer below will be rendered in all child routes of '/' */}
          <NavDrawer />
          {children}
        </Providers>
        </body>
    </html>
  );
}