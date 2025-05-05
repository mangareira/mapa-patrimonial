import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import type { MarksProps } from "@/utils/interfaces/marks-props";
import useInfo from "@/utils/hooks/useInfo";
import { Marker, OverlayView, OverlayViewF } from "@react-google-maps/api";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Marks({ name, position, marker_pin, id }: MarksProps) {
  const { onOpen } = useInfo();
  const [isHovered, setIsHovered] = useState(false);

  const getPixelPositionOffset = (width: number, height: number) => ({
    x: 20,
    y: -height / 2 
  })

  function createKey(location: google.maps.LatLngLiteral) {
    return location.lat + location.lng
  }

  return (
    <>
      <Marker
        position={position}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        options={{
          icon: {
            url: `/${marker_pin}.png`,
            scaledSize: new google.maps.Size(70, 70),
            anchor: new google.maps.Point(40, 40),
          },
        }}
      />

      <AnimatePresence>
        {isHovered && (
          <OverlayViewF
            position={position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={getPixelPositionOffset}
            key={createKey(position)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="
                bg-black h-[64px] w-[244px] flex items-center
                justify-between px-2 rounded-[20px] shadow-xl">
                <p className="text-xl font-bold pl-2 text-white truncate">{name}</p>
                <Button
                  className="text-white hover:bg-[#039FAA] rounded-lg p-2 transition-colors"
                  onClick={() => onOpen("view", id)}
                >
                  <BsArrowRight size={24} />
                </Button>
              </div>
            </motion.div>
          </OverlayViewF>
        )}
      </AnimatePresence>
    </>
  )
}