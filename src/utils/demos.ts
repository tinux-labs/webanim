const demos = import.meta.glob<{ default: any }>("../demos/**/index.astro", {
  eager: true,
});

export function getDemoComponent(path: string) {
  const key = `../demos/${path}/index.astro`;
  const mod = demos[key];
  return mod?.default;
}
