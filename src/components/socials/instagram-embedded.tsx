/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client"

import { useEffect, useRef } from "react"

interface InstagramEmbedProps {
  /**
   * Instagram post URL (e.g., "https://www.instagram.com/p/DDq1Yf5i956/")
   * or just the post ID (e.g., "DDq1Yf5i956")
   */
  url: string
  /**
   * Optional custom caption
   */
  caption?: string
}

export function InstagramEmbed({ url, caption }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const getInstagramUrl = (input: string): string => {
    // If it's just a post ID, convert it to a full URL
    if (!input.includes("instagram.com")) {
      return `https://www.instagram.com/p/${input}/`
    }
    return input
  }

  const instagramUrl = getInstagramUrl(url)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//www.instagram.com/embed.js"
    script.async = true
    script.defer = true

    script.onload = () => {
      // Instagram provides the instgrm object when the script loads
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    // Append script to document if not already present
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      document.body.appendChild(script)
    } else {
      // If script already exists, just process the embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    return () => {
      // Cleanup: optional, script can remain loaded
    }
  }, [])

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [instagramUrl])

  return (
    <div ref={containerRef} className="w-full max-w-md mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={instagramUrl}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "99.375%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href={instagramUrl}
            style={{
              background: "#fff",
              lineHeight: 0,
              padding: 0,
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Loading post...
          </a>
        </div>
      </blockquote>
      {caption && <p className="text-sm text-muted-foreground mt-4 text-center">{caption}</p>}
    </div>
  )
}

// Augment the Window interface to include Instagram's embed object
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
