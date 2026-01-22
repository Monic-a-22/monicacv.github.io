export function createPageUrl(pageName) {
  if (!pageName || pageName === "Home") {
    return "/"
  }

  const kebab = pageName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase()

  return `/${kebab}`
}
