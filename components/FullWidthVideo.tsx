import { useState, useRef } from 'react';
import Image from 'next/image';
import { useContentfulLiveUpdates, useContentfulInspectorMode } from '@contentful/live-preview/react';
import { FullWidthVideo as FullWidthVideoType } from '@/types/contentful';

interface FullWidthVideoProps {
  fullWidthVideo: FullWidthVideoType;
}

function getYouTubeEmbedUrl(url: string, autoplay: boolean, loop: boolean): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (!match || match[2].length !== 11) return null;
  const id = match[2];
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(autoplay ? { autoplay: '1', mute: '1' } : {}),
    ...(loop ? { loop: '1', playlist: id } : {}),
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function getVimeoEmbedUrl(url: string, autoplay: boolean, loop: boolean): string | null {
  const regExp = /vimeo\.com\/(\d+)/;
  const match = url.match(regExp);
  if (!match) return null;
  const params = new URLSearchParams({
    ...(autoplay ? { autoplay: '1', muted: '1', background: '1' } : {}),
    ...(loop ? { loop: '1' } : {}),
  });
  return `https://player.vimeo.com/video/${match[1]}?${params.toString()}`;
}

export default function FullWidthVideo({ fullWidthVideo: initial }: FullWidthVideoProps) {
  const data = useContentfulLiveUpdates(initial);
  const inspectorProps = useContentfulInspectorMode({ entryId: data.sys.id });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    title,
    subtitle,
    videoUrl,
    video,
    posterImage,
    autoplay = true,
    loop = true,
    overlayText = true,
  } = data.fields;

  const posterUrl = posterImage?.fields?.file?.url ? `https:${posterImage.fields.file.url}` : undefined;
  const videoAssetUrl = video?.fields?.file?.url ? `https:${video.fields.file.url}` : null;

  let embedUrl: string | null = null;
  if (videoUrl) {
    embedUrl = getYouTubeEmbedUrl(videoUrl, autoplay, loop) || getVimeoEmbedUrl(videoUrl, autoplay, loop);
  }

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const showOverlay = overlayText && (title || subtitle) && (!isPlaying || autoplay);

  return (
    <section className="relative w-full bg-black">
      <div
        className="relative w-full"
        style={{ aspectRatio: '16 / 9' }}
        {...inspectorProps({ fieldId: videoUrl ? 'videoUrl' : 'video' })}
      >
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title || 'Video'}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : videoAssetUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoAssetUrl}
              autoPlay={autoplay}
              loop={loop}
              muted={autoplay}
              playsInline
              controls={!autoplay}
              poster={posterUrl}
              className="absolute inset-0 w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {!autoplay && !isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center z-10 group"
                aria-label="Play video"
              >
                {posterUrl && (
                  <Image
                    src={posterUrl}
                    alt={posterImage?.fields?.title || ''}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="relative z-10 w-20 h-20 rounded-full bg-ph-red/90 group-hover:bg-ph-red flex items-center justify-center transition-colors shadow-xl">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </>
        ) : posterUrl ? (
          <Image
            src={posterUrl}
            alt={posterImage?.fields?.title || title || ''}
            fill
            className="object-cover"
          />
        ) : null}

        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end pointer-events-none z-20">
            <div className="max-w-4xl mx-auto px-8 pb-12 w-full">
              {title && (
                <h2
                  className="text-3xl md:text-5xl font-bold text-white mb-3"
                  {...inspectorProps({ fieldId: 'title' })}
                >
                  {title}
                </h2>
              )}
              {subtitle && (
                <p
                  className="text-lg md:text-xl text-white/90"
                  {...inspectorProps({ fieldId: 'subtitle' })}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
