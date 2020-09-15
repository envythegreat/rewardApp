import React from "react"
import Svg, { Path } from "react-native-svg"

const SplashSVG = ()  => {
  return (
    <Svg width={218} height={217} viewBox="0 0 218 217" fill="none">
      <Path
        d="M51.02 106.75c-28.166 0-51-22.834-51-51v-2.32C.02 24.474 23.495 1 52.45 1h1.96c28.957 0 52.431 23.474 52.431 52.43v53.32h-55.82z"
        fill="#2CB9B0"
        fillOpacity=".9"
      />
      <Path
        d="M170.84 110c25.957 0 47 21.043 47 47v6.32c0 28.956-23.474 52.43-52.43 52.43h-1.96c-28.956 0-52.43-23.474-52.43-52.43V110h59.82z"
        fill="#65D1DB"
        fillOpacity=".34"
      />
      <Path
        d="M0 163.679c0 29.202 23.673 53.141 52.875 53.141s52.875-23.673 52.875-52.875V110H53.41C23.913 110 0 134.181 0 163.679z"
        fill="#FDE8CA"
        fillOpacity="1"
      />
      <Path
        d="M111 106.82h52.876c29.202 0 52.876-23.673 52.876-52.876v-1.068C216.752 23.673 193.078 0 163.876 0 134.673 0 111 23.673 111 52.876v53.944z"
        fill="#DFEAEA"
        fillOpacity=".34"
      />
    </Svg>
  )
}

export default SplashSVG