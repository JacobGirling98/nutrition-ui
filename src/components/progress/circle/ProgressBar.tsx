import React, { PropsWithChildren } from "react"

interface ProgressCircleProps {
  percentage: number
  strokeWidth?: number
}

const ProgressCircle = ({
  percentage,
  strokeWidth = 4,
  children
}: PropsWithChildren<ProgressCircleProps>) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const containerSize = containerRef.current?.clientWidth || 100

  const size = containerSize
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  const dashOffset = circumference * (1 - percentage / 100)

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
          stroke={"#d1d5db"}
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
          strokeLinecap="round"
          stroke={"#f3f4f6"}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {children && children}
      </div>
    </div>
  )
}

export default ProgressCircle
