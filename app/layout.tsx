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