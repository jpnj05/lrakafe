export default function ResponsiveImage({
  src,
  widths,
  sizes,
  alt,
  width,
  height,
  priority = false,
}) {
  const base = src.replace(/\.jpg$/, '')
  const srcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(', ')

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  )
}
