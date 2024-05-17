import React from "react"

interface ProgressCircleProps {
  percentage: number // Progress percentage (0-100)
  strokeWidth?: number // Optional stroke width (default: 4)
  backgroundColor?: string // Optional background color (default: 'gray')
  progressColor?: string // Optional progress color (default: 'currentColor')
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  strokeWidth = 4,
  backgroundColor = "gray",
  progressColor = "currentColor"
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = containerRef.current?.clientWidth || 100

  const size = containerSize
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  // Calculate dash offset with adjustment for starting at top and filling clockwise
  const dashOffset = circumference * (1 - percentage / 100) // Reversed for clockwise

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <svg
        className="rounded-full overflow-hidden w-full h-full"
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className="text-gray-300"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        <circle
          className={`transition duration-350 ease-in-out`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeWidth={strokeWidth}
          strokeLinecap="round" // Optional: round stroke ends for better visuals
          stroke={progressColor}
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start at top
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex flex-col">
          <span>2300</span>
          <span>kcal left</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressCircle
