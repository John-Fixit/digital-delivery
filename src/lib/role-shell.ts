/** Maps a user role to the app shell they belong in. Unknown/customer/driver all land in `/home`. */
export function resolveRoleShell(role?: string): "/rider" | "/admin" | "/home" {
  if (role === "rider") return "/rider";
  if (role === "admin") return "/admin";
  return "/home";
}
