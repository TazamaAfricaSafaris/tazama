"use client"

interface YouTubeEmbedProps {
  /**
   * YouTube video URL (e.g., "https://www.youtube.com/embed/S8UawcsyQic?si=4nV6RjtwGW4eNPEo")
   * or just the video ID (e.g., "S8UawcsyQic")
   */
  url: string
  /**
   * Video title for accessibility and display
   */
  title?: string
  /**
   * Optional custom caption below the video
   */
  caption?: string
  /**
   * Optional width in pixels (default: 560)
   */
  width?: number
  /**
   * Optional height in pixels (default: 315)
   */
  height?: number
}

export function YouTubeEmbed({
  url,
  title = "YouTube video player",
  caption,
  width = 650,
  height = 360,
}: YouTubeEmbedProps) {
  const getYouTubeEmbedUrl = (input: string): string => {
    // If it's just a video ID, convert it to an embed URL
    if (!input.includes("youtube.com") && !input.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${input}`
    }

    // If it's a youtube.com/watch URL, extract the video ID
    if (input.includes("youtube.com/watch")) {
      const videoId = new URL(input).searchParams.get("v")
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }
    }

    // If it's already an embed URL, return as is
    if (input.includes("youtube.com/embed")) {
      return input
    }

    // If it's a youtu.be short URL, extract the ID
    if (input.includes("youtu.be")) {
      const videoId = input.split("youtu.be/")[1]?.split("?")[0]
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }
    }

    return input
  }

  const embedUrl = getYouTubeEmbedUrl(url)
  const aspectRatio = (height / width) * 100

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: `${aspectRatio}%`,
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {caption && <p className="text-sm text-muted-foreground mt-4 text-center">{caption}</p>}
    </div>
  )
}
